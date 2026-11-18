import React from 'react';
import type { DietaryTag, Language } from '../types/menu';
import { UI_COPY } from '../data/translations';

export const GlutenFreeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10.5" fill="#2E2B2B" />
    <path
      d="M12 6v12M9.5 8.5c1.5 0 2.5 1.1 2.5 2.5M14.5 8.5c-1.5 0-2.5 1.1-2.5 2.5M9.5 12c1.5 0 2.5 1.1 2.5 2.5M14.5 12c-1.5 0-2.5 1.1-2.5 2.5"
      stroke="#E2D8CE"
      strokeWidth="1.35"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M6.5 6.5l11 11" stroke="#E2D8CE" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const VeganLeafIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 20c0-5.5 3.8-10.2 8.5-11.5-1 5.2-4.4 9.5-8.5 11.5z"
      fill="#878A60"
    />
    <path
      d="M12 20c0-4.8-3.2-9-7.5-10.2.8 4.6 3.9 8.4 7.5 10.2z"
      fill="#9AA072"
    />
    <path d="M12 20V11" stroke="#6C7048" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const NewStarIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#8D482E" aria-hidden="true">
    <path d="M12 2.5l2.7 5.8 6.3.8-4.6 4.4 1.2 6.3-5.6-3-5.6 3 1.2-6.3-4.6-4.4 6.3-.8z" />
  </svg>
);

export const DietaryMarkers: React.FC<{
  tags?: DietaryTag[];
  lang: Language;
  showLabels?: boolean;
}> = ({ tags, lang, showLabels = false }) => {
  if (!tags || tags.length === 0) return null;
  const copy = UI_COPY[lang].tags;

  return (
    <span className="inline-flex items-center gap-2 align-middle">
      {tags.map((tag) => {
        if (tag === 'gf') {
          return (
            <span
              key={tag}
              title={copy.gf}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#2E2B2B]"
            >
              <GlutenFreeIcon className="w-4 h-4 shrink-0" />
              {showLabels && <span>{copy.gf}</span>}
            </span>
          );
        }
        if (tag === 'vegan') {
          return (
            <span
              key={tag}
              title={copy.vegan}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#5B603F]"
            >
              <VeganLeafIcon className="w-4 h-4 shrink-0" />
              {showLabels && <span>{copy.vegan}</span>}
            </span>
          );
        }
        return (
          <span
            key={tag}
            title={copy.new}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#8D482E]"
          >
            <NewStarIcon className="w-3.5 h-3.5 shrink-0" />
            {showLabels && <span>{copy.new}</span>}
          </span>
        );
      })}
    </span>
  );
};
