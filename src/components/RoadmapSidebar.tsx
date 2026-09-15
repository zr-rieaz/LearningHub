import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Bookmark, CircleDot, X } from "lucide-react";
import { Phase, Topic } from "../data/html5Roadmap";

interface RoadmapSidebarProps {
  techTitle?: string;
  phases: Phase[];
  activeTopicId: string | null;
  onSelectTopic: (topicId: string) => void;
  onSelectSubtopic: (subtopicId: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const RoadmapSidebar: React.FC<RoadmapSidebarProps> = ({
  techTitle = "HTML5 Roadmap",
  phases,
  activeTopicId,
  onSelectTopic,
  onSelectSubtopic,
  isOpenMobile,
  onCloseMobile,
}) => {
  // Expand all phases by default
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initial: Record<string, boolean> = {};
    phases.forEach((p) => {
      initial[p.id] = true;
    });
    setExpandedPhases(initial);
  }, [phases]);

  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }));
  };

  const totalTopics = phases.reduce((acc, p) => acc + p.topics.length, 0);
  const totalSubtopics = phases.reduce(
    (acc, p) => acc + p.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0),
    0
  );

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0d1322]/90 border-r border-white/10 backdrop-blur-2xl">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-indigo-400" />
            <span>{techTitle}</span>
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {totalTopics} Topics &bull; {totalSubtopics} Subtopics
          </p>
        </div>

        {/* Mobile Close Button */}
        <button
          id="btn-close-mobile-sidebar"
          onClick={onCloseMobile}
          className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Tree with Accordions */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {phases.map((phase) => {
          const isPhaseExpanded = expandedPhases[phase.id] !== false;
          return (
            <div key={phase.id} className="rounded-xl border border-white/5 bg-slate-900/50 overflow-hidden">
              {/* Phase Accordion Header */}
              <button
                id={`accordion-${phase.id}`}
                onClick={() => togglePhase(phase.id)}
                className="w-full flex items-center justify-between p-2.5 text-left font-semibold text-slate-200 hover:bg-white/5 transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {phase.badge}
                  </span>
                  <span className="text-xs font-semibold">{phase.title}</span>
                </div>
                {isPhaseExpanded ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {/* Phase Topics List */}
              {isPhaseExpanded && (
                <div className="p-2 space-y-2 border-t border-white/5 bg-black/20">
                  {phase.topics.map((topic: Topic) => {
                    const isActive = activeTopicId === topic.id;
                    return (
                      <div key={topic.id} className="space-y-1">
                        <button
                          id={`sidebar-topic-${topic.id}`}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            onCloseMobile();
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 transition cursor-pointer ${
                            isActive
                              ? "bg-indigo-600 text-white font-medium shadow-sm"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <CircleDot className={`w-3 h-3 shrink-0 ${isActive ? "text-indigo-200" : "text-slate-500"}`} />
                          <span className="truncate font-medium">Topic {topic.topicNumber}: {topic.title}</span>
                        </button>

                        {/* Subtopics Indented */}
                        <div className="pl-6 pr-1 space-y-0.5">
                          {topic.subtopics.map((sub) => (
                            <button
                              key={sub.id}
                              id={`sidebar-subtopic-${sub.id}`}
                              onClick={() => {
                                onSelectSubtopic(sub.id);
                                onCloseMobile();
                              }}
                              className="w-full text-left px-2 py-1 rounded text-[11px] text-slate-400 hover:text-indigo-300 hover:bg-white/5 transition truncate flex items-center gap-1.5 cursor-pointer"
                            >
                              <span className="font-mono text-[10px] text-indigo-400/80 shrink-0">{sub.subtopicNumber}</span>
                              <span className="truncate">{sub.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-white/10 text-[11px] text-slate-400 bg-slate-950/60 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Indexed Roadmap</span>
        </span>
        <span className="font-mono text-indigo-400">Live Sandboxes</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 h-[calc(100vh-8.5rem)] sticky top-34 rounded-xl overflow-hidden shadow-xl">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer with Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm h-full shadow-2xl z-10 animate-in slide-in-from-left duration-300">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
