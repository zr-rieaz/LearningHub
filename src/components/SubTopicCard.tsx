import React, { useState } from "react";
import { SubTopic } from "../data/html5Roadmap";
import { SandboxPreview } from "./SandboxPreview";
import { Copy, Check, Play, RotateCcw, Code2, Eye, Columns } from "lucide-react";

interface SubTopicCardProps {
  subtopic: SubTopic;
  isHighlighted?: boolean;
  onTagClick?: (tag: string) => void;
}

export const SubTopicCard: React.FC<SubTopicCardProps> = ({
  subtopic,
  isHighlighted,
  onTagClick,
}) => {
  const [currentCode, setCurrentCode] = useState(subtopic.codeSnippet);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState<"split" | "code" | "preview">("split");

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setCurrentCode(subtopic.codeSnippet);
    setIsEditing(false);
  };

  return (
    <div
      id={subtopic.id}
      className={`glass-card rounded-xl p-4 sm:p-5 mb-5 transition-all duration-300 relative ${
        isHighlighted
          ? "ring-2 ring-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.35)] bg-indigo-950/20"
          : "hover:border-indigo-500/40"
      }`}
    >
      {/* Header section with Subtopic number, title, and interactive badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-semibold shrink-0">
            {subtopic.subtopicNumber}
          </span>
          <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            {subtopic.title}
          </h4>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 self-start sm:self-auto bg-slate-900/80 p-1 rounded-lg border border-white/10 text-xs text-slate-400">
          <button
            id={`btn-mode-split-${subtopic.id}`}
            onClick={() => setViewMode("split")}
            className={`px-2 py-1 rounded flex items-center gap-1 transition ${
              viewMode === "split"
                ? "bg-indigo-600 text-white shadow-sm"
                : "hover:text-slate-200"
            }`}
            title="Split Code & Preview"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Split</span>
          </button>
          <button
            id={`btn-mode-code-${subtopic.id}`}
            onClick={() => setViewMode("code")}
            className={`px-2 py-1 rounded flex items-center gap-1 transition ${
              viewMode === "code"
                ? "bg-indigo-600 text-white shadow-sm"
                : "hover:text-slate-200"
            }`}
            title="Code only"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Code</span>
          </button>
          <button
            id={`btn-mode-preview-${subtopic.id}`}
            onClick={() => setViewMode("preview")}
            className={`px-2 py-1 rounded flex items-center gap-1 transition ${
              viewMode === "preview"
                ? "bg-indigo-600 text-white shadow-sm"
                : "hover:text-slate-200"
            }`}
            title="Live Sandbox only"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Sandbox</span>
          </button>
        </div>
      </div>

      {/* Tag Badges List (Pill style) */}
      <div className="mb-3.5 flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-slate-400 font-medium mr-1">Tags &amp; Elements:</span>
        {subtopic.tagBadges.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick?.(tag)}
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/25 transition cursor-pointer"
            title={`Filter by tag: ${tag}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Main Workspace Area (Code Snippet + Live Sandbox) */}
      <div
        className={`grid gap-4 ${
          viewMode === "split"
            ? "grid-cols-1 lg:grid-cols-2 items-start"
            : "grid-cols-1"
        }`}
      >
        {/* Code Snippet Box */}
        {(viewMode === "split" || viewMode === "code") && (
          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#070b14] flex flex-col">
            {/* Code Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#0d1424] border-b border-white/10 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-slate-300 font-semibold ml-1">HTML5 Source</span>
              </div>

              <div className="flex items-center gap-2">
                {currentCode !== subtopic.codeSnippet && (
                  <button
                    id={`btn-reset-${subtopic.id}`}
                    onClick={handleReset}
                    className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 transition"
                    title="Reset to default snippet"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}

                <button
                  id={`btn-edit-${subtopic.id}`}
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded transition ${
                    isEditing
                      ? "bg-indigo-600 text-white font-medium"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  title={isEditing ? "View formatted code" : "Edit HTML in sandbox"}
                >
                  <Play className="w-3 h-3" />
                  <span>{isEditing ? "Run Code" : "Live Edit"}</span>
                </button>

                <button
                  id={`btn-copy-${subtopic.id}`}
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2 py-0.5 rounded hover:bg-white/5 transition"
                  title="Copy code to clipboard"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body / Editor Area */}
            {isEditing ? (
              <div className="p-2 bg-[#070b14]">
                <textarea
                  id={`editor-${subtopic.id}`}
                  value={currentCode}
                  onChange={(e) => setCurrentCode(e.target.value)}
                  className="w-full h-44 sm:h-52 bg-transparent text-emerald-300 font-mono text-xs p-2 focus:outline-none resize-y border border-indigo-500/40 rounded"
                  placeholder="Type or edit HTML code here..."
                  spellCheck={false}
                />
                <div className="text-[11px] text-slate-500 mt-1 flex justify-between">
                  <span>Changes immediately reflect in the Live Sandbox!</span>
                  <span className="text-indigo-400 font-mono">{currentCode.length} chars</span>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto p-3 text-xs font-mono leading-relaxed max-h-[300px] overflow-y-auto">
                <pre className="text-slate-200">
                  <code>{currentCode}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Live Output Sandbox Box */}
        {(viewMode === "split" || viewMode === "preview") && (
          <div className="w-full">
            <SandboxPreview
              id={`sandbox-${subtopic.id}`}
              code={currentCode}
              title={subtopic.title}
            />
          </div>
        )}
      </div>

      {subtopic.interactiveNote && (
        <div className="mt-3 pt-2 text-[11px] text-slate-400 flex items-center gap-1.5 border-t border-white/5">
          <span className="text-indigo-400 font-semibold">Tag Note:</span>
          <span>{subtopic.interactiveNote}</span>
        </div>
      )}
    </div>
  );
};
