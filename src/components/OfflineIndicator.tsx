import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-500/90 backdrop-blur-md px-3.5 py-2 text-xs font-medium text-white shadow-xl shadow-amber-500/20 border border-amber-400/40 animate-pulse">
      <WifiOff className="w-4 h-4" />
      <span>Offline Mode — Cached roadmap &amp; sandboxes available.</span>
    </div>
  );
};
