import React, { useEffect, useState } from 'react';
import { Download, PlusSquare, Share, Smartphone, X } from 'lucide-react';
import type { Language } from '../types/menu';
import { UI_COPY } from '../data/translations';
import { BrandEmblem } from './BrandMark';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  isIOS: boolean;
  isInAppBrowser: boolean;
  isInstallable: boolean;
  onInstallClick: () => Promise<boolean>;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  lang,
  isIOS,
  isInAppBrowser,
  isInstallable,
  onInstallClick,
}) => {
  const [showFallbackNote, setShowFallbackNote] = useState(false);
  const [forceIosView, setForceIosView] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowFallbackNote(false);
      setForceIosView(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const copy = UI_COPY[lang].pwa;
  const showingIosGuide = isIOS || forceIosView;

  const handleInstall = async () => {
    if (isInstallable) {
      const accepted = await onInstallClick();
      if (accepted) {
        onClose();
      }
    } else {
      setShowFallbackNote(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#2E2B2B]/65 backdrop-blur-sm p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-[#F5EFE8] text-[#2E2B2B] shadow-2xl border border-[#8D482E]/15 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile grab handle */}
        <div className="sm:hidden w-10 h-1.5 bg-[#8D482E]/25 rounded-full mx-auto mt-3" />

        {/* Terracotta brand header */}
        <div className="terracotta-cover text-[#E2D8CE] px-6 py-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#E2D8CE]/15 border border-[#E2D8CE]/25 text-[#E2D8CE] flex items-center justify-center shrink-0">
              <BrandEmblem className="w-8 h-5" />
            </div>
            <div>
              <h2 id="pwa-modal-title" className="text-lg font-semibold text-[#F5EFE8] leading-snug">
                {showingIosGuide ? copy.iosSectionTitle : copy.welcomeTitle}
              </h2>
              <p className="text-xs text-[#E2D8CE]/90 mt-0.5 leading-relaxed">
                {showingIosGuide ? copy.modalSubtitle : copy.welcomeBody}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="min-h-[40px] min-w-[40px] -mr-2 -mt-1 flex items-center justify-center rounded-xl text-[#E2D8CE] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* iPhone / iOS Safari Step-by-Step Guide (Only for iPhone) */}
          {showingIosGuide ? (
            <>
              {isInAppBrowser && (
                <div className="rounded-xl bg-[#8D482E]/10 border border-[#8D482E]/25 px-3.5 py-2.5 text-xs text-[#6B331F] leading-relaxed">
                  {copy.iosInAppTip}
                </div>
              )}

              <ol className="space-y-2.5">
                <li className="flex items-start gap-3 rounded-xl bg-[#EFE8DF] p-3.5 border border-[#8D482E]/10">
                  <span className="w-7 h-7 rounded-lg bg-[#8D482E] text-[#F5EFE8] text-xs font-semibold flex items-center justify-center shrink-0 tabular-nums">
                    1
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-[#2E2B2B] leading-relaxed">
                    <span>{copy.iosStep1}</span>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#F5EFE8] px-3 py-1.5 border border-[#8D482E]/15 text-[#007AFF] text-xs font-medium">
                      <Share className="w-4 h-4" />
                      <span>Share / Compartilhar</span>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 rounded-xl bg-[#EFE8DF] p-3.5 border border-[#8D482E]/10">
                  <span className="w-7 h-7 rounded-lg bg-[#8D482E] text-[#F5EFE8] text-xs font-semibold flex items-center justify-center shrink-0 tabular-nums">
                    2
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-[#2E2B2B] leading-relaxed">
                    <span>{copy.iosStep2}</span>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#F5EFE8] px-3 py-1.5 border border-[#8D482E]/15 text-[#2E2B2B] text-xs font-medium">
                      <PlusSquare className="w-4 h-4 text-[#8D482E]" />
                      <span>Add to Home Screen</span>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 rounded-xl bg-[#EFE8DF] p-3.5 border border-[#8D482E]/10">
                  <span className="w-7 h-7 rounded-lg bg-[#8D482E] text-[#F5EFE8] text-xs font-semibold flex items-center justify-center shrink-0 tabular-nums">
                    3
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-[#2E2B2B] leading-relaxed">
                    {copy.iosStep3}
                  </div>
                </li>
              </ol>

              <button
                type="button"
                onClick={onClose}
                className="w-full min-h-[48px] rounded-xl border border-[#8D482E]/30 bg-transparent hover:bg-[#8D482E]/8 py-2.5 text-sm font-medium text-[#2E2B2B] transition-colors cursor-pointer"
              >
                {copy.continueInBrowser}
              </button>
            </>
          ) : (
            /* Android / Browser Install Choice (Direct 1-click install or continue in browser) */
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleInstall}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 rounded-xl bg-[#8D482E] hover:bg-[#7A3B24] px-4 py-3 text-sm font-semibold text-[#F5EFE8] transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{copy.installNow}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full min-h-[48px] rounded-xl border border-[#8D482E]/25 bg-[#EFE8DF]/60 hover:bg-[#EFE8DF] py-3 text-sm font-medium text-[#2E2B2B] transition-colors cursor-pointer"
              >
                {copy.continueInBrowser}
              </button>

              {showFallbackNote && (
                <p className="text-xs text-[#5C4940] bg-[#EFE8DF] border border-[#8D482E]/15 rounded-xl p-3 leading-relaxed">
                  {copy.installFallbackHint}
                </p>
              )}

              <button
                type="button"
                onClick={() => setForceIosView(true)}
                className="w-full pt-1 text-center text-xs text-[#5C4940] hover:text-[#8D482E] inline-flex items-center justify-center gap-1.5 underline underline-offset-4 cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{copy.showIosGuideLink}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
