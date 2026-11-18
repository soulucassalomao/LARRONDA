import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  CalendarHeart,
  Download,
  ExternalLink,
  Heart,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  WifiOff,
  X,
} from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from './data/menuData';
import { formatArs, UI_COPY } from './data/translations';
import type { CategoryId, DietaryTag, Language, MenuItem, RondaItem } from './types/menu';
import { usePWAInstall } from './hooks/usePWAInstall';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { BrandEmblem, BrandWordmark } from './components/BrandMark';
import { GlutenFreeIcon, NewStarIcon, VeganLeafIcon } from './components/DietaryIcons';
import { MenuItemRow } from './components/MenuItemRow';
import { DishModal } from './components/DishModal';
import { RondaDrawer } from './components/RondaDrawer';
import { PWAInstallModal } from './components/PWAInstallModal';

type DietaryFilter = 'all' | DietaryTag | 'favorites';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=LARRONDA+compartir+alimenta';

function detectInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('larronda_lang');
    if (saved === 'pt' || saved === 'es' || saved === 'en') return saved;
    const nav = (navigator.language || 'pt').toLowerCase();
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
  } catch {
    // ignore storage errors
  }
  return 'pt';
}

export default function App() {
  const [lang, setLang] = useState<Language>(detectInitialLanguage);
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showRefCurrencies, setShowRefCurrencies] = useState(true);

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('larronda_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [ronda, setRonda] = useState<RondaItem[]>(() => {
    try {
      const saved = localStorage.getItem('larronda_ronda');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cashDiscount, setCashDiscount] = useState(true);
  const [splitCount, setSplitCount] = useState(2);

  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isRondaOpen, setIsRondaOpen] = useState(false);
  const { isInstallable, isInstalled, isIOS, isInAppBrowser, install } = usePWAInstall();
  const isOnline = useOnlineStatus();

  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) return false;
    try {
      return sessionStorage.getItem('larronda_install_prompt_seen') !== '1';
    } catch {
      return true;
    }
  });

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInstalled) {
      setIsInstallModalOpen(false);
    }
  }, [isInstalled]);

  useEffect(() => {
    try {
      localStorage.setItem('larronda_lang', lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    } catch {
      // ignore
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('larronda_favorites', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('larronda_ronda', JSON.stringify(ronda));
    } catch {
      // ignore
    }
  }, [ronda]);

  const copy = UI_COPY[lang];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToRonda = (item: MenuItem, variant?: 'traditional' | 'vegan') => {
    const resolvedVariant = item.hasVeganOption ? variant || 'traditional' : undefined;
    setRonda((prev) => {
      const idx = prev.findIndex(
        (entry) => entry.item.id === item.id && entry.variant === resolvedVariant
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { item, quantity: 1, variant: resolvedVariant }];
    });
  };

  const handleQuickAdd = (item: MenuItem) => {
    if (item.hasVeganOption) {
      setSelectedDish(item);
      return;
    }
    addToRonda(item);
  };

  const updateRondaQty = (id: string, variant: string | undefined, delta: number) => {
    setRonda((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === id && entry.variant === variant) {
            return { ...entry, quantity: entry.quantity + delta };
          }
          return entry;
        })
        .filter((entry) => entry.quantity > 0)
    );
  };

  const getItemRondaCount = (id: string) =>
    ronda
      .filter((entry) => entry.item.id === id)
      .reduce((sum, entry) => sum + entry.quantity, 0);

  const totalRondaItems = ronda.reduce((sum, entry) => sum + entry.quantity, 0);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (dietaryFilter === 'favorites' && !favorites.includes(item.id)) return false;
      if (
        dietaryFilter !== 'all' &&
        dietaryFilter !== 'favorites' &&
        !(item.tags?.includes(dietaryFilter) || (dietaryFilter === 'vegan' && item.hasVeganOption))
      ) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        item.name[lang],
        item.name.pt,
        item.name.es,
        item.name.en,
        item.description?.[lang] || '',
        item.subcategory?.[lang] || '',
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, dietaryFilter, favorites, lang, searchQuery]);

  const visibleCategories = useMemo(() => {
    return CATEGORIES.filter((cat) =>
      filteredItems.some((item) => item.category === cat.id)
    );
  }, [filteredItems]);

  const showInstallControl = !isInstalled;

  const closeInstallModal = () => {
    try {
      sessionStorage.setItem('larronda_install_prompt_seen', '1');
    } catch {
      // ignore storage errors
    }
    setIsInstallModalOpen(false);
  };

  const handleInstallAction = async () => {
    if (!isIOS && isInstallable) {
      await install();
      return;
    }
    setIsInstallModalOpen(true);
  };

  const scrollToSearch = () => {
    const el = document.getElementById('menu-controls');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => searchInputRef.current?.focus(), 350);
    }
  };

  return (
    <div className="min-h-screen paper-surface text-[#2E2B2B] pb-20 md:pb-0">
      {/* Top Bar Contract: 3 zones (Brand wordmark | 4 nav links | 1 primary CTA) */}
      <header className="sticky top-0 z-40 h-14 bg-[#F5EFE8]/92 backdrop-blur-md border-b border-[#8D482E]/15">
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand lockup */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-[#8D482E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D482E] rounded"
          >
            <BrandEmblem className="w-7 h-4" />
            <BrandWordmark className="text-base sm:text-lg font-medium" />
          </a>

          {/* Zone 2: 4 clean single-line nav links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C4940]"
          >
            <a
              href="#menu"
              className="hover:text-[#8D482E] transition-colors whitespace-nowrap shrink-0"
            >
              {copy.nav.menu}
            </a>
            <a
              href="#olive-tree"
              className="hover:text-[#5B603F] transition-colors whitespace-nowrap shrink-0"
            >
              {copy.nav.oliveTree}
            </a>
            <a
              href="#specials"
              className="hover:text-[#8D482E] transition-colors whitespace-nowrap shrink-0"
            >
              {copy.nav.specials}
            </a>
            <a
              href="#reviews"
              className="hover:text-[#8D482E] transition-colors whitespace-nowrap shrink-0"
            >
              {copy.nav.reviews}
            </a>
          </nav>

          {/* Zone 3: Single primary action button */}
          <button
            type="button"
            onClick={() => setIsRondaOpen(true)}
            className="min-h-[40px] px-4 py-2 rounded-xl bg-[#8D482E] hover:bg-[#7A3B24] text-[#F5EFE8] text-xs font-medium inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>{copy.ronda.title}</span>
            {totalRondaItems > 0 && (
              <span className="tabular-nums font-semibold">({totalRondaItems})</span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Cover Section matching PDF Pages 1-3 */}
      <section id="top" className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="rounded-3xl overflow-hidden border-[6px] border-[#EFE8DF] shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch bg-[#8D482E]">
          {/* Left Cover Panel: Terracotta + Leaf Shadows + Emblem */}
          <div className="lg:col-span-6 terracotta-cover text-[#E2D8CE] p-7 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {/* Language Switcher inside Hero toolbar */}
              <div
                role="group"
                aria-label="Idioma / Language"
                className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#2E2B2B]/25 border border-[#E2D8CE]/20"
              >
                {(['pt', 'es', 'en'] as Language[]).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`min-h-[36px] px-3 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      lang === code
                        ? 'bg-[#E2D8CE] text-[#8D482E] font-semibold'
                        : 'text-[#E2D8CE]/85 hover:text-white'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              {showInstallControl && (
                <button
                  type="button"
                  onClick={handleInstallAction}
                  className="min-h-[36px] px-3 py-1.5 rounded-xl border border-[#E2D8CE]/35 text-[#E2D8CE] hover:bg-[#E2D8CE]/15 text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {isIOS ? <Smartphone className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                  <span>{isIOS ? copy.pwa.iosButton : copy.pwa.installButton}</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div className="inline-flex flex-col items-start">
                <BrandEmblem className="w-16 h-9 text-[#E2D8CE] mb-2" />
                <div className="text-3xl sm:text-4xl tracking-[0.18em] font-normal uppercase text-[#E2D8CE]">
                  LARRONDA
                </div>
                <span className="text-sm font-light tracking-[0.08em] text-[#E2D8CE]/85 mt-0.5">
                  {copy.hero.tagline}
                </span>
              </div>

              <h1
                className="text-xl sm:text-2xl font-medium text-[#F5EFE8] leading-snug max-w-lg pt-2"
                style={{ textWrap: 'balance' }}
              >
                {copy.hero.headline}
              </h1>

              <p className="text-xs sm:text-sm text-[#E2D8CE]/90 leading-relaxed max-w-lg font-light">
                {copy.hero.subcopy}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#menu"
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#E2D8CE] hover:bg-[#F5EFE8] text-[#8D482E] text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>{copy.hero.exploreCta}</span>
              </a>

              {showInstallControl && (
                <button
                  type="button"
                  onClick={handleInstallAction}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#2E2B2B]/25 hover:bg-[#2E2B2B]/40 border border-[#E2D8CE]/30 text-[#F5EFE8] text-sm font-medium inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {isIOS ? <Smartphone className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                  <span>{isIOS ? copy.pwa.iosButton : copy.hero.installCta}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Hero Photography Panel: A la Ronda sharing table */}
          <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full bg-[#6B331F]">
            <img
              src="/images/menu/a-la-ronda.jpg"
              alt="A la Ronda — LARRONDA sharing table"
              referrerPolicy="no-referrer"
              className="w-full h-full lg:absolute lg:inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 text-[#F5EFE8]">
              <p className="text-xs sm:text-sm font-semibold tracking-wide">
                {copy.hero.cashPromo}
              </p>
              <span className="text-xs text-[#E2D8CE] whitespace-nowrap">A la Ronda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Toolbar: Search, Categories, Dietary Filters */}
      <section id="menu-controls" className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="rounded-2xl bg-[#F5EFE8]/95 border border-[#8D482E]/15 p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#5C4940] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={copy.controls.searchPlaceholder}
                aria-label={copy.controls.searchPlaceholder}
                className="w-full min-h-[44px] pl-10 pr-10 rounded-xl bg-[#EFE8DF] border border-[#8D482E]/15 text-sm text-[#2E2B2B] placeholder:text-[#5C4940]/70 focus:outline-none focus:border-[#8D482E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-[#5C4940] hover:text-[#2E2B2B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Currency Reference Toggle */}
            <button
              type="button"
              onClick={() => setShowRefCurrencies((v) => !v)}
              className={`min-h-[44px] px-3.5 rounded-xl border text-xs font-medium inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                showRefCurrencies
                  ? 'bg-[#8D482E]/10 border-[#8D482E]/30 text-[#8D482E]'
                  : 'bg-[#EFE8DF] border-[#2E2B2B]/10 text-[#5C4940]'
              }`}
            >
              <span className="tabular-nums">{copy.controls.showRefCurrencies}</span>
            </button>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`min-h-[40px] px-3.5 rounded-xl text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#8D482E] text-[#F5EFE8]'
                  : 'bg-[#EFE8DF] text-[#5C4940] hover:text-[#2E2B2B]'
              }`}
            >
              {copy.controls.allCategories}
            </button>
            {CATEGORIES.map((cat) => {
              const isOlive = cat.theme === 'olive';
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[40px] px-3.5 rounded-xl text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? isOlive
                        ? 'bg-[#6C7048] text-[#F5EFE8]'
                        : 'bg-[#8D482E] text-[#F5EFE8]'
                      : 'bg-[#EFE8DF] text-[#5C4940] hover:text-[#2E2B2B]'
                  }`}
                >
                  {cat.title[lang]}
                </button>
              );
            })}
          </div>

          {/* Dietary Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#2E2B2B]/8">
            <button
              type="button"
              onClick={() => setDietaryFilter('all')}
              className={`min-h-[38px] px-3 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                dietaryFilter === 'all'
                  ? 'bg-[#2E2B2B] text-[#F5EFE8]'
                  : 'text-[#5C4940] hover:bg-[#EFE8DF]'
              }`}
            >
              {copy.controls.filterAll}
            </button>

            <button
              type="button"
              onClick={() => setDietaryFilter(dietaryFilter === 'gf' ? 'all' : 'gf')}
              className={`min-h-[38px] px-3 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                dietaryFilter === 'gf'
                  ? 'bg-[#2E2B2B] text-[#F5EFE8]'
                  : 'text-[#5C4940] hover:bg-[#EFE8DF]'
              }`}
            >
              <GlutenFreeIcon className="w-4 h-4" />
              <span>{copy.controls.filterGf}</span>
            </button>

            <button
              type="button"
              onClick={() => setDietaryFilter(dietaryFilter === 'vegan' ? 'all' : 'vegan')}
              className={`min-h-[38px] px-3 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                dietaryFilter === 'vegan'
                  ? 'bg-[#6C7048] text-[#F5EFE8]'
                  : 'text-[#5C4940] hover:bg-[#EFE8DF]'
              }`}
            >
              <VeganLeafIcon className="w-4 h-4" />
              <span>{copy.controls.filterVegan}</span>
            </button>

            <button
              type="button"
              onClick={() => setDietaryFilter(dietaryFilter === 'new' ? 'all' : 'new')}
              className={`min-h-[38px] px-3 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                dietaryFilter === 'new'
                  ? 'bg-[#8D482E] text-[#F5EFE8]'
                  : 'text-[#5C4940] hover:bg-[#EFE8DF]'
              }`}
            >
              <NewStarIcon className="w-3.5 h-3.5" />
              <span>{copy.controls.filterNew}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setDietaryFilter(dietaryFilter === 'favorites' ? 'all' : 'favorites')
              }
              className={`min-h-[38px] px-3 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                dietaryFilter === 'favorites'
                  ? 'bg-[#8D482E] text-[#F5EFE8]'
                  : 'text-[#5C4940] hover:bg-[#EFE8DF]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${dietaryFilter === 'favorites' ? 'fill-current' : ''}`} />
              <span>
                {copy.controls.filterFavorites}
                {favorites.length > 0 ? ` (${favorites.length})` : ''}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Menu Sections */}
      <main id="menu" className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-10">
        {visibleCategories.length === 0 ? (
          <div className="rounded-2xl bg-[#F5EFE8] border border-[#8D482E]/15 p-10 text-center space-y-3">
            <p className="text-base font-semibold text-[#2E2B2B]">{copy.controls.noResults}</p>
            <p className="text-xs text-[#5C4940]">{copy.controls.noResultsHint}</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="min-h-[44px] px-5 rounded-xl bg-[#8D482E] text-[#F5EFE8] text-xs font-medium cursor-pointer"
            >
              {copy.controls.clearFilters}
            </button>
          </div>
        ) : (
          visibleCategories.map((cat) => {
            const catItems = filteredItems.filter((item) => item.category === cat.id);
            const isOlive = cat.theme === 'olive';

            // Group by subcategory if present
            const groups: { label: string | null; items: MenuItem[] }[] = [];
            catItems.forEach((item) => {
              const sub = item.subcategory ? item.subcategory[lang] : null;
              const existing = groups.find((g) => g.label === sub);
              if (existing) {
                existing.items.push(item);
              } else {
                groups.push({ label: sub, items: [item] });
              }
            });

            return (
              <section
                key={cat.id}
                id={cat.id === 'olive-tree' ? 'olive-tree' : `cat-${cat.id}`}
                className={`rounded-3xl overflow-hidden shadow-md border-[6px] sm:border-[10px] ${
                  isOlive ? 'border-[#878A60]' : 'border-[#8D482E]'
                } bg-[#EFE8DF]`}
              >
                {/* Category Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch border-b border-[#2E2B2B]/10">
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
                    <h2
                      className={`font-script text-5xl sm:text-6xl leading-none ${
                        isOlive ? 'text-[#6C7048]' : 'text-[#8D482E]'
                      }`}
                    >
                      {cat.title[lang]}
                    </h2>
                    {cat.subtitle && (
                      <p
                        className={`mt-3 text-sm font-semibold ${
                          isOlive ? 'text-[#5B603F]' : 'text-[#8D482E]'
                        }`}
                      >
                        {cat.subtitle[lang]}
                      </p>
                    )}
                    {cat.intro && (
                      <p className="mt-1.5 text-xs sm:text-sm italic text-[#5C4940] leading-relaxed max-w-xl">
                        {cat.intro[lang]}
                      </p>
                    )}
                    {cat.id === 'drinks' && (
                      <div className="mt-4 rounded-xl bg-[#F5EFE8] border border-[#8D482E]/15 p-3.5 text-xs text-[#5C4940] leading-relaxed">
                        <span className="font-semibold text-[#8D482E] block mb-0.5">
                          {copy.specials.kombuchaTitle}
                        </span>
                        {copy.specials.kombuchaBody}
                      </div>
                    )}
                  </div>

                  {cat.heroImage && (
                    <div className="lg:col-span-5 relative h-48 sm:h-56 lg:h-auto min-h-[190px] bg-[#D8CDC0]">
                      <img
                        src={cat.heroImage}
                        alt={cat.title[lang]}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full lg:absolute lg:inset-0 object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Items Grid */}
                <div className="p-5 sm:p-8 lg:p-10 space-y-8 bg-[#F5EFE8]/60">
                  {groups.map((group) => (
                    <div key={group.label || 'main'}>
                      {group.label && (
                        <h3
                          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] pb-2 mb-2 border-b ${
                            isOlive
                              ? 'text-[#5B603F] border-[#878A60]/30'
                              : 'text-[#8D482E] border-[#8D482E]/25'
                          }`}
                        >
                          {group.label}
                        </h3>
                      )}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
                        {group.items.map((item) => (
                          <MenuItemRow
                            key={item.id}
                            item={item}
                            lang={lang}
                            showRefCurrencies={showRefCurrencies}
                            isFavorite={favorites.includes(item.id)}
                            quantityInRonda={getItemRondaCount(item.id)}
                            onSelect={setSelectedDish}
                            onQuickAdd={handleQuickAdd}
                            onToggleFavorite={toggleFavorite}
                            accentTone={isOlive ? 'olive' : 'terracotta'}
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  {cat.id === 'mains' && (
                    <div className="pt-2 flex items-center justify-center gap-2 text-xs font-medium text-[#8D482E]">
                      <span>{copy.tags.askGf}</span>
                      <GlutenFreeIcon className="w-4 h-4" />
                    </div>
                  )}

                  {/* Footer legend matching PDF pages */}
                  <div className="pt-4 border-t border-[#2E2B2B]/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#5C4940]">
                    <span className="inline-flex items-center gap-1.5">
                      <GlutenFreeIcon className="w-4 h-4" />
                      <span>{copy.tags.gf}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <VeganLeafIcon className="w-4 h-4" />
                      <span>{copy.tags.vegan}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <NewStarIcon className="w-3.5 h-3.5" />
                      <span>{copy.tags.new}</span>
                    </span>
                  </div>
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* Special Highlights from PDF Pages 4, 13, 20 */}
      <section id="specials" className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Pet Friendly Certified Card (Page 4) */}
          <div className="lg:col-span-7 rounded-3xl border-[6px] border-[#8D482E] bg-[#EFE8DF] p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#8D482E]">{copy.specials.petPrefix}</p>
                <h2 className="font-script text-5xl sm:text-6xl text-[#8D482E] leading-none mt-1">
                  {copy.specials.petScript}
                </h2>
              </div>
              {/* Paw certification emblem */}
              <div
                className="w-16 h-16 rounded-full bg-[#2E2B2B] text-[#E2D8CE] flex flex-col items-center justify-center shrink-0 p-2 text-center"
                title={copy.specials.petCert}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#D99B4E]" aria-hidden="true">
                  <circle cx="7" cy="8.5" r="1.8" />
                  <circle cx="12" cy="6.5" r="1.8" />
                  <circle cx="17" cy="8.5" r="1.8" />
                  <path d="M12 10.5c-3 0-5 2.3-5 4.6 0 1.6 1.2 2.4 2.7 2.4.9 0 1.6-.4 2.3-.4s1.4.4 2.3.4c1.5 0 2.7-.8 2.7-2.4 0-2.3-2-4.6-5-4.6z" />
                </svg>
                <span className="text-[7px] uppercase tracking-wider leading-none mt-0.5 text-[#E2D8CE]">
                  Pet Friendly
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#5C4940] leading-relaxed">
              <p>{copy.specials.petBody1}</p>
              <p>{copy.specials.petBody2}</p>
              <p className="font-semibold italic text-[#8D482E]">{copy.specials.petBody3}</p>
            </div>
          </div>

          {/* Promotional Calendar Stack (Pages 13 & 20) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 rounded-3xl bg-[#8D482E] text-[#F5EFE8] p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-medium text-[#E2D8CE] mb-2">
                <CalendarHeart className="w-4 h-4" />
                <span>{copy.specials.wednesdayTitle}</span>
              </div>
              <p className="text-sm sm:text-base font-normal leading-relaxed">
                {copy.specials.wednesdayBody}
              </p>
            </div>

            <div className="flex-1 rounded-3xl bg-[#6C7048] text-[#F5EFE8] p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-medium text-[#E2D8CE] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{copy.specials.day29Title}</span>
              </div>
              <p className="text-sm sm:text-base font-normal leading-relaxed">
                {copy.specials.day29Body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews & PWA Mobile Install Section */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Google Reviews Link Card */}
          <div
            className={`${
              showInstallControl ? 'lg:col-span-7' : 'lg:col-span-12'
            } rounded-3xl bg-[#F5EFE8] border border-[#8D482E]/20 p-6 sm:p-8 flex flex-col justify-between gap-5`}
          >
            <div>
              <p className="text-xs font-medium text-[#8D482E]">{copy.reviews.eyebrow}</p>
              <h2
                className="text-xl sm:text-2xl font-semibold text-[#2E2B2B] mt-1 leading-snug"
                style={{ textWrap: 'balance' }}
              >
                {copy.reviews.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4940] mt-2 leading-relaxed max-w-xl">
                {copy.reviews.body}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-5 py-3 rounded-xl bg-[#8D482E] hover:bg-[#7A3B24] text-[#F5EFE8] text-sm font-medium inline-flex items-center gap-2.5 transition-colors shadow-sm"
              >
                <span className="inline-flex items-center gap-0.5 text-[#F6C453]" aria-hidden="true">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </span>
                <span>{copy.reviews.cta}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
              <span className="text-xs text-[#5C4940]">{copy.reviews.secondaryNote}</span>
            </div>
          </div>

          {/* Direct Install (Android) or iPhone Guide Trigger (iOS) */}
          {showInstallControl && (
            <div className="lg:col-span-5 rounded-3xl bg-[#EFE8DF] border border-[#8D482E]/20 p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#8D482E] text-[#E2D8CE] flex items-center justify-center shrink-0">
                  <BrandEmblem className="w-8 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2E2B2B]">
                    {isIOS ? copy.pwa.iosSectionTitle : copy.pwa.modalTitle}
                  </h3>
                  <p className="text-xs text-[#5C4940] mt-1 leading-relaxed">
                    {copy.pwa.modalSubtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleInstallAction}
                className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-[#8D482E]/35 bg-[#F5EFE8] hover:bg-[#8D482E] hover:text-[#F5EFE8] text-[#8D482E] text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isIOS ? <Smartphone className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{isIOS ? copy.pwa.iosButton : copy.pwa.installButton}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clean Footer matching PDF notices */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-10 text-center space-y-2 text-xs text-[#5C4940]">
        <p className="font-medium text-[#2E2B2B]">{copy.footer.allergyNotice}</p>
        <p className="max-w-2xl mx-auto leading-relaxed">{copy.footer.currencyNotice}</p>
        <div className="pt-3 flex items-center justify-center gap-3 text-[#8D482E]">
          <BrandEmblem className="w-6 h-3.5" />
          <span className="tracking-[0.16em] text-xs font-medium uppercase">LARRONDA</span>
          <span aria-hidden="true">·</span>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[#2E2B2B]"
          >
            Google Reviews
          </a>
        </div>
      </footer>

      {/* Mobile Bottom Thumb-Zone Navigation Bar (<= 15% viewport height with header) */}
      <nav
        aria-label="Acesso rápido mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F5EFE8]/95 backdrop-blur-md border-t border-[#8D482E]/15 pb-safe"
      >
        <div className="grid grid-cols-4 h-14 items-center">
          <a
            href="#menu"
            className="flex flex-col items-center justify-center h-full text-[#8D482E]"
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5">{copy.footer.bottomNavMenu}</span>
          </a>

          <button
            type="button"
            onClick={scrollToSearch}
            className="flex flex-col items-center justify-center h-full text-[#5C4940] hover:text-[#8D482E] cursor-pointer"
          >
            <Search className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5">{copy.footer.bottomNavSearch}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsRondaOpen(true)}
            className="relative flex flex-col items-center justify-center h-full text-[#5C4940] hover:text-[#8D482E] cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5 tabular-nums">
              {copy.footer.bottomNavRonda}
              {totalRondaItems > 0 ? ` (${totalRondaItems})` : ''}
            </span>
          </button>

          {showInstallControl ? (
            <button
              type="button"
              onClick={handleInstallAction}
              className="flex flex-col items-center justify-center h-full text-[#5C4940] hover:text-[#8D482E] cursor-pointer"
            >
              {isIOS ? <Smartphone className="w-5 h-5" /> : <Download className="w-5 h-5" />}
              <span className="text-[10px] font-medium mt-0.5">
                {isIOS ? 'iPhone' : copy.pwa.installButton}
              </span>
            </button>
          ) : (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center h-full text-[#5C4940] hover:text-[#8D482E]"
            >
              <Star className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5">Google</span>
            </a>
          )}
        </div>
      </nav>

      {/* Offline Status Toast */}
      {!isOnline && (
        <div className="fixed bottom-18 md:bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-[#2E2B2B] px-3.5 py-2 text-xs font-medium text-[#E2D8CE] shadow-lg">
          <WifiOff className="w-3.5 h-3.5 text-[#D99B4E]" />
          <span>{copy.pwa.offlineBanner}</span>
        </div>
      )}

      {/* Interactive Modals & Drawers */}
      <DishModal
        item={selectedDish}
        lang={lang}
        isFavorite={selectedDish ? favorites.includes(selectedDish.id) : false}
        onClose={() => setSelectedDish(null)}
        onAdd={addToRonda}
        onToggleFavorite={toggleFavorite}
      />

      <RondaDrawer
        isOpen={isRondaOpen}
        onClose={() => setIsRondaOpen(false)}
        items={ronda}
        lang={lang}
        cashDiscount={cashDiscount}
        onToggleCashDiscount={() => setCashDiscount((v) => !v)}
        splitCount={splitCount}
        onChangeSplitCount={setSplitCount}
        onUpdateQty={updateRondaQty}
        onClear={() => setRonda([])}
      />

      <PWAInstallModal
        isOpen={isInstallModalOpen && !isInstalled}
        onClose={closeInstallModal}
        lang={lang}
        isIOS={isIOS}
        isInAppBrowser={isInAppBrowser}
        isInstallable={isInstallable}
        onInstallClick={install}
      />
    </div>
  );
}
