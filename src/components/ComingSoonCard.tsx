import React from "react";
import { Sparkles, Layers, Terminal, ArrowLeft, Clock } from "lucide-react";

interface ComingSoonCardProps {
  technology: "CSS3" | "JavaScript";
  onBackToHtml: () => void;
}

export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  technology,
  onBackToHtml,
}) => {
  const isCss = technology === "CSS3";

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        {/* Glow backdrop decorative gradient */}
        <div
          className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none ${
            isCss ? "bg-blue-500" : "bg-amber-400"
          }`}
        />
        <div
          className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none ${
            isCss ? "bg-cyan-500" : "bg-yellow-500"
          }`}
        />

        {/* Intuitive Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs font-mono mb-6">
          <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-slate-300">Phase In Progress</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-amber-400 font-semibold uppercase tracking-wider">Coming Soon &#128640;</span>
        </div>

        {/* Center Icon */}
        <div className="flex justify-center mb-6">
          <div
            className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl ${
              isCss
                ? "bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-blue-500/20 text-white"
                : "bg-gradient-to-tr from-yellow-500 to-amber-300 shadow-yellow-500/20 text-slate-950"
            }`}
          >
            {isCss ? <Layers className="w-10 h-10" /> : <Terminal className="w-10 h-10" />}
          </div>
        </div>

        {/* Title and descriptions */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          {isCss ? "CSS3 Styling & Animations Hub" : "Modern JavaScript (ES6+) Hub"}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed mb-8">
          {isCss
            ? "Master Flexbox, Grid, CSS Custom Properties, Keyframe Animations, Glassmorphism, and Modern Responsive Layouts. Live sandboxes and interactive property playgrounds are currently being baked!"
            : "Explore Modern ESNext Syntax, Asynchronous Promises, Fetch API, DOM Manipulation, Closures, Event Loops, and Browser APIs with instant executable live consoles."}
        </p>

        {/* Modules Checklist Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left mb-8">
          {(isCss
            ? [
                "Flexbox & CSS Grid Mastery",
                "Transitions & Keyframe FX",
                "Glassmorphism & Gradients",
                "Container Queries & Media Rules",
              ]
            : [
                "ES6+ Syntax & Destructuring",
                "Async / Await & Fetch Engine",
                "DOM Events & Tree Traversal",
                "Web Workers & Storage APIs",
              ]
          ).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          id="btn-return-html5"
          onClick={onBackToHtml}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-500/25 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore HTML5 Roadmap</span>
        </button>
      </div>
    </div>
  );
};
