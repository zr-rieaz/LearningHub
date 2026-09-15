import { Phase } from "./html5Roadmap";

export const CSS3_ROADMAP: Phase[] = [
  {
    id: "css-phase-1",
    phaseNumber: 1,
    title: "CSS3 Core Fundamentals & Styling",
    badge: "PHASE 1",
    topics: [
      {
        id: "css-topic-1",
        topicNumber: 1,
        title: "CSS Mechanics & Selector Architecture",
        description: "Foundational stylesheet syntax, cascading priority rules, and selector targeting architecture.",
        subtopics: [
          {
            id: "css-sub-1-1",
            subtopicNumber: "1.1",
            title: "CSS Syntax & Inclusion Methods",
            tagBadges: ["Selector", "Property", "Value", "Inline", "Internal", "External"],
            codeSnippet: `<!-- 1. Inline CSS: Applied directly on the element via style attribute -->
<div style="background: #1e1b4b; border: 1px solid #6366f1; padding: 10px; border-radius: 6px; margin-bottom: 8px;">
  <span style="color: #a5b4fc; font-weight: bold;">Inline CSS:</span> Scoped directly to this element.
</div>

<!-- 2. Internal CSS: Declared inside a <style> block within document head -->
<style>
  .internal-card {
    background: #0f172a;
    border-left: 4px solid #38bdf8;
    padding: 10px 14px;
    border-radius: 4px;
    color: #e2e8f0;
  }
  .internal-card em {
    color: #38bdf8;
    font-style: normal;
    font-weight: 600;
  }
</style>
<div class="internal-card">
  <em>Internal CSS:</em> Managed cleanly via class selectors in &lt;style&gt; tag.
</div>

<!-- 3. External CSS reference: <link rel="stylesheet" href="styles.css"> -->`,
            interactiveNote: "Demonstrates inline styling vs reusable internal/external stylesheet rules."
          },
          {
            id: "css-sub-1-2",
            subtopicNumber: "1.2",
            title: "Basic Selectors",
            tagBadges: ["Type (h1)", "Class (.class)", "ID (#id)", "Universal (*)"],
            codeSnippet: `<style>
  /* Universal Selector: Targets all descendants */
  * { box-sizing: border-box; }

  /* Element / Type Selector: Targets HTML tag directly */
  h4 { color: #f8fafc; margin-bottom: 4px; }

  /* Class Selector: Reusable styling on multiple elements */
  .badge-card {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 6px;
  }

  /* ID Selector: Unique target with higher specificity */
  #spotlight-btn {
    background: linear-gradient(135deg, #4f46e5, #06b6d4);
    color: white;
    padding: 6px 14px;
    border-radius: 4px;
    font-weight: bold;
    display: inline-block;
  }
</style>

<div class="badge-card">
  <h4>Basic Selectors In Action</h4>
  <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 8px 0;">Class (.badge-card) + Type (h4) + ID (#spotlight-btn):</p>
  <span id="spotlight-btn">Targeted by #ID</span>
</div>`,
            interactiveNote: "Shows universal, type, class, and ID selector specificity targeting in real-time."
          },
          {
            id: "css-sub-1-3",
            subtopicNumber: "1.3",
            title: "Combinators & Grouping",
            tagBadges: ["A, B (Grouping)", "A B (Descendant)", "A > B (Child)", "A + B (Adjacent)", "A ~ B (General)"],
            codeSnippet: `<style>
  /* Grouping Selector: applies same styles to multiple selectors */
  .combo-title, .combo-subtitle {
    margin: 0;
    font-family: inherit;
  }

  /* Descendant Selector (A B): Targets any B inside A */
  .combinator-container p { color: #cbd5e1; }

  /* Child Selector (A > B): Targets direct children only */
  .list-parent > .direct-item {
    background: rgba(99, 102, 241, 0.2);
    border: 1px solid #6366f1;
    padding: 6px;
    margin-bottom: 4px;
    border-radius: 4px;
  }

  /* Adjacent Sibling (A + B): Immediately follows A */
  .active-node + .adjacent-node {
    border-color: #10b981;
    color: #6ee7b7;
  }
</style>

<div class="combinator-container">
  <div class="list-parent">
    <div class="direct-item active-node">&#9679; Direct Child A (Active)</div>
    <div class="direct-item adjacent-node">&#9679; Adjacent Sibling B (Targeted via A + B)</div>
    <div class="direct-item">&#9679; General Sibling C</div>
  </div>
</div>`,
            interactiveNote: "Illustrates relational DOM combinators: grouping, descendants, direct children, and sibling operators."
          },
          {
            id: "css-sub-1-4",
            subtopicNumber: "1.4",
            title: "Cascade, Inheritance & Specificity",
            tagBadges: ["Cascade", "Specificity (0,0,0,0)", "Inheritance", "!important"],
            codeSnippet: `<style>
  /* Inheritance: color and font-family cascade down automatically */
  .inherited-tree {
    color: #a78bfa;
    font-family: monospace;
    padding: 8px;
    background: #0f172a;
    border-radius: 6px;
  }

  /* Specificity Battle: Class (0,0,1,0) vs ID (0,1,0,0) vs !important */
  p.normal-p { color: #94a3b8; }
  #specific-text { color: #38bdf8; } /* Beats class */
  .override-p { color: #ef4444 !important; } /* Beats ID with !important */
</style>

<div class="inherited-tree">
  <div>Inherited parent styling cascades to nested children</div>
  <p class="normal-p" id="specific-text">
    ID Selector (Score: 0,1,0,0) overrides Class Selector (Score: 0,0,1,0).
  </p>
  <p class="normal-p override-p" id="specific-text">
    !important rule overrides both ID and classes!
  </p>
</div>`,
            interactiveNote: "Specificity calculation: Inline (1000) > ID (100) > Class/Attribute/Pseudo (10) > Element (1)."
          }
        ]
      },
      {
        id: "css-topic-2",
        topicNumber: 2,
        title: "Box Model, Spacing & Display Control",
        description: "Margin, border, padding geometry, content-box vs border-box sizing, and display mechanics.",
        subtopics: [
          {
            id: "css-sub-2-1",
            subtopicNumber: "2.1",
            title: "The CSS Box Model",
            tagBadges: ["Content Area", "Padding", "Border", "Margin", "Shorthands"],
            codeSnippet: `<style>
  .box-model-demo {
    margin: 12px; /* Margin: Outer space outside the border */
    border: 3px dashed #6366f1; /* Border: Boundary line */
    padding: 14px; /* Padding: Space between border and content */
    background: #1e1b4b;
    border-radius: 8px;
    text-align: center;
  }
  .content-core {
    background: #4f46e5;
    padding: 8px;
    border-radius: 4px;
    color: white;
    font-weight: 600;
  }
</style>

<div style="background: rgba(234, 179, 8, 0.15); padding: 4px; border-radius: 10px; border: 1px dashed #eab308;">
  <span style="font-size: 10px; color: #facc15;">&#9654; Margin Zone (Orange/Yellow)</span>
  <div class="box-model-demo">
    <span style="font-size: 10px; color: #a5b4fc;">&#9654; Border (Indigo) + Padding Zone</span>
    <div class="content-core">Content Area (width &times; height)</div>
  </div>
</div>`,
            interactiveNote: "Every visible element consists of 4 layers: Content -> Padding -> Border -> Margin."
          },
          {
            id: "css-sub-2-2",
            subtopicNumber: "2.2",
            title: "Advanced Box Sizing & Margins",
            tagBadges: ["box-sizing", "border-box", "content-box", "margin: auto", "Collapsing"],
            codeSnippet: `<style>
  .box-wrapper { display: flex; gap: 10px; }
  
  /* content-box: width only calculates content (width + padding + border) */
  .box-content {
    box-sizing: content-box;
    width: 120px;
    padding: 12px;
    border: 4px solid #ef4444;
    background: rgba(239, 68, 68, 0.15);
  }

  /* border-box: width includes padding & border (total width stays 120px) */
  .box-border {
    box-sizing: border-box;
    width: 120px;
    padding: 12px;
    border: 4px solid #10b981;
    background: rgba(16, 185, 129, 0.15);
  }

  /* Auto-centering horizontally */
  .centered-auto {
    width: 80%;
    margin: 10px auto;
    background: #1e293b;
    padding: 6px;
    text-align: center;
    border-radius: 4px;
  }
</style>

<div class="box-wrapper">
  <div class="box-content"><small>content-box (Grows to 152px!)</small></div>
  <div class="box-border"><small>border-box (Exact 120px locked)</small></div>
</div>
<div class="centered-auto">margin: 0 auto (Centered Box)</div>`,
            interactiveNote: "Modern standard: Always set `* { box-sizing: border-box; }` so padding doesn't inflate element widths."
          },
          {
            id: "css-sub-2-3",
            subtopicNumber: "2.3",
            title: "Display Mechanics",
            tagBadges: ["display: block", "inline", "inline-block", "display: none", "visibility: hidden"],
            codeSnippet: `<style>
  .block-el { display: block; background: #334155; padding: 6px; margin-bottom: 6px; }
  .inline-el { display: inline; background: #4338ca; padding: 4px; color: white; }
  .inline-block-el { display: inline-block; width: 100px; height: 35px; background: #059669; padding: 6px; text-align: center; color: white; border-radius: 4px; }
  .hidden-none { display: none; } /* Removed completely from flow */
  .hidden-vis { visibility: hidden; } /* Invisible but still preserves space */
</style>

<div class="block-el">Block: Starts on new line &amp; fills 100% width</div>
<span>Text with </span>
<div class="inline-el">display: inline</div>
<span> and </span>
<div class="inline-block-el">inline-block</div>
<span> (can set width/height!).</span>`,
            interactiveNote: "Inline elements ignore width/height; inline-block respects width/height while sitting inline."
          }
        ]
      },
      {
        id: "css-topic-3",
        topicNumber: 3,
        title: "Typography, Colors & Backgrounds",
        description: "Text formatting, Google Web Fonts, color models (HEX, RGBA, HSLA), and layered backgrounds.",
        subtopics: [
          {
            id: "css-sub-3-1",
            subtopicNumber: "3.1",
            title: "Typography & Text Styling",
            tagBadges: ["font-family", "font-size", "rem/em", "font-weight", "text-align", "letter-spacing"],
            codeSnippet: `<style>
  .typo-demo {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    letter-spacing: 0.5px;
  }
  .heading-hero {
    font-size: 1.25rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #38bdf8;
    margin: 0 0 6px 0;
  }
  .lead-text {
    font-size: 0.95rem;
    font-style: italic;
    color: #94a3b8;
    text-decoration: underline wavy #6366f1;
    text-underline-offset: 4px;
  }
</style>

<div class="typo-demo">
  <div class="heading-hero">Typography In Modern CSS</div>
  <p class="lead-text">Formatted with rem units, letter-spacing, line-height, and wavy underline offset.</p>
</div>`,
            interactiveNote: "Use rem for scalable accessibility (1rem = root html font size, typically 16px)."
          },
          {
            id: "css-sub-3-2",
            subtopicNumber: "3.2",
            title: "Color Formats & Opacity",
            tagBadges: ["HEX (#HEXA)", "rgb() / rgba()", "hsl() / hsla()", "opacity vs alpha"],
            codeSnippet: `<style>
  .color-grid { display: flex; gap: 8px; flex-wrap: wrap; }
  .color-swatch {
    flex: 1; min-width: 90px; padding: 10px; border-radius: 6px;
    text-align: center; font-family: monospace; font-size: 11px; font-weight: bold;
  }
  .hex-swatch { background: #6366f1; color: white; }
  .rgba-swatch { background: rgba(56, 189, 248, 0.35); color: #e0f2fe; border: 1px solid #38bdf8; }
  .hsla-swatch { background: hsla(160, 84%, 39%, 0.35); color: #d1fae5; border: 1px solid #10b981; }
</style>

<div class="color-grid">
  <div class="color-swatch hex-swatch">HEX<br>#6366f1</div>
  <div class="color-swatch rgba-swatch">RGBA<br>rgba(56,189,248,0.35)</div>
  <div class="color-swatch hsla-swatch">HSLA<br>hsla(160,84%,39%,0.35)</div>
</div>`,
            interactiveNote: "RGBA/HSLA alpha transparency only affects the background; opacity property fades children too."
          },
          {
            id: "css-sub-3-3",
            subtopicNumber: "3.3",
            title: "Background Styling",
            tagBadges: ["background-color", "background-image", "cover / contain", "background-position", "fixed"],
            codeSnippet: `<style>
  .bg-demo {
    height: 140px;
    border-radius: 8px;
    /* Shorthand: color image position / size repeat attachment */
    background: #0f172a url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80') center / cover no-repeat;
    display: flex;
    align-items: flex-end;
    padding: 12px;
    border: 1px solid rgba(255,255,255,0.15);
  }
  .bg-glass-tag {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(8px);
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    color: white;
    border: 1px solid rgba(255,255,255,0.1);
  }
</style>

<div class="bg-demo">
  <span class="bg-glass-tag">&#127912; background: center / cover no-repeat</span>
</div>`,
            interactiveNote: "background-size: cover scales the image proportionally so no empty area is left exposed."
          }
        ]
      }
    ]
  },
  {
    id: "css-phase-2",
    phaseNumber: 2,
    title: "Advanced Layouts, Flexbox & Grid",
    badge: "PHASE 2",
    topics: [
      {
        id: "css-topic-4",
        topicNumber: 4,
        title: "Positioning, Floating & Layering",
        description: "CSS coordinate positioning systems (relative, absolute, fixed, sticky), z-index layering, and overflow clipping.",
        subtopics: [
          {
            id: "css-sub-4-1",
            subtopicNumber: "4.1",
            title: "Positioning System",
            tagBadges: ["static", "relative", "absolute", "fixed", "sticky", "top/right/bottom/left"],
            codeSnippet: `<style>
  /* Relative parent becomes containing block for absolute child */
  .pos-parent {
    position: relative;
    height: 120px;
    background: #1e293b;
    border: 1px dashed #64748b;
    border-radius: 8px;
    padding: 10px;
  }
  .pos-absolute-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #ef4444;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 12px;
  }
  .pos-relative-offset {
    position: relative;
    top: 15px;
    left: 10px;
    background: #4f46e5;
    color: white;
    display: inline-block;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 11px;
  }
</style>

<div class="pos-parent">
  <span class="pos-absolute-badge">Absolute (top: 8px; right: 8px)</span>
  <span class="pos-relative-offset">Relative Offset (+15px, +10px)</span>
</div>`,
            interactiveNote: "position: absolute anchors to the nearest positioned ancestor (non-static element)."
          },
          {
            id: "css-sub-4-2",
            subtopicNumber: "4.2",
            title: "Layering & Floating",
            tagBadges: ["z-index", "Stacking Context", "float: left", "clear: both", "Clearfix"],
            codeSnippet: `<style>
  .layer-stage { position: relative; height: 100px; margin-bottom: 10px; }
  .layer-card {
    position: absolute;
    width: 140px;
    padding: 12px;
    border-radius: 8px;
    color: white;
    font-size: 11px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  .card-back { top: 10px; left: 10px; background: #3b82f6; z-index: 1; }
  .card-front { top: 30px; left: 40px; background: #10b981; z-index: 10; border: 2px solid white; }
</style>

<div class="layer-stage">
  <div class="layer-card card-back">z-index: 1 (Behind)</div>
  <div class="layer-card card-front">z-index: 10 (Foreground)</div>
</div>`,
            interactiveNote: "z-index only takes effect on positioned elements (relative, absolute, fixed, sticky) or flex/grid items."
          },
          {
            id: "css-sub-4-3",
            subtopicNumber: "4.3",
            title: "Overflow & Clipping",
            tagBadges: ["overflow", "visible", "hidden", "scroll", "auto", "text-overflow: ellipsis"],
            codeSnippet: `<style>
  .overflow-box {
    width: 100%;
    height: 65px;
    overflow-y: auto;
    background: #0f172a;
    border: 1px solid #334155;
    padding: 8px;
    border-radius: 6px;
    font-size: 11px;
    margin-bottom: 8px;
  }
  .ellipsis-row {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #1e1b4b;
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid #6366f1;
    font-size: 11px;
    color: #a5b4fc;
  }
</style>

<div class="overflow-box">
  <strong>Scrollable Box (overflow-y: auto):</strong><br>
  Line 1: High performance scrollable container.<br>
  Line 2: Content clipped inside boundaries.<br>
  Line 3: Scroll down to reveal more items without breaking layout.<br>
  Line 4: Smooth native scroll physics.
</div>
<div class="ellipsis-row">
  Single line ellipsis: Long text gets neatly truncated with three dots (...) using text-overflow: ellipsis!
</div>`,
            interactiveNote: "text-overflow: ellipsis requires three properties: white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
          }
        ]
      },
      {
        id: "css-topic-5",
        topicNumber: 5,
        title: "Flexbox (Flexible Box Layout)",
        description: "1-dimensional flexible layouts: main axis, cross axis, alignment, distribution, and item flexing.",
        subtopics: [
          {
            id: "css-sub-5-1",
            subtopicNumber: "5.1",
            title: "Flex Container Properties",
            tagBadges: ["display: flex", "flex-direction", "justify-content", "align-items", "gap", "flex-wrap"],
            codeSnippet: `<style>
  .flex-demo-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background: #1e1b4b;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #6366f1;
  }
  .flex-box {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }
</style>

<div class="flex-demo-container">
  <div class="flex-box">1. Left</div>
  <div class="flex-box">2. Center</div>
  <div class="flex-box">3. Right</div>
</div>
<p style="font-size: 11px; color: #94a3b8; margin-top: 6px;">
  justify-content: space-between &bull; align-items: center &bull; gap: 10px
</p>`,
            interactiveNote: "justify-content aligns along the main axis; align-items aligns along the cross axis."
          },
          {
            id: "css-sub-5-2",
            subtopicNumber: "5.2",
            title: "Flex Item Properties",
            tagBadges: ["flex-grow", "flex-shrink", "flex-basis", "flex shorthand", "align-self", "order"],
            codeSnippet: `<style>
  .flex-item-stage {
    display: flex;
    gap: 8px;
    background: #0f172a;
    padding: 10px;
    border-radius: 8px;
  }
  .item-fixed {
    flex: 0 0 80px; /* Don't grow, don't shrink, stay 80px */
    background: #334155;
    padding: 8px;
    border-radius: 4px;
    font-size: 11px;
    text-align: center;
  }
  .item-grow {
    flex: 1 1 auto; /* Grow and absorb all remaining space */
    background: #059669;
    color: white;
    padding: 8px;
    border-radius: 4px;
    font-size: 11px;
    text-align: center;
    font-weight: bold;
  }
  .item-self {
    align-self: flex-end; /* Custom cross-axis position */
    background: #d97706;
    color: white;
    padding: 8px;
    border-radius: 4px;
    font-size: 11px;
  }
</style>

<div class="flex-item-stage" style="height: 80px;">
  <div class="item-fixed">Fixed 80px</div>
  <div class="item-grow">flex-grow: 1 (Fills Rest)</div>
  <div class="item-self">align-self: end</div>
</div>`,
            interactiveNote: "flex shorthand: `flex: 1` expands to `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`"
          }
        ]
      },
      {
        id: "css-topic-6",
        topicNumber: 6,
        title: "CSS Grid Layout",
        description: "2-dimensional grid matrix systems: rows, columns, fractions (fr), areas, and responsive auto-fit.",
        subtopics: [
          {
            id: "css-sub-6-1",
            subtopicNumber: "6.1",
            title: "Grid Container Setup",
            tagBadges: ["display: grid", "grid-template-columns", "fr unit", "repeat()", "minmax()", "auto-fit"],
            codeSnippet: `<style>
  .grid-responsive-demo {
    display: grid;
    /* Auto-fit creates responsive columns without media queries! */
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
    background: #0f172a;
    padding: 10px;
    border-radius: 8px;
  }
  .grid-cell {
    background: #1e293b;
    border: 1px solid #38bdf8;
    color: #e0f2fe;
    padding: 14px 6px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
  }
</style>

<div class="grid-responsive-demo">
  <div class="grid-cell">Cell 1</div>
  <div class="grid-cell">Cell 2</div>
  <div class="grid-cell">Cell 3</div>
  <div class="grid-cell">Cell 4</div>
</div>
<span style="font-size: 11px; color: #94a3b8; display: block; margin-top: 4px;">
  repeat(auto-fit, minmax(90px, 1fr)): Automatically reorganizes as width changes!
</span>`,
            interactiveNote: "1fr represents 1 fraction of the available free space in the grid container."
          },
          {
            id: "css-sub-6-2",
            subtopicNumber: "6.2",
            title: "Grid Placement & Alignment",
            tagBadges: ["grid-column", "grid-row", "grid-area", "place-items: center", "span"],
            codeSnippet: `<style>
  .bento-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    background: #111827;
    padding: 10px;
    border-radius: 8px;
  }
  .bento-item {
    background: #1f2937;
    padding: 10px;
    border-radius: 6px;
    font-size: 11px;
    color: white;
    border: 1px solid rgba(255,255,255,0.08);
  }
  /* Spans 2 columns */
  .bento-hero {
    grid-column: span 2;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    font-weight: bold;
  }
  /* Centering with place-items */
  .bento-center {
    display: grid;
    place-items: center;
    background: #065f46;
  }
</style>

<div class="bento-grid">
  <div class="bento-item bento-hero">Hero Feature (grid-column: span 2)</div>
  <div class="bento-item bento-center">place-items: center</div>
  <div class="bento-item">Item 3</div>
  <div class="bento-item">Item 4</div>
  <div class="bento-item">Item 5</div>
</div>`,
            interactiveNote: "place-items: center combines align-items and justify-items into a single convenient declaration."
          }
        ]
      }
    ]
  },
  {
    id: "css-phase-3",
    phaseNumber: 3,
    title: "Modern CSS3 Effects, Animations & Responsive Design",
    badge: "PHASE 3",
    topics: [
      {
        id: "css-topic-7",
        topicNumber: 7,
        title: "Pseudo-classes, Pseudo-elements & Attribute Selectors",
        description: "Interactive states (:hover, :focus), structural formulas (:nth-child), generated content (::before, ::after), and attribute filters.",
        subtopics: [
          {
            id: "css-sub-7-1",
            subtopicNumber: "7.1",
            title: "User Interaction Pseudo-classes",
            tagBadges: [":hover", ":active", ":focus", ":focus-within", ":checked", ":disabled"],
            codeSnippet: `<style>
  .btn-interactive {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-interactive:hover {
    background: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  }
  .btn-interactive:active {
    transform: translateY(0);
  }
  .input-styled:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.3);
  }
</style>

<div style="display: flex; gap: 10px; align-items: center;">
  <button class="btn-interactive">Hover &amp; Click Me</button>
  <input class="input-styled" type="text" placeholder="Click to test :focus" style="padding: 6px 10px; border-radius: 6px; background: #0f172a; border: 1px solid #334155; color: white; font-size: 11px;">
</div>`,
            interactiveNote: ":hover triggers on mouse cursor pass; :focus triggers when element receives keyboard or click focus."
          },
          {
            id: "css-sub-7-2",
            subtopicNumber: "7.2",
            title: "Structural Pseudo-classes",
            tagBadges: [":first-child", ":last-child", ":nth-child(n)", ":not()", ":is()", ":where()"],
            codeSnippet: `<style>
  .zebra-list { list-style: none; padding: 0; margin: 0; }
  .zebra-list li {
    padding: 6px 10px;
    font-size: 11px;
    border-radius: 4px;
    margin-bottom: 2px;
  }
  /* Even rows */
  .zebra-list li:nth-child(even) { background: rgba(255, 255, 255, 0.05); }
  /* First child highlight */
  .zebra-list li:first-child { border-left: 3px solid #38bdf8; color: #38bdf8; font-weight: bold; }
  /* Exclude last child from border */
  .zebra-list li:not(:last-child) { border-bottom: 1px dashed rgba(255, 255, 255, 0.06); }
</style>

<ul class="zebra-list">
  <li>Row 1 (:first-child &amp; :nth-child(1))</li>
  <li>Row 2 (:nth-child(even))</li>
  <li>Row 3 (:nth-child(odd))</li>
  <li>Row 4 (:last-child)</li>
</ul>`,
            interactiveNote: ":nth-child(2n) or :nth-child(even) allows alternating zebra stripes on rows and grids."
          },
          {
            id: "css-sub-7-3",
            subtopicNumber: "7.3",
            title: "Pseudo-elements",
            tagBadges: ["::before", "::after", "content", "::placeholder", "::selection"],
            codeSnippet: `<style>
  .quote-card {
    position: relative;
    background: #1e1b4b;
    padding: 16px 20px;
    border-radius: 8px;
    color: #e0e7ff;
    font-size: 12px;
  }
  /* Injected quotation mark via ::before */
  .quote-card::before {
    content: "“";
    position: absolute;
    top: -8px;
    left: 8px;
    font-size: 38px;
    color: #6366f1;
    font-family: Georgia, serif;
    opacity: 0.6;
  }
  /* Styled text highlight selection */
  .quote-card *::selection, .quote-card::selection {
    background: #f43f5e;
    color: white;
  }
</style>

<div class="quote-card">
  Generated icons, decorative badges, and accents can be injected purely in CSS using ::before and ::after with the content property! (Try selecting this text to see ::selection).
</div>`,
            interactiveNote: "Pseudo-elements (double colon ::) create virtual elements without polluting HTML markup."
          },
          {
            id: "css-sub-7-4",
            subtopicNumber: "7.4",
            title: "Attribute Selectors",
            tagBadges: ["[attr]", '[attr="value"]', '[attr^="prefix"]', '[attr$="suffix"]', '[attr*="contains"]'],
            codeSnippet: `<style>
  .attr-demo a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 11px;
    text-decoration: none;
    margin-right: 6px;
  }
  /* Target secure links starting with https:// */
  a[href^="https://"] {
    background: rgba(16, 185, 129, 0.2);
    color: #6ee7b7;
    border: 1px solid #10b981;
  }
  /* Target PDF files ending in .pdf */
  a[href$=".pdf"] {
    background: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
    border: 1px solid #ef4444;
  }
</style>

<div class="attr-demo">
  <a href="https://example.com" target="_blank">&#128274; [href^="https://"] Secure Link</a>
  <a href="/downloads/manual.pdf">&#128196; [href$=".pdf"] PDF Document</a>
</div>`,
            interactiveNote: "[href^='val'] matches prefix, [href$='val'] matches suffix, [href*='val'] matches substring."
          }
        ]
      },
      {
        id: "css-topic-8",
        topicNumber: 8,
        title: "Transforms, Transitions & Animations",
        description: "Hardware-accelerated 2D/3D transformations, smooth CSS transitions, and continuous @keyframes loops.",
        subtopics: [
          {
            id: "css-sub-8-1",
            subtopicNumber: "8.1",
            title: "2D & 3D Transforms",
            tagBadges: ["translate()", "scale()", "rotate()", "skew()", "transform-origin", "perspective"],
            codeSnippet: `<style>
  .transform-row { display: flex; gap: 14px; justify-content: center; padding: 12px 0; }
  .transform-card {
    width: 75px; height: 55px;
    background: #4f46e5;
    border-radius: 6px;
    display: grid; place-items: center;
    color: white; font-size: 10px; font-weight: bold;
    transition: transform 0.3s;
  }
  .rotate-box:hover { transform: rotate(15deg); background: #06b6d4; }
  .scale-box:hover { transform: scale(1.15); background: #10b981; }
  .skew-box:hover { transform: skewX(-12deg); background: #f59e0b; }
</style>

<div class="transform-row">
  <div class="transform-card rotate-box">Hover<br>rotate(15deg)</div>
  <div class="transform-card scale-box">Hover<br>scale(1.15)</div>
  <div class="transform-card skew-box">Hover<br>skewX(-12deg)</div>
</div>`,
            interactiveNote: "Transforms run on GPU composite layers, ensuring buttery smooth 60fps animations without repainting."
          },
          {
            id: "css-sub-8-2",
            subtopicNumber: "8.2",
            title: "Transitions",
            tagBadges: ["transition-property", "transition-duration", "timing-function", "cubic-bezier", "transition Shorthand"],
            codeSnippet: `<style>
  .smooth-pill {
    width: 100%;
    background: #1e293b;
    border: 1px solid #475569;
    padding: 10px 14px;
    border-radius: 8px;
    color: #cbd5e1;
    font-size: 12px;
    cursor: pointer;
    /* Shorthand: property duration timing-function delay */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .smooth-pill:hover {
    background: linear-gradient(90deg, #6366f1, #38bdf8);
    color: white;
    padding-left: 24px;
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }
</style>

<div class="smooth-pill">
  &#9654; Hover over me: Smooth transition with custom cubic-bezier easing!
</div>`,
            interactiveNote: "Use transition shorthand: `transition: transform 0.3s ease, opacity 0.3s ease;`"
          },
          {
            id: "css-sub-8-3",
            subtopicNumber: "8.3",
            title: "Keyframe Animations",
            tagBadges: ["@keyframes", "animation-name", "animation-duration", "infinite", "alternate", "animation-fill-mode"],
            codeSnippet: `<style>
  @keyframes pulseGlow {
    0% {
      transform: scale(0.98);
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.6);
    }
    70% {
      transform: scale(1.02);
      box-shadow: 0 0 0 14px rgba(99, 102, 241, 0);
    }
    100% {
      transform: scale(0.98);
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
    }
  }

  .pulse-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #4f46e5;
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    animation: pulseGlow 2s infinite ease-in-out;
  }
</style>

<div style="text-align: center; padding: 12px;">
  <span class="pulse-badge">
    <span style="width: 8px; height: 8px; border-radius: 50%; background: #38bdf8;"></span>
    Continuous @keyframes Pulse Animation
  </span>
</div>`,
            interactiveNote: "@keyframes defines stages from 0% to 100%, controlled by duration, iteration-count, and direction."
          }
        ]
      },
      {
        id: "css-topic-9",
        topicNumber: 9,
        title: "Modern UI Effects, Responsive Design & Variables",
        description: "Glassmorphism, gradients, filters, CSS custom properties (variables), and responsive media query breakpoints.",
        subtopics: [
          {
            id: "css-sub-9-1",
            subtopicNumber: "9.1",
            title: "Gradients, Shadows & Filters",
            tagBadges: ["linear-gradient", "radial-gradient", "box-shadow", "filter: blur/drop-shadow", "backdrop-filter (Glassmorphism)"],
            codeSnippet: `<style>
  .glass-card-effect {
    /* Glassmorphism: semi-transparent background + backdrop-filter blur */
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    padding: 14px;
    border-radius: 12px;
    color: white;
  }
  .gradient-headline {
    background: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.15rem;
    font-weight: 800;
    margin-bottom: 4px;
  }
</style>

<div class="glass-card-effect">
  <div class="gradient-headline">Modern Glassmorphism Card</div>
  <p style="margin: 0; font-size: 11px; color: #cbd5e1;">
    Created using backdrop-filter: blur(12px), subtle white borders, and linear-gradient text clipping!
  </p>
</div>`,
            interactiveNote: "Glassmorphism combines translucent RGBA backgrounds with backdrop-filter: blur() and a 1px border."
          },
          {
            id: "css-sub-9-2",
            subtopicNumber: "9.2",
            title: "Responsive Design & Media Queries",
            tagBadges: ["@media (max-width)", "@media (min-width)", "Mobile-First", "Breakpoints (sm, md, lg)"],
            codeSnippet: `<style>
  .responsive-box {
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    /* Default: Mobile styling */
    background: #065f46;
    color: #a7f3d0;
  }

  /* Tablet breakpoint: 480px and wider */
  @media (min-width: 480px) {
    .responsive-box {
      background: #1e40af;
      color: #bfdbfe;
    }
  }

  /* Desktop breakpoint: 768px and wider */
  @media (min-width: 768px) {
    .responsive-box {
      background: #5b21b6;
      color: #ddd6fe;
    }
  }
</style>

<div class="responsive-box">
  Resize browser or preview window to see breakpoint color transitions!
</div>`,
            interactiveNote: "Mobile-first philosophy starts with base styling, then layers min-width media query enhancements."
          },
          {
            id: "css-sub-9-3",
            subtopicNumber: "9.3",
            title: "Native CSS Variables (Custom Properties)",
            tagBadges: ["--custom-property", ":root", "var(--name, fallback)", "Dynamic Theming"],
            codeSnippet: `<style>
  /* Define global tokens in :root */
  :root {
    --brand-primary: #6366f1;
    --brand-glow: rgba(99, 102, 241, 0.4);
    --card-radius: 10px;
  }

  .theme-box {
    background: #0f172a;
    border: 2px solid var(--brand-primary);
    border-radius: var(--card-radius);
    padding: 12px;
    color: white;
    box-shadow: 0 0 15px var(--brand-glow);
    font-size: 12px;
  }

  /* Local override */
  .emerald-override {
    --brand-primary: #10b981;
    --brand-glow: rgba(16, 185, 129, 0.4);
  }
</style>

<div class="theme-box">
  <strong>Native CSS Variables:</strong> Powered by <code style="color: #38bdf8;">var(--brand-primary)</code>.
</div>
<div class="theme-box emerald-override" style="margin-top: 8px;">
  <strong>Scoped Override:</strong> Same component with green local variable values!
</div>`,
            interactiveNote: "CSS Custom Properties cascade down the DOM and can even be updated dynamically with JavaScript."
          }
        ]
      }
    ]
  }
];

export const CSS3_INDEXED_TAGS = Array.from(
  new Set(
    CSS3_ROADMAP.flatMap((phase) =>
      phase.topics.flatMap((topic) =>
        topic.subtopics.flatMap((sub) => sub.tagBadges)
      )
    )
  )
).sort();
