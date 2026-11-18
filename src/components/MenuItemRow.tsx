import React from 'react';
import { Heart, Plus } from 'lucide-react';
import type { Language, MenuItem } from '../types/menu';
import {
  formatArs,
  formatBrlEstimate,
  formatUsdEstimate,
  UI_COPY,
} from '../data/translations';
import { DietaryMarkers } from './DietaryIcons';

interface MenuItemRowProps {
  item: MenuItem;
  lang: Language;
  showRefCurrencies: boolean;
  isFavorite: boolean;
  quantityInRonda: number;
  onSelect: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  onToggleFavorite: (id: string) => void;
  accentTone?: 'terracotta' | 'olive';
}

const LONG_DESCRIPTION_THRESHOLD = 85;

export const MenuItemRow: React.FC<MenuItemRowProps> = ({
  item,
  lang,
  showRefCurrencies,
  isFavorite,
  quantityInRonda,
  onSelect,
  onQuickAdd,
  onToggleFavorite,
  accentTone = 'terracotta',
}) => {
  const copy = UI_COPY[lang];
  const accentColor = accentTone === 'olive' ? 'text-[#5B603F]' : 'text-[#8D482E]';
  const addBg =
    accentTone === 'olive'
      ? 'bg-[#6C7048] hover:bg-[#5B603F] text-[#F5EFE8]'
      : 'bg-[#8D482E] hover:bg-[#7A3B24] text-[#F5EFE8]';

  const descText = item.description?.[lang];
  const isLongDescription = Boolean(descText && descText.length > LONG_DESCRIPTION_THRESHOLD);

  return (
    <article className="group flex items-start gap-3 sm:gap-4 py-4 border-b border-[#2E2B2B]/10 last:border-b-0 transition-colors">
      {/* Optional authentic photo thumbnail */}
      {item.image && (
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#D8CDC0] shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D482E] cursor-pointer"
          aria-label={item.name[lang]}
        >
          <img
            src={item.image}
            alt={item.name[lang]}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      )}

      {/* Main clickable dish info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <button
            type="button"
            onClick={() => onSelect(item)}
            className="text-left group/title focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D482E] rounded cursor-pointer min-w-0"
          >
            <h4 className="text-[15px] sm:text-base font-semibold text-[#2E2B2B] group-hover/title:text-[#8D482E] transition-colors inline">
              {item.name[lang]}
            </h4>
            {item.tags && item.tags.length > 0 && (
              <span className="ml-2 inline-flex align-middle">
                <DietaryMarkers tags={item.tags} lang={lang} />
              </span>
            )}
          </button>

          {/* Dotted editorial leader on wider screens */}
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 border-b border-dotted border-[#2E2B2B]/25 mx-2 translate-y-[-3px]"
          />

          {/* Tabular ARS Price */}
          <div className="text-right shrink-0">
            <span className={`text-[15px] sm:text-base font-semibold tabular-nums ${accentColor}`}>
              {formatArs(item.priceArs, lang)}
            </span>
          </div>
        </div>

        {/* Full-width Description (clamped cleanly to 2 lines for long texts; click opens full details) */}
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="block w-full text-left mt-1.5 cursor-pointer group/desc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D482E] rounded"
        >
          {descText && (
            <>
              <p
                className={`text-xs sm:text-[13px] text-[#5C4940] leading-relaxed break-words ${
                  isLongDescription ? 'line-clamp-2' : ''
                }`}
              >
                {descText}
              </p>
              {isLongDescription && (
                <span
                  className={`inline-block mt-1 text-[11px] font-medium underline underline-offset-2 ${accentColor} group-hover/desc:opacity-80`}
                >
                  {copy.tags.readMore}
                </span>
              )}
            </>
          )}

          {(item.portionNote || item.hasVeganOption || item.highlight29th) && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-xs text-[#5C4940]">
              {item.portionNote && (
                <span className="font-medium text-[#2E2B2B]/80">{item.portionNote[lang]}</span>
              )}
              {item.hasVeganOption && (
                <span>
                  {item.portionNote ? '· ' : ''}
                  {copy.tags.traditional} / {copy.tags.veganOption}
                </span>
              )}
              {item.highlight29th && (
                <span className="font-medium text-[#8D482E]">
                  {item.portionNote || item.hasVeganOption ? '· ' : ''}
                  29th: 20% OFF Cash
                </span>
              )}
            </div>
          )}
        </button>

        {/* Bottom meta & action row: Reference currencies on left, Favorite + Quick Add on right */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-2.5">
          {showRefCurrencies ? (
            <div className="text-[11px] text-[#5C4940] tabular-nums leading-tight">
              <span>
                {copy.tags.estPrefix} {formatUsdEstimate(item.priceArs, lang)} ·{' '}
                {formatBrlEstimate(item.priceArs)}
              </span>
            </div>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => onToggleFavorite(item.id)}
              aria-label={isFavorite ? copy.dishModal.favorited : copy.dishModal.favorite}
              className={`min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                isFavorite
                  ? 'text-[#8D482E] bg-[#8D482E]/10'
                  : 'text-[#5C4940]/70 hover:text-[#8D482E] hover:bg-[#8D482E]/8'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => onQuickAdd(item)}
              aria-label={`${copy.dishModal.addToRonda}: ${item.name[lang]}`}
              className={`min-h-[40px] px-3 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 transition-all active:scale-[0.97] cursor-pointer whitespace-nowrap shrink-0 ${addBg}`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="tabular-nums">
                {quantityInRonda > 0 ? `${quantityInRonda}` : '+'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
