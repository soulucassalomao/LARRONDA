import React, { useState } from 'react';
import { Check, Heart, Plus, Sparkles, X } from 'lucide-react';
import type { Language, MenuItem } from '../types/menu';
import {
  formatArs,
  formatBrlEstimate,
  formatTaxExcl,
  formatUsdEstimate,
  UI_COPY,
} from '../data/translations';
import { DietaryMarkers } from './DietaryIcons';

interface DishModalProps {
  item: MenuItem | null;
  lang: Language;
  isFavorite: boolean;
  onClose: () => void;
  onAdd: (item: MenuItem, variant?: 'traditional' | 'vegan') => void;
  onToggleFavorite: (id: string) => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  item,
  lang,
  isFavorite,
  onClose,
  onAdd,
  onToggleFavorite,
}) => {
  const [variant, setVariant] = useState<'traditional' | 'vegan'>('traditional');
  const [justAdded, setJustAdded] = useState(false);

  if (!item) return null;

  const copy = UI_COPY[lang];
  const cashPrice = item.priceArs * 0.9;

  const handleAdd = () => {
    onAdd(item, item.hasVeganOption ? variant : undefined);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 550);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#2E2B2B]/60 backdrop-blur-sm p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-[#F5EFE8] text-[#2E2B2B] shadow-2xl border border-[#8D482E]/15 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {item.image ? (
          <div className="relative h-56 sm:h-64 w-full bg-[#D8CDC0]">
            <img
              src={item.image}
              alt={item.name[lang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <button
              type="button"
              onClick={onClose}
              aria-label={copy.dishModal.close}
              className="absolute top-3 right-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#F5EFE8]/90 text-[#2E2B2B] hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between px-6 pt-5 pb-1">
            <div className="sm:hidden w-10 h-1.5 bg-[#8D482E]/25 rounded-full mx-auto" />
            <button
              type="button"
              onClick={onClose}
              aria-label={copy.dishModal.close}
              className="ml-auto min-h-[44px] min-w-[44px] -mr-2 flex items-center justify-center rounded-xl text-[#5C4940] hover:bg-[#8D482E]/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="p-6 space-y-5">
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 id="dish-modal-title" className="text-xl font-semibold text-[#2E2B2B] leading-snug">
                {item.name[lang]}
              </h3>
              <button
                type="button"
                onClick={() => onToggleFavorite(item.id)}
                aria-label={isFavorite ? copy.dishModal.favorited : copy.dishModal.favorite}
                className={`min-h-[44px] min-w-[44px] -mt-1 -mr-1 flex items-center justify-center rounded-xl transition-colors cursor-pointer ${
                  isFavorite
                    ? 'text-[#8D482E] bg-[#8D482E]/10'
                    : 'text-[#5C4940] hover:bg-[#8D482E]/10'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="mt-2">
                <DietaryMarkers tags={item.tags} lang={lang} showLabels />
              </div>
            )}

            {item.description && (
              <p className="mt-3 text-sm text-[#5C4940] leading-relaxed">
                {item.description[lang]}
              </p>
            )}

            {item.portionNote && (
              <p className="mt-2 text-xs font-medium text-[#8D482E]">
                {item.portionNote[lang]}
              </p>
            )}

            {item.highlight29th && (
              <div className="mt-3 rounded-xl bg-[#8D482E]/10 border border-[#8D482E]/20 p-3 flex items-start gap-2.5 text-xs text-[#6B331F]">
                <Sparkles className="w-4 h-4 shrink-0 text-[#8D482E] mt-0.5" />
                <span>{copy.specials.day29Body}</span>
              </div>
            )}
          </div>

          {/* Traditional vs Vegan option selector */}
          {item.hasVeganOption && (
            <div className="space-y-2">
              <span className="block text-xs font-medium text-[#5C4940]">
                {copy.dishModal.chooseStyle}
              </span>
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#E2D8CE]/70">
                <button
                  type="button"
                  onClick={() => setVariant('traditional')}
                  className={`min-h-[40px] rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    variant === 'traditional'
                      ? 'bg-[#F5EFE8] text-[#2E2B2B] shadow-sm'
                      : 'text-[#5C4940] hover:text-[#2E2B2B]'
                  }`}
                >
                  {copy.dishModal.traditionalLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setVariant('vegan')}
                  className={`min-h-[40px] rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    variant === 'vegan'
                      ? 'bg-[#878A60] text-[#F5EFE8] shadow-sm'
                      : 'text-[#5C4940] hover:text-[#2E2B2B]'
                  }`}
                >
                  {copy.dishModal.veganLabel}
                </button>
              </div>
            </div>
          )}

          {/* Price breakdown matching PDF transparency */}
          <div className="rounded-xl bg-[#EFE8DF] border border-[#8D482E]/12 p-4 space-y-2 text-xs">
            <div className="flex items-baseline justify-between">
              <span className="text-[#5C4940]">ARS</span>
              <span className="text-lg font-semibold text-[#8D482E] tabular-nums">
                $ {formatArs(item.priceArs, lang)}
              </span>
            </div>
            <div className="flex items-baseline justify-between text-[#5C4940]">
              <span>{copy.dishModal.cashPriceLabel}</span>
              <span className="font-semibold text-[#2E2B2B] tabular-nums">
                $ {formatArs(cashPrice, lang)}
              </span>
            </div>
            <div className="flex items-baseline justify-between text-[#5C4940] pt-1 border-t border-[#2E2B2B]/8">
              <span>{copy.tags.estPrefix}</span>
              <span className="tabular-nums">
                {formatUsdEstimate(item.priceArs, lang)} · {formatBrlEstimate(item.priceArs)}
              </span>
            </div>
            <div className="flex items-baseline justify-between text-[11px] text-[#5C4940]/85">
              <span>{copy.dishModal.taxExclLabel}</span>
              <span className="tabular-nums">ARS {formatTaxExcl(item.priceArs, lang)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="w-full min-h-[48px] rounded-xl bg-[#8D482E] hover:bg-[#7A3B24] text-[#F5EFE8] font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>{copy.dishModal.added}</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>
                  {copy.dishModal.addToRonda} · $ {formatArs(item.priceArs, lang)}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
