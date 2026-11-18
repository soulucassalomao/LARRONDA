import React from 'react';
import { Banknote, Minus, Plus, Trash2, Users, X } from 'lucide-react';
import type { Language, RondaItem } from '../types/menu';
import {
  formatArs,
  formatBrlEstimate,
  formatUsdEstimate,
  UI_COPY,
} from '../data/translations';
import { BrandEmblem } from './BrandMark';

interface RondaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: RondaItem[];
  lang: Language;
  cashDiscount: boolean;
  onToggleCashDiscount: () => void;
  splitCount: number;
  onChangeSplitCount: (count: number) => void;
  onUpdateQty: (id: string, variant: string | undefined, delta: number) => void;
  onClear: () => void;
}

export const RondaDrawer: React.FC<RondaDrawerProps> = ({
  isOpen,
  onClose,
  items,
  lang,
  cashDiscount,
  onToggleCashDiscount,
  splitCount,
  onChangeSplitCount,
  onUpdateQty,
  onClear,
}) => {
  if (!isOpen) return null;

  const copy = UI_COPY[lang].ronda;
  const subtotal = items.reduce((sum, entry) => sum + entry.item.priceArs * entry.quantity, 0);
  const savings = cashDiscount ? subtotal * 0.1 : 0;
  const total = subtotal - savings;
  const perPerson = splitCount > 1 ? total / splitCount : total;
  const totalCount = items.reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#2E2B2B]/55 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ronda-drawer-title"
      onClick={onClose}
    >
      <aside
        className="w-full max-w-md h-full bg-[#F5EFE8] text-[#2E2B2B] shadow-2xl flex flex-col border-l border-[#8D482E]/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#8D482E]/12 bg-[#EFE8DF]">
          <div>
            <h2 id="ronda-drawer-title" className="text-lg font-semibold text-[#2E2B2B]">
              {copy.title}
              {totalCount > 0 && (
                <span className="ml-2 text-xs font-medium text-[#8D482E] tabular-nums">
                  ({totalCount} {copy.itemsCount})
                </span>
              )}
            </h2>
            <p className="text-xs text-[#5C4940] mt-0.5">{copy.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#5C4940] hover:bg-[#8D482E]/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-16 h-16 rounded-2xl bg-[#8D482E]/10 text-[#8D482E] flex items-center justify-center mb-4">
                <BrandEmblem className="w-10 h-6" />
              </div>
              <h3 className="text-base font-semibold text-[#2E2B2B]">{copy.emptyTitle}</h3>
              <p className="text-xs text-[#5C4940] mt-1.5 max-w-xs leading-relaxed">
                {copy.emptyDesc}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-[#2E2B2B]/10">
              {items.map((entry) => {
                const key = `${entry.item.id}-${entry.variant || 'std'}`;
                const lineTotal = entry.item.priceArs * entry.quantity;
                return (
                  <li key={key} className="py-3.5 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#2E2B2B] truncate">
                        {entry.item.name[lang]}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[#5C4940] mt-0.5">
                        {entry.variant && (
                          <span>
                            {entry.variant === 'vegan'
                              ? UI_COPY[lang].tags.veganOption
                              : UI_COPY[lang].tags.traditional}
                          </span>
                        )}
                        <span className="tabular-nums font-medium text-[#8D482E]">
                          $ {formatArs(lineTotal, lang)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(entry.item.id, entry.variant, -1)}
                        aria-label="Decrease quantity"
                        className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg border border-[#8D482E]/20 text-[#2E2B2B] hover:bg-[#8D482E]/10 cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm font-semibold tabular-nums">
                        {entry.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(entry.item.id, entry.variant, 1)}
                        aria-label="Increase quantity"
                        className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg border border-[#8D482E]/20 text-[#2E2B2B] hover:bg-[#8D482E]/10 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer calculations */}
        {items.length > 0 && (
          <div className="border-t border-[#8D482E]/15 bg-[#EFE8DF] px-6 py-5 space-y-4 pb-safe">
            {/* 10% Cash Discount Toggle */}
            <button
              type="button"
              onClick={onToggleCashDiscount}
              className={`w-full flex items-center justify-between gap-3 rounded-xl p-3 border text-left transition-colors cursor-pointer ${
                cashDiscount
                  ? 'bg-[#8D482E]/12 border-[#8D482E]/40 text-[#2E2B2B]'
                  : 'bg-[#F5EFE8] border-[#2E2B2B]/10 text-[#5C4940]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Banknote className={`w-4 h-4 shrink-0 ${cashDiscount ? 'text-[#8D482E]' : ''}`} />
                <div>
                  <p className="text-xs font-semibold text-[#2E2B2B]">
                    {copy.cashDiscountToggle}
                  </p>
                  <p className="text-[11px] text-[#5C4940]">{copy.cashDiscountDesc}</p>
                </div>
              </div>
              <span
                className={`w-10 h-6 rounded-full p-0.5 transition-colors shrink-0 ${
                  cashDiscount ? 'bg-[#8D482E]' : 'bg-[#2E2B2B]/20'
                }`}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-[#F5EFE8] transition-transform ${
                    cashDiscount ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </span>
            </button>

            {/* Split bill stepper */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#2E2B2B]">
                <Users className="w-4 h-4 text-[#8D482E]" />
                <span>{copy.splitBill}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onChangeSplitCount(Math.max(1, splitCount - 1))}
                  aria-label="Decrease guests"
                  className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-[#F5EFE8] border border-[#2E2B2B]/15 cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-semibold tabular-nums min-w-[68px] text-center">
                  {splitCount} {copy.peopleLabel}
                </span>
                <button
                  type="button"
                  onClick={() => onChangeSplitCount(Math.min(20, splitCount + 1))}
                  aria-label="Increase guests"
                  className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-[#F5EFE8] border border-[#2E2B2B]/15 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-1.5 pt-2 border-t border-[#2E2B2B]/10 text-xs">
              <div className="flex justify-between text-[#5C4940]">
                <span>{copy.subtotal}</span>
                <span className="tabular-nums">$ {formatArs(subtotal, lang)}</span>
              </div>
              {cashDiscount && (
                <div className="flex justify-between text-[#8D482E] font-medium">
                  <span>{copy.cashSavings}</span>
                  <span className="tabular-nums">− $ {formatArs(savings, lang)}</span>
                </div>
              )}
              <div className="flex justify-between items-baseline text-base font-semibold text-[#2E2B2B] pt-1">
                <span>{copy.total}</span>
                <span className="tabular-nums text-[#8D482E]">$ {formatArs(total, lang)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-[#5C4940] tabular-nums">
                <span>
                  {splitCount > 1 ? `${copy.perPerson}: $ ${formatArs(perPerson, lang)}` : ''}
                </span>
                <span>
                  {UI_COPY[lang].tags.estPrefix} {formatUsdEstimate(total, lang)} ·{' '}
                  {formatBrlEstimate(total)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <p className="text-[11px] text-[#5C4940] leading-snug flex-1">
                {copy.noteServer}
              </p>
              <button
                type="button"
                onClick={onClear}
                className="min-h-[40px] px-3 rounded-lg text-xs font-medium text-[#8D482E] hover:bg-[#8D482E]/10 inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{copy.clear}</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
