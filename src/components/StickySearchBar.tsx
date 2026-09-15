import React, { useState, useRef, useEffect } from "react";
import { Search, X, Tag, Hash, ArrowUpRight } from "lucide-react";
import { Phase, SubTopic } from "../data/html5Roadmap";
import { TabType } from "./Navbar";

interface StickySearchBarProps {
  activeTab: TabType;
  roadmap: Phase[];
  allIndexedTags: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectSubtopic: (subtopicId: string) => void;
  totalMatches: number;
}

const POPULAR_TAGS_MAP: Record<TabType, string[]> = {
  HTML5: [
    "<img>",
    "<table>",
    "<form>",
    "<iframe>",
    "<div>",
    "<video>",
    "<canvas>",
    "<svg>",
    "<input>",
    "<a>",
    "<picture>",
    "<header>",
    "localStorage"
  ],
  CSS3: [
    "flex",
    "grid",
    "@keyframes",
    "backdrop-filter",
    ":hover",
    "::before",
    "border-box",
    "transform",
    "transition",
    "z-index",
    ":root",
    "@media"
  ],
  JavaScript: [
    "map()",
    "filter()",
    "async/await",
    "Promise",
    "querySelector",
    "addEventListener",
    "localStorage",
    "??",
    "class",
    "fetch()",
    "Set",
    "destructuring"
  ]
};

const PLACEHOLDER_MAP: Record<TabType, string> = {
  HTML5: "Search HTML tags (e.g. <img>, <table>, <form>, <canvas>) or keywords...",
  CSS3: "Search CSS properties, selectors (e.g. flex, grid, @keyframes, :hover)...",
  JavaScript: "Search JS concepts, methods (e.g. map, async/await, DOM, fetch)..."
};

export const StickySearchBar: React.FC<StickySearchBarProps> = ({
  activeTab,
  roadmap,
  allIndexedTags,
  searchQuery,
  onSearchChange,
  onSelectSubtopic,
  totalMatches,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut '/' or 'Cmd+K' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "/" || (e.key === "k" && (e.metaKey || e.ctrlKey))) && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape") {
        inputRef.current?.blur();
        setIsFocused(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute matched items for fast dropdown suggestions
  const normalizedQuery = searchQuery.trim().toLowerCase();
  
  const matchedTags = normalizedQuery
    ? allIndexedTags.filter((tag) =>
        tag.toLowerCase().includes(normalizedQuery.replace(/[<>]/g, ""))
      ).slice(0, 8)
    : [];

  // Find matching subtopics for direct jump
  const matchedSubtopics: { subtopic: SubTopic; topicTitle: string }[] = [];
  if (normalizedQuery) {
    roadmap.forEach((phase) => {
      phase.topics.forEach((topic) => {
        topic.subtopics.forEach((sub) => {
          const matchesTag = sub.tagBadges.some((t) =>
            t.toLowerCase().includes(normalizedQuery.replace(/[<>]/g, ""))
          );
          const matchesTitle = sub.title.toLowerCase().includes(normalizedQuery);
          const matchesCode = sub.codeSnippet.toLowerCase().includes(normalizedQuery);
          if (matchesTag || matchesTitle || matchesCode) {
            matchedSubtopics.push({ subtopic: sub, topicTitle: topic.title });
          }
        });
      });
    });
  }

  const handleSelectTag = (tag: string) => {
    onSearchChange(tag);
    // Find the first subtopic matching this tag and jump
    for (const phase of roadmap) {
      for (const topic of phase.topics) {
        for (const sub of topic.subtopics) {
          if (sub.tagBadges.some((t) => t.toLowerCase() === tag.toLowerCase())) {
            onSelectSubtopic(sub.id);
            return;
          }
        }
      }
    }
  };

  const popularTags = POPULAR_TAGS_MAP[activeTab] || POPULAR_TAGS_MAP.HTML5;
  const placeholderText = PLACEHOLDER_MAP[activeTab] || PLACEHOLDER_MAP.HTML5;

  return (
    <div className="sticky top-16 z-30 w-full py-3 bg-[#090d16]/90 backdrop-blur-xl border-b border-white/10 transition-all shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search input container */}
        <div className="relative">
          <div
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all ${
              isFocused
                ? "bg-slate-900 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500"
                : "bg-slate-900/80 border-white/10 hover:border-white/20"
            }`}
          >
            <Search className={`w-4 h-4 transition ${isFocused ? "text-indigo-400" : "text-slate-400"}`} />
            
            <input
              ref={inputRef}
              id="tag-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 250)}
              placeholder={placeholderText}
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
            />

            {searchQuery ? (
              <button
                id="btn-clear-search"
                onClick={() => {
                  onSearchChange("");
                  inputRef.current?.focus();
                }}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-white/10">
                <span>Press</span>
                <kbd className="text-indigo-300 font-semibold">/</kbd>
                <span>to search</span>
              </div>
            )}

            {searchQuery && (
              <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                {totalMatches} {totalMatches === 1 ? "match" : "matches"}
              </span>
            )}
          </div>

          {/* Quick Dropdown Suggestions when active search */}
          {isFocused && (matchedTags.length > 0 || matchedSubtopics.length > 0) && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-slate-900/95 border border-white/15 backdrop-blur-2xl shadow-2xl p-3 z-50 max-h-80 overflow-y-auto">
              {matchedTags.length > 0 && (
                <div className="mb-3">
                  <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>Indexed Tag &amp; Concept Matches</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {matchedTags.map((tag) => (
                      <button
                        key={tag}
                        onMouseDown={() => handleSelectTag(tag)}
                        className="px-2 py-1 rounded bg-indigo-950/60 hover:bg-indigo-600 border border-indigo-500/30 text-indigo-200 hover:text-white text-xs font-mono transition cursor-pointer flex items-center gap-1"
                      >
                        <span>{tag}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedSubtopics.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Hash className="w-3 h-3" />
                    <span>Direct Topic Sections</span>
                  </div>
                  <div className="space-y-1">
                    {matchedSubtopics.slice(0, 6).map(({ subtopic, topicTitle }) => (
                      <button
                        key={subtopic.id}
                        onMouseDown={() => {
                          onSelectSubtopic(subtopic.id);
                          setIsFocused(false);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-white/10 transition flex items-center justify-between text-xs group cursor-pointer"
                      >
                        <div>
                          <span className="font-mono text-indigo-400 mr-2">{subtopic.subtopicNumber}</span>
                          <span className="text-white font-medium group-hover:text-indigo-300">{subtopic.title}</span>
                          <span className="text-slate-400 text-[11px] ml-2 font-normal hidden sm:inline">({topicTitle})</span>
                        </div>
                        <span className="text-[10px] text-slate-400 group-hover:text-white font-mono">Jump &rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Popular Tag Quick-Pills for Instant Discovery */}
        <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-[11px] font-medium text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Tag className="w-3 h-3 text-indigo-400" />
            <span>Popular:</span>
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              id={`popular-tag-${tag.replace(/[^a-zA-Z0-9]/g, "")}`}
              onClick={() => handleSelectTag(tag)}
              className={`px-2 py-0.5 rounded-full text-[11px] font-mono shrink-0 transition cursor-pointer ${
                searchQuery.toLowerCase() === tag.toLowerCase()
                  ? "bg-indigo-600 text-white font-semibold"
                  : "bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-white/5 hover:border-indigo-500/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
