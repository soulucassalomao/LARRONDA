import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

let capturedPrompt: BeforeInstallPromptEvent | null = null;
const promptListeners = new Set<() => void>();

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    capturedPrompt = e as BeforeInstallPromptEvent;
    promptListeners.forEach((cb) => cb());
  });
}

function checkIsStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(
    capturedPrompt
  );
  const [isInstalled, setIsInstalled] = useState<boolean>(checkIsStandalone);
  const [isIOS, setIsIOS] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    setIsInstalled(checkIsStandalone());

    const ua = window.navigator.userAgent || '';
    const uaLower = ua.toLowerCase();
    const iosDevice =
      /iphone|ipad|ipod/.test(uaLower) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iosDevice);

    const inApp = /instagram|fbav|fban|whatsapp|line|micromessenger/i.test(ua);
    setIsInAppBrowser(inApp);

    const syncPrompt = () => {
      setDeferredPrompt(capturedPrompt);
    };
    promptListeners.add(syncPrompt);
    syncPrompt();

    const handleAppInstalled = () => {
      capturedPrompt = null;
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      promptListeners.delete(syncPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = async () => {
    const promptEvent = deferredPrompt || capturedPrompt;
    if (!promptEvent) return false;
    await promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      capturedPrompt = null;
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    isInAppBrowser,
    install,
  };
}
