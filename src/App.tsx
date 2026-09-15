import React, { useState, useMemo, useEffect } from "react";
import { HTML5_ROADMAP, ALL_INDEXED_TAGS, Phase, Topic, SubTopic } from "./data/html5Roadmap";
import { CSS3_ROADMAP, CSS3_INDEXED_TAGS } from "./data/css3Roadmap";
import { JS_ROADMAP, JS_INDEXED_TAGS } from "./data/jsRoadmap";
import { Navbar, TabType } from "./components/Navbar";
import { StickySearchBar } from "./components/StickySearchBar";
import { RoadmapSidebar } from "./components/RoadmapSidebar";
import { TopicSection } from "./components/TopicSection";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { generateSingleFileHtml } from "./utils/generateSingleFileHtml";
import { ArrowUp, Sparkles, BookOpen, Download, Check } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("HTML5");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedSubtopicId, setHighlightedSubtopicId] = useState<string | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [isCopiedHtml, setIsCopiedHtml] = useState(false);

  // Pick current roadmap and tags based on activeTab
  const currentRoadmap: Phase[] = useMemo(() => {
    switch (activeTab) {
      case "CSS3":
        return CSS3_ROADMAP;
      case "JavaScript":
        return JS_ROADMAP;
      case "HTML5":
      default:
        return HTML5_ROADMAP;
    }
  }, [activeTab]);

  const currentIndexedTags: string[] = useMemo(() => {
    switch (activeTab) {
      case "CSS3":
        return CSS3_INDEXED_TAGS;
      case "JavaScript":
        return JS_INDEXED_TAGS;
      case "HTML5":
      default:
        return ALL_INDEXED_TAGS;
    }
  }, [activeTab]);

  // Reset search and scroll to top when changing tab
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Monitor scroll for scroll-to-top button and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const topicElements = document.querySelectorAll<HTMLElement>("section[id*='topic-']");
      let currentTopic: string | null = null;
      topicElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 200) {
          currentTopic = el.id;
        }
      });
      if (currentTopic) {
        setActiveTopicId(currentTopic);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  // Filter current roadmap based on search query
  const { filteredPhases, totalMatches } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase().replace(/[<>]/g, "");
    if (!q) {
      const allSubCount = currentRoadmap.reduce(
        (acc, p) => acc + p.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0),
        0
      );
      return { filteredPhases: currentRoadmap, totalMatches: allSubCount };
    }

    let matchesCount = 0;

    const filtered: Phase[] = currentRoadmap
      .map((phase) => {
        const filteredTopics: Topic[] = phase.topics
          .map((topic) => {
            const filteredSubtopics: SubTopic[] = topic.subtopics.filter((sub) => {
              const matchesTag = sub.tagBadges.some((tag) =>
                tag.toLowerCase().includes(q)
              );
              const matchesTitle = sub.title.toLowerCase().includes(q);
              const matchesCode = sub.codeSnippet.toLowerCase().includes(q);
              const matchesNote = sub.interactiveNote?.toLowerCase().includes(q);
              return matchesTag || matchesTitle || matchesCode || matchesNote;
            });

            matchesCount += filteredSubtopics.length;

            return {
              ...topic,
              subtopics: filteredSubtopics,
            };
          })
          .filter((topic) => topic.subtopics.length > 0);

        return {
          ...phase,
          topics: filteredTopics,
        };
      })
      .filter((phase) => phase.topics.length > 0);

    return { filteredPhases: filtered, totalMatches: matchesCount };
  }, [searchQuery, currentRoadmap]);

  // Smooth scroll directly to topic or subtopic
  const scrollToTarget = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlightedSubtopicId(elementId);
      setTimeout(() => {
        setHighlightedSubtopicId((prev) => (prev === elementId ? null : prev));
      }, 2500);
    }
  };

  const handleSelectTopic = (topicId: string) => {
    setActiveTopicId(topicId);
    scrollToTarget(topicId);
  };

  const handleSelectSubtopic = (subtopicId: string) => {
    scrollToTarget(subtopicId);
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    for (const phase of currentRoadmap) {
      for (const topic of phase.topics) {
        for (const sub of topic.subtopics) {
          if (sub.tagBadges.some((t) => t.toLowerCase() === tag.toLowerCase())) {
            scrollToTarget(sub.id);
            return;
          }
        }
      }
    }
  };

  const handleDownloadStandalone = () => {
    const html = generateSingleFileHtml(activeTab);
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `webdev-hub-${activeTab.toLowerCase()}-documentation.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyStandaloneHtml = () => {
    const html = generateSingleFileHtml(activeTab);
    navigator.clipboard.writeText(html);
    setIsCopiedHtml(true);
    setTimeout(() => setIsCopiedHtml(false), 2000);
  };

  // Tab thematic metadata
  const tabMetadata = useMemo(() => {
    switch (activeTab) {
      case "CSS3":
        return {
          title: "CSS3 Master Roadmap & Interactive Cheat-Sheet",
          badge: "CSS3 ROADMAP",
          accentColor: "from-blue-500 to-cyan-500",
          tagSymbol: "{ }",
          description:
            "Core mechanics, Box Model geometry, Flexbox, Grid, transforms, transitions, keyframe animations, and glassmorphism UI.",
          phasesCount: 3,
          topicsCount: 9,
          subtopicsCount: 27,
        };
      case "JavaScript":
        return {
          title: "JavaScript (ES6+) Master Roadmap & Execution Hub",
          badge: "JAVASCRIPT ES6+",
          accentColor: "from-yellow-500 to-amber-500",
          tagSymbol: "( ) =>",
          description:
            "V8 Engine execution, scope mechanics, closures, functional array methods, ES6 OOP classes, DOM events, and Async/Await with live console execution.",
          phasesCount: 3,
          topicsCount: 9,
          subtopicsCount: 25,
        };
      case "HTML5":
      default:
        return {
          title: "Modern HTML5 Master Roadmap & Interactive Sandboxes",
          badge: "HTML5 ROADMAP",
          accentColor: "from-orange-500 to-amber-500",
          tagSymbol: "</>",
          description:
            "Direct tag-focused documentation with self-explanatory code snippets, real-time live output sandboxes, and instantaneous tag search.",
          phasesCount: 2,
          topicsCount: 8,
          subtopicsCount: 20,
        };
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Background ambient radial gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      {/* Top Header Navbar with Tab Switching & PWA Install */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onToggleSidebar={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
        isSidebarOpen={isSidebarOpenMobile}
        onExportSingleFile={() => setShowExportModal(true)}
      />

      {/* Sticky Search Engine & Popular Tag Filter */}
      <StickySearchBar
        activeTab={activeTab}
        roadmap={currentRoadmap}
        allIndexedTags={currentIndexedTags}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectSubtopic={handleSelectSubtopic}
        totalMatches={totalMatches}
      />

      {/* Main App Body */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start gap-8">
          {/* Sidebar Navigation */}
          <RoadmapSidebar
            techTitle={`${activeTab} Roadmap`}
            phases={currentRoadmap}
            activeTopicId={activeTopicId}
            onSelectTopic={handleSelectTopic}
            onSelectSubtopic={handleSelectSubtopic}
            isOpenMobile={isSidebarOpenMobile}
            onCloseMobile={() => setIsSidebarOpenMobile(false)}
          />

          {/* Main Learning Hub Content */}
          <main className="flex-1 min-w-0">
            {/* Hero Banner with stats */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-10 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
                <span className="font-mono text-8xl font-bold text-white">{tabMetadata.tagSymbol}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>{tabMetadata.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                {tabMetadata.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-6">
                {tabMetadata.description}
              </p>

              {/* Stat badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  <strong className="text-white">{tabMetadata.phasesCount}</strong> Major Phases
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <strong className="text-white">{tabMetadata.topicsCount}</strong> Core Topics
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <strong className="text-white">{tabMetadata.subtopicsCount}</strong> Sub-topics
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <strong className="text-white">100%</strong> Executable Live Output
                </div>
              </div>
            </div>

            {/* Search Active Notification */}
            {searchQuery && (
              <div className="mb-6 p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Showing results for tag or keyword: <strong className="text-indigo-300 font-mono">"{searchQuery}"</strong> ({totalMatches} subtopics found)
                </span>
                <button
                  id="btn-reset-filter"
                  onClick={() => setSearchQuery("")}
                  className="text-indigo-400 hover:text-indigo-300 underline font-medium cursor-pointer"
                >
                  Clear Filter
                </button>
              </div>
            )}

            {/* Render Phases and Topics */}
            {filteredPhases.length === 0 ? (
              <div className="glass-card rounded-xl p-12 text-center">
                <p className="text-slate-400 text-sm mb-3">No {activeTab} topics or tags matched "{searchQuery}".</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition cursor-pointer"
                >
                  Reset Search Filter
                </button>
              </div>
            ) : (
              filteredPhases.map((phase) => (
                <div key={phase.id} className="mb-14">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                    <span className="px-2.5 py-1 rounded-md font-mono text-xs font-bold tracking-wide bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {phase.badge}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {phase.title}
                    </h2>
                  </div>

                  {/* Topics List */}
                  <div className="space-y-6">
                    {phase.topics.map((topic) => (
                      <TopicSection
                        key={topic.id}
                        topic={topic}
                        highlightedSubtopicId={highlightedSubtopicId}
                        onTagClick={handleTagClick}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </main>
        </div>
      </div>

      {/* Offline Status Indicator */}
      <OfflineIndicator />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          id="btn-scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-500/30 border border-indigo-400/30 transition transform hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Standalone Single-File index.html Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card max-w-2xl w-full rounded-2xl p-6 border border-white/15 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Standalone Single-File index.html</h3>
                  <p className="text-xs text-slate-400">Offline-ready bundle for {activeTab} with embedded CSS &amp; JS</p>
                </div>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-slate-400 hover:text-white text-sm p-1 rounded-md hover:bg-white/5 cursor-pointer"
              >
                &times;
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              This generates a 100% self-contained single-file <code className="text-indigo-400 font-mono">webdev-hub-{activeTab.toLowerCase()}-documentation.html</code> containing all topics, subtopics, and live executable sandboxes. Perfect for mobile code editors (Acode), offline reading, or pushing straight to static hosts!
            </p>

            <div className="bg-slate-950 p-3 rounded-xl border border-white/10 font-mono text-xs text-slate-400 mb-5 flex items-center justify-between">
              <span>Target: <strong className="text-white">{activeTab} Roadmap</strong> (Standalone Bundle)</span>
              <span className="text-emerald-400 font-semibold">&#10004; Ready</span>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={handleCopyStandaloneHtml}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
              >
                {isCopiedHtml ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4" />
                    <span>Copy HTML Code</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadStandalone}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-indigo-500/25 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download {activeTab} HTML</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modern Glassmorphic Footer */}
      <footer className="mt-auto border-t border-white/10 bg-[#070a12]/80 backdrop-blur-md py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    
            {/* ব্র্যান্ড নাম ও ডেভেলপার ক্রেডিট */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
               <span className="font-semibold text-white">WebDev Hub &bull; Full-Stack Learning Hub</span>
               <span>&bull;</span>
               <span>Developed by <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Rieaz</span></span>
               <span>&bull;</span>
               <span>&copy; 2026</span>
            </div>

            {/* টেকনোলজি সাবটপিকস লিস্ট */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-400">
                <span>HTML5 (20 Subtopics)</span>
                <span>&bull;</span>
                <span>CSS3 (27 Subtopics)</span>
                <span>&bull;</span>
                <span>JavaScript (25 Subtopics)</span>
                <span>&bull;</span>
                <span>PWA Offline Ready</span>
             </div>

          </div>
      </footer>

    </div>
  );
}
