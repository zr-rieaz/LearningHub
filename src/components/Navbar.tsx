import React from "react";
import { Code, Sparkles, Layers, Terminal, FileCode, Menu, X } from "lucide-react";
import { PWAInstallButton } from "./PWAInstallButton";

export type TabType = "HTML5" | "CSS3" | "JavaScript";

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  onExportSingleFile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onToggleSidebar,
  isSidebarOpen,
  onExportSingleFile,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090d16]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left branding & mobile menu toggle */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-sidebar-toggle"
            onClick={onToggleSidebar}
            className="p-2 -ml-1 text-slate-400 hover:text-white lg:hidden rounded-lg hover:bg-white/5 transition"
            aria-label="Toggle roadmap navigation sidebar"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onTabChange("HTML5")}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-white">WebDev Hub</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-mono font-medium">v2.0</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Interactive Documentation &amp; Sandboxes</p>
            </div>
          </div>
        </div>

        {/* Center 3 Tab Navigation (HTML5, CSS3, JavaScript) */}
        <nav className="flex items-center p-1 bg-slate-900/90 rounded-xl border border-white/10 text-xs sm:text-sm font-medium">
          <button
            id="nav-tab-html5"
            onClick={() => onTabChange("HTML5")}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg transition-all ${
              activeTab === "HTML5"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md shadow-orange-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>HTML5</span>
          </button>

          <button
            id="nav-tab-css3"
            onClick={() => onTabChange("CSS3")}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg transition-all ${
              activeTab === "CSS3"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-md shadow-blue-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>CSS3</span>
          </button>

          <button
            id="nav-tab-js"
            onClick={() => onTabChange("JavaScript")}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg transition-all ${
              activeTab === "JavaScript"
                ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-950 font-semibold shadow-md shadow-yellow-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>JavaScript</span>
          </button>
        </nav>

        {/* Right side: Standalone Export action & PWA Install */}
        <div className="flex items-center gap-2">
          <PWAInstallButton />

          <button
            id="btn-export-single-file"
            onClick={onExportSingleFile}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium transition cursor-pointer"
            title="Download Standalone Single-File index.html for offline use or mobile code editor (Acode)"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Export Standalone HTML</span>
            <span className="md:hidden">Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};
