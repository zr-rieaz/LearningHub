import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Share2, PlusSquare } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed and running in standalone window, don't show prompt
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="btn-pwa-install"
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/25 border border-emerald-400/30 transition cursor-pointer"
        title="Install WebDev Hub as Progressive Web App"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Install App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="btn-pwa-ios-guide"
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 text-xs font-medium transition cursor-pointer"
        >
          <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          <span>Install on iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-card max-w-sm w-full rounded-2xl p-6 border border-white/15 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">Install on iPhone / iPad</h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                To install <strong>WebDev Hub</strong> on your iOS home screen:
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 mb-5">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/10">
                  <Share2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>1. Tap the <strong>Share</strong> button at bottom of Safari.</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/10">
                  <PlusSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2. Scroll down and tap <strong>Add to Home Screen</strong>.</span>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
