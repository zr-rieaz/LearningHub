import React from "react";
import { Topic } from "../data/html5Roadmap";
import { SubTopicCard } from "./SubTopicCard";
import { Bookmark } from "lucide-react";

interface TopicSectionProps {
  topic: Topic;
  highlightedSubtopicId?: string | null;
  onTagClick?: (tag: string) => void;
}

export const TopicSection: React.FC<TopicSectionProps> = ({
  topic,
  highlightedSubtopicId,
  onTagClick,
}) => {
  return (
    <section id={topic.id} className="mb-12 scroll-mt-32">
      {/* Topic Header Card */}
      <div className="glass-panel rounded-xl p-4 sm:p-5 mb-5 border-l-4 border-l-indigo-500">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400">
            <Bookmark className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
              Topic {topic.topicNumber}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {topic.title}
            </h3>
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-300 ml-11 leading-relaxed">
          {topic.description}
        </p>
      </div>

      {/* Subtopics List */}
      <div className="space-y-4">
        {topic.subtopics.map((subtopic) => (
          <SubTopicCard
            key={subtopic.id}
            subtopic={subtopic}
            isHighlighted={highlightedSubtopicId === subtopic.id}
            onTagClick={onTagClick}
          />
        ))}
      </div>
    </section>
  );
};
