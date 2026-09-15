export interface SubTopic {
  id: string;
  subtopicNumber: string;
  title: string;
  tagBadges: string[];
  codeSnippet: string;
  interactiveNote?: string;
}

export interface Topic {
  id: string;
  topicNumber: number;
  title: string;
  description: string;
  subtopics: SubTopic[];
}

export interface Phase {
  id: string;
  phaseNumber: number;
  title: string;
  badge: string;
  topics: Topic[];
}

export const HTML5_ROADMAP: Phase[] = [
  {
    id: "phase-1",
    phaseNumber: 1,
    title: "HTML5 Core Fundamentals",
    badge: "PHASE 1",
    topics: [
      {
        id: "topic-1",
        topicNumber: 1,
        title: "Document Structure & Core Mechanics",
        description: "Foundational architecture, root document nodes, and nesting rules of modern HTML5 documents.",
        subtopics: [
          {
            id: "sub-1-1",
            subtopicNumber: "1.1",
            title: "Web Architecture Basics",
            tagBadges: ["Client", "Server", "HTTP/HTTPS", "DNS"],
            codeSnippet: `<!--
  WEB ARCHITECTURE CYCLE:
  1. Client: User enters URL in browser (e.g., https://example.com)
  2. DNS Lookup: Domain name translates to Server IP address
  3. HTTP/HTTPS Request: Browser sends GET request over TCP/TLS
  4. Server Response: Server returns HTML, CSS, JS payload (Status 200 OK)
  5. Critical Rendering Path: DOM Tree + CSSOM Tree -> Render Tree -> Layout -> Paint
-->
<div class="web-architecture-flow">
  <div class="node client">
    <strong>Client (Browser)</strong>
    <p>Sends HTTP GET Request</p>
  </div>
  <div class="arrow">DNS Resolution &rarr;</div>
  <div class="node server">
    <strong>Web Server</strong>
    <p>Returns 200 OK + HTML Document</p>
  </div>
</div>`,
            interactiveNote: "Represents how the browser requests, fetches, and renders HTML over the network."
          },
          {
            id: "sub-1-2",
            subtopicNumber: "1.2",
            title: "HTML Document Boilerplate",
            tagBadges: ["<!DOCTYPE html>", "<html>", "<head>", "<body>"],
            codeSnippet: `<!DOCTYPE html> <!-- Informs browser of modern HTML5 rendering standard -->
<html lang="en"> <!-- Root element; declares English document language -->
  <head> <!-- Container for document metadata not visible on the page -->
    <meta charset="UTF-8"> <!-- Defines UTF-8 character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Enables mobile responsiveness -->
    <title>My First HTML5 Document</title> <!-- Document tab title -->
  </head>
  <body> <!-- Visible content container for user interaction -->
    <h1>Welcome to Modern Web Dev!</h1>
    <p>Every valid HTML document starts with this standardized blueprint.</p>
  </body>
</html>`,
            interactiveNote: "The complete, standardized HTML5 root skeleton that powers all modern web pages."
          },
          {
            id: "sub-1-3",
            subtopicNumber: "1.3",
            title: "Core Syntax Rules",
            tagBadges: ["Opening/Closing", "Self-closing", "Attributes", "Nesting"],
            codeSnippet: `<!-- 1. Normal tags with Opening, Content, and Closing tags -->
<p class="intro-text">Standard paragraph with an opening &amp; closing tag.</p>

<!-- 2. Self-closing (void) elements: No separate closing tag required -->
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=160&q=80" alt="Microchip circuit" width="160" height="100" />
<br /> <!-- Line break void tag -->
<input type="text" placeholder="Self-closing input tag" value="HTML5 Validated" />

<!-- 3. Proper nesting hierarchy (Last In, First Out) -->
<div class="parent-box">
  <p>Parent &gt; Child: <strong>Correctly nested bold text</strong> inside a paragraph.</p>
</div>`,
            interactiveNote: "Shows opening/closing tags, self-closing void elements, attribute key-value pairs, and proper nesting."
          }
        ]
      },
      {
        id: "topic-2",
        topicNumber: 2,
        title: "Content Hierarchy, Formatting & Semantics",
        description: "Expressive typographic hierarchy, semantic text tags, and hyperlink anchors.",
        subtopics: [
          {
            id: "sub-2-1",
            subtopicNumber: "2.1",
            title: "Text Hierarchy",
            tagBadges: ["<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>", "<p>", "<hr>"],
            codeSnippet: `<!-- Heading tags establish semantic document outlines (h1 highest, h6 lowest) -->
<h1>Heading 1: Primary Page Landmark</h1>
<h2>Heading 2: Major Section Title</h2>
<h3>Heading 3: Sub-section Heading</h3>
<h4>Heading 4: Component Header</h4>
<h5>Heading 5: Minor Heading</h5>
<h6>Heading 6: Fine-print Heading</h6>

<!-- Paragraph tag for standard block text copy -->
<p>Paragraph element providing structured narrative body copy with comfortable line-height.</p>

<!-- Horizontal Rule tag for thematic thematic breaks/dividers between sections -->
<hr />
<p>Content following the thematic break rule.</p>`,
            interactiveNote: "Demonstrates H1-H6 heading scales, paragraphs, and thematic horizontal dividers."
          },
          {
            id: "sub-2-2",
            subtopicNumber: "2.2",
            title: "Semantic Text Formatting",
            tagBadges: ["<strong>", "<em>", "<b>", "<i>", "<mark>", "<small>", "<del>", "<ins>", "<sub>", "<sup>"],
            codeSnippet: `<p>
  <!-- strong: Serious importance / urgent weight -->
  <strong>Strong emphasis:</strong> High importance for screen readers.<br />

  <!-- em: Vocal stress emphasis that shifts meaning -->
  <em>Emphasized text:</em> Conveys tone shift.<br />

  <!-- b: Stylistic bolding without extra semantic importance -->
  <b>Bold tag:</b> Visual drawing of attention without semantic weight.<br />

  <!-- i: Alternate voice or technical terminology -->
  <i>Italic tag:</i> Idiomatic terms, foreign phrases, thoughts.<br />

  <!-- mark: Highlighted or flagged relevance -->
  <mark>Highlighted mark:</mark> Represents search match or relevant excerpt.<br />

  <!-- small: Side-comments, legal disclaimers, copyrights -->
  <small>Small text: Terms of Service &amp; Legal Copyright &copy; 2026</small><br />

  <!-- del & ins: Editorial revisions / changelogs -->
  Price: <del>$99.00</del> <ins>$49.00</ins> (Sale price update)<br />

  <!-- sub & sup: Scientific, mathematical, and ordinal notation -->
  Chemical formula: H<sub>2</sub>O | Mathematical exponent: E = mc<sup>2</sup>
</p>`,
            interactiveNote: "All 10 semantic and typographic inline formatting elements compared side-by-side."
          },
          {
            id: "sub-2-3",
            subtopicNumber: "2.3",
            title: "Links & Anchor Elements",
            tagBadges: ["<a>", "href", "target", "download", "#id anchors"],
            codeSnippet: `<!-- External link opening securely in a new tab using target="_blank" and rel="noopener" -->
<p>
  <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
    External Link to MDN Web Docs &rarr;
  </a>
</p>

<!-- In-page anchor linking to a specific section by #id -->
<p>
  <a href="#demo-target-section">Jump to Internal #demo-target-section &darr;</a>
</p>

<!-- Download link prompting immediate file download -->
<p>
  <a href="data:text/plain;charset=utf-8,HTML5%20CheatSheet" download="cheatsheet.txt">
    Download Sample Spec (download attribute) &#128190;
  </a>
</p>

<!-- Target anchor section destination -->
<div id="demo-target-section" style="padding: 10px; background: rgba(99,102,241,0.15); border-left: 3px solid #6366f1; border-radius: 4px; margin-top: 10px;">
  <strong>Target Section Reached:</strong> Successfully jumped to #demo-target-section!
</div>`,
            interactiveNote: "External links, target blank security best practices, and internal ID smooth scrolling."
          }
        ]
      },
      {
        id: "topic-3",
        topicNumber: 3,
        title: "Tables, Lists & Data Presentation",
        description: "Structured data lists, tabular datasets, responsive image formats, and native media players.",
        subtopics: [
          {
            id: "sub-3-1",
            subtopicNumber: "3.1",
            title: "Lists & Quotations",
            tagBadges: ["<ul>", "<ol>", "<li>", "<dl>", "<dt>", "<dd>", "<blockquote>", "<q>", "<abbr>", "<cite>"],
            codeSnippet: `<!-- 1. Unordered List (Bullet points) -->
<ul>
  <li>HyperText Markup Language</li>
  <li>Cascading Style Sheets</li>
</ul>

<!-- 2. Ordered List (Numbered sequences) -->
<ol start="1">
  <li>Parse HTML</li>
  <li>Construct DOM</li>
</ol>

<!-- 3. Description List (Key-Value terms and descriptions) -->
<dl>
  <dt><strong>API</strong></dt>
  <dd>Application Programming Interface definition.</dd>
</dl>

<!-- 4. Blockquote with citation source -->
<blockquote cite="https://w3.org">
  "The power of the Web is in its universality."
</blockquote>
<p><cite>Tim Berners-Lee</cite> on <abbr title="World Wide Web">WWW</abbr> standards.</p>`,
            interactiveNote: "Unordered, ordered, and definition lists combined with semantic quotations and abbreviations."
          },
          {
            id: "sub-3-2",
            subtopicNumber: "3.2",
            title: "Images in Web",
            tagBadges: ["<img>", "src", "alt", "width", "height", "<picture>", "<source>"],
            codeSnippet: `<!-- Standard accessible responsive image with alt description & explicit dimensions -->
<img
  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320&q=80"
  alt="Developer writing modern code on workstation"
  width="240"
  height="150"
  loading="lazy"
  style="border-radius: 6px; object-fit: cover; display: block; margin-bottom: 12px;"
/>

<!-- Art-direction & format negotiation with <picture> and <source> -->
<picture>
  <!-- Serve WebP/AVIF to modern browsers -->
  <source srcset="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80" media="(min-width: 600px)">
  <!-- Fallback source for smaller viewports or legacy clients -->
  <img
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80"
    alt="Responsive picture element fallback"
    width="180"
    height="110"
    style="border-radius: 6px; object-fit: cover;"
  />
</picture>`,
            interactiveNote: "Demonstrates image dimensions for layout stability, accessibility alt tags, and <picture> multi-source fallback."
          },
          {
            id: "sub-3-3",
            subtopicNumber: "3.3",
            title: "Data Tables",
            tagBadges: ["<table>", "<thead>", "<tbody>", "<tfoot>", "<tr>", "<th>", "<td>", "colspan", "rowspan"],
            codeSnippet: `<table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
  <!-- Header row grouping with columnar headings -->
  <thead>
    <tr style="background: rgba(99,102,241,0.2); border-bottom: 1px solid rgba(255,255,255,0.15);">
      <th style="padding: 8px;">Feature</th>
      <th style="padding: 8px;">Category</th>
      <th style="padding: 8px;">Status</th>
    </tr>
  </thead>
  <!-- Body rows containing data cells -->
  <tbody>
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
      <td rowspan="2" style="padding: 8px; vertical-align: top; border-right: 1px solid rgba(255,255,255,0.1);">Canvas 2D</td>
      <td style="padding: 8px;">Graphics</td>
      <td style="padding: 8px; color: #10b981;">Supported</td>
    </tr>
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
      <td style="padding: 8px;">Media</td>
      <td style="padding: 8px; color: #10b981;">Hardware Accel</td>
    </tr>
  </tbody>
  <!-- Table footer summarizing results across colspan -->
  <tfoot>
    <tr style="background: rgba(255,255,255,0.05);">
      <td colspan="3" style="padding: 6px 8px; font-style: italic; color: #94a3b8;">
        Total Engine Specifications: 2 Verified Modules
      </td>
    </tr>
  </tfoot>
</table>`,
            interactiveNote: "Full semantic table hierarchy featuring thead, tbody, tfoot, colspan, and rowspan cell spanning."
          },
          {
            id: "sub-3-4",
            subtopicNumber: "3.4",
            title: "Audio & Video Elements",
            tagBadges: ["<video>", "<audio>", "<source>", "<iframe>", "controls", "autoplay", "loop", "muted", "poster"],
            codeSnippet: `<!-- HTML5 Native Video player with controls, muted, loop, and poster image -->
<video
  controls
  muted
  playsinline
  width="240"
  poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=320&q=80"
  style="border-radius: 6px; background: #000; display: block; margin-bottom: 8px;"
>
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video>

<!-- HTML5 Native Audio player with playback controls -->
<audio controls style="width: 100%; max-width: 280px; margin-bottom: 8px;">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>

<!-- Sandboxed embed iframe with strict sandbox security parameters -->
<iframe
  srcdoc="<p style='color:#a5b4fc;font-family:sans-serif;margin:0;font-size:12px;'>Sandboxed Iframe Document Loaded &#10004;</p>"
  title="Safe preview frame"
  width="100%"
  height="45"
  style="border: 1px dashed rgba(255,255,255,0.2); border-radius: 4px; padding: 4px;"
></iframe>`,
            interactiveNote: "Native HTML5 multimedia elements with source fallbacks and secure sandboxed iframe embeds."
          }
        ]
      },
      {
        id: "topic-4",
        topicNumber: 4,
        title: "Forms, Inputs & User Interactivity",
        description: "Standardized forms, input validation constraints, selectors, and interactive form controls.",
        subtopics: [
          {
            id: "sub-4-1",
            subtopicNumber: "4.1",
            title: "Form Structure",
            tagBadges: ["<form>", "action", "method GET/POST", "<label>", "for"],
            codeSnippet: `<!-- Form container with target action and POST/GET submission method -->
<form action="/api/submit" method="POST" onsubmit="event.preventDefault(); alert('Form submitted!');">
  <!-- Explicit label association using the 'for' attribute matching input 'id' -->
  <div style="margin-bottom: 8px;">
    <label for="username-field" style="display: block; font-size: 12px; margin-bottom: 4px; color: #cbd5e1;">
      Username (Required)
    </label>
    <input
      type="text"
      id="username-field"
      name="username"
      required
      placeholder="e.g. dev_engineer"
      style="width: 100%; padding: 6px 10px; background: #1e293b; border: 1px solid #475569; color: #fff; border-radius: 4px;"
    />
  </div>
  <button type="submit" style="background: #6366f1; color: #fff; padding: 6px 14px; border: none; border-radius: 4px; cursor: pointer;">
    Submit Form
  </button>
</form>`,
            interactiveNote: "Standard form with label linkage via 'for' and 'id' attributes for accessibility."
          },
          {
            id: "sub-4-2",
            subtopicNumber: "4.2",
            title: "Input Control Types",
            tagBadges: [
              "<input>", "text", "password", "email", "number", "tel",
              "radio", "checkbox", "date", "time", "color", "file", "range", "hidden"
            ],
            codeSnippet: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;">
  <!-- Text, Password, Email, Number, Tel -->
  <input type="text" placeholder="type='text'" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  <input type="password" value="secret" placeholder="password" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  <input type="email" placeholder="dev@domain.com" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  <input type="number" min="0" max="100" value="42" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  <input type="tel" placeholder="+1-555-0199" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  
  <!-- Date & Time Pickers -->
  <input type="date" value="2026-09-15" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  <input type="time" value="14:30" style="padding: 4px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
  
  <!-- Color & Range Sliders -->
  <div style="display: flex; align-items: center; gap: 6px;">
    <input type="color" value="#6366f1" style="height: 28px; width: 36px; border: none; background: none;" />
    <input type="range" min="1" max="100" value="75" style="flex: 1;" />
  </div>

  <!-- Radio & Checkbox Controls -->
  <div style="display: flex; gap: 8px; align-items: center; grid-column: span 2;">
    <label><input type="radio" name="plan" checked /> Pro</label>
    <label><input type="radio" name="plan" /> Team</label>
    <label><input type="checkbox" checked /> Active License</label>
  </div>

  <!-- File Upload & Hidden Token -->
  <input type="file" style="font-size: 11px; grid-column: span 2;" />
  <input type="hidden" name="csrfToken" value="abc123token" />
</div>`,
            interactiveNote: "All 14 native input types rendered interactively in a compact grid."
          },
          {
            id: "sub-4-3",
            subtopicNumber: "4.3",
            title: "Selection & Multi-line Controls",
            tagBadges: ["<select>", "<option>", "<optgroup>", "<textarea>", "<datalist>"],
            codeSnippet: `<!-- Grouped dropdown selection using optgroup and option -->
<label for="framework-picker" style="font-size: 12px; display: block; margin-bottom: 2px;">Framework Select:</label>
<select id="framework-picker" style="width: 100%; padding: 6px; background: #1e293b; border: 1px solid #475569; color: #fff; border-radius: 4px; margin-bottom: 8px;">
  <optgroup label="Modern JavaScript">
    <option value="react">React 19</option>
    <option value="vue">Vue 3</option>
  </optgroup>
  <optgroup label="Compiled Languages">
    <option value="typescript">TypeScript 5.8</option>
  </optgroup>
</select>

<!-- Datalist input with auto-complete suggestions -->
<label for="browser-choice" style="font-size: 12px; display: block; margin-bottom: 2px;">AutoComplete Datalist:</label>
<input list="browsers" id="browser-choice" placeholder="Type 'Ch' or 'Fi'..." style="width: 100%; padding: 6px; background: #1e293b; border: 1px solid #475569; color: #fff; border-radius: 4px; margin-bottom: 8px;" />
<datalist id="browsers">
  <option value="Chrome" />
  <option value="Firefox" />
  <option value="Safari" />
  <option value="Edge" />
</datalist>

<!-- Multi-line textarea for paragraphs and code notes -->
<textarea rows="2" placeholder="Multi-line textarea input..." style="width: 100%; padding: 6px; background: #1e293b; border: 1px solid #475569; color: #fff; border-radius: 4px; resize: vertical;"></textarea>`,
            interactiveNote: "Dropdown selectors, categorized optgroups, auto-complete datalists, and multi-line textareas."
          },
          {
            id: "sub-4-4",
            subtopicNumber: "4.4",
            title: "Validation, Constraints & Buttons",
            tagBadges: [
              "required", "placeholder", "value", "disabled", "readonly",
              "min", "max", "step", "pattern", "<button> (submit, reset, button)"
            ],
            codeSnippet: `<form onsubmit="event.preventDefault(); alert('Validation passed successfully!');" style="font-size: 12px;">
  <!-- Pattern constraint: Regex for 3-letter currency code (e.g. USD) -->
  <input
    type="text"
    placeholder="Currency (e.g. USD)"
    pattern="[A-Z]{3}"
    required
    title="Must be 3 uppercase letters"
    style="width: 100%; padding: 6px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px; margin-bottom: 6px;"
  />

  <!-- Readonly & Disabled States -->
  <div style="display: flex; gap: 6px; margin-bottom: 8px;">
    <input type="text" value="Readonly value" readonly style="flex:1; padding: 4px; background: #0f172a; border: 1px solid #334155; color: #94a3b8; border-radius: 4px;" />
    <input type="text" value="Disabled input" disabled style="flex:1; padding: 4px; background: #0f172a; opacity: 0.5; border: 1px solid #334155; color: #94a3b8; border-radius: 4px;" />
  </div>

  <!-- Submit, Reset, and standard Button types -->
  <div style="display: flex; gap: 6px;">
    <button type="submit" style="background: #10b981; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
      Submit Valid
    </button>
    <button type="reset" style="background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
      Reset
    </button>
    <button type="button" onclick="alert('Generic button click!');" style="background: #475569; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
      type="button"
    </button>
  </div>
</form>`,
            interactiveNote: "Regex patterns, native browser constraint validation popups, and the three distinct button types."
          }
        ]
      },
      {
        id: "topic-5",
        topicNumber: 5,
        title: "HTML5 Semantic Web & Layout Standards",
        description: "Modern structural semantic landmarks vs non-semantic generic containers.",
        subtopics: [
          {
            id: "sub-5-1",
            subtopicNumber: "5.1",
            title: "Non-Semantic Container Elements",
            tagBadges: ["<div>", "<span>"],
            codeSnippet: `<!-- <div>: Generic block-level container for CSS layout styling and positioning -->
<div style="padding: 12px; background: rgba(30, 41, 59, 0.7); border: 1px dashed rgba(255,255,255,0.2); border-radius: 6px; margin-bottom: 8px;">
  <p style="margin: 0;">
    The &lt;div&gt; element is a block-level container with no semantic meaning.
    <!-- <span>: Generic inline container for targeting words inside text -->
    Inside it, we can wrap words with a <span style="color: #38bdf8; font-weight: bold; background: rgba(56,189,248,0.1); padding: 2px 6px; border-radius: 4px;">&lt;span&gt; inline tag</span> to style them.
  </p>
</div>`,
            interactiveNote: "Shows block-level generic styling with <div> and inline phrasing targets with <span>."
          },
          {
            id: "sub-5-2",
            subtopicNumber: "5.2",
            title: "Semantic Page Layout Elements",
            tagBadges: ["<header>", "<nav>", "<main>", "<section>", "<article>", "<aside>", "<footer>"],
            codeSnippet: `<!-- Full semantic document architecture for search engines and accessibility -->
<div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px;">
  <header style="background: rgba(99,102,241,0.2); border: 1px solid rgba(99,102,241,0.4); padding: 6px; border-radius: 4px;">
    <strong>&lt;header&gt;</strong> App Banner &amp; Branding
    <nav style="margin-top: 2px; color: #a5b4fc;">&lt;nav&gt; Home | Docs | API</nav>
  </header>

  <div style="display: flex; gap: 4px;">
    <main style="flex: 2; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4); padding: 6px; border-radius: 4px;">
      <strong>&lt;main&gt;</strong> Primary Page Content
      <section style="margin-top: 4px; padding: 4px; background: rgba(0,0,0,0.2); border-radius: 2px;">
        <strong>&lt;section&gt;</strong> Thematic Topic Area
        <article style="margin-top: 2px; color: #6ee7b7;">&lt;article&gt; Self-contained syndicatable article.</article>
      </section>
    </main>

    <aside style="flex: 1; background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.4); padding: 6px; border-radius: 4px;">
      <strong>&lt;aside&gt;</strong> Related Sidebar Links
    </aside>
  </div>

  <footer style="background: rgba(148,163,184,0.15); border: 1px solid rgba(148,163,184,0.3); padding: 6px; border-radius: 4px;">
    <strong>&lt;footer&gt;</strong> Copyright, Terms &amp; Author Disclaimers
  </footer>
</div>`,
            interactiveNote: "The complete HTML5 semantic layout blueprint recommended for modern accessibility (WCAG)."
          },
          {
            id: "sub-5-3",
            subtopicNumber: "5.3",
            title: "Figures, Time & Address Standards",
            tagBadges: ["<figure>", "<figcaption>", "<time>", "<address>"],
            codeSnippet: `<!-- Self-contained media figure with associated caption -->
<figure style="margin: 0 0 10px 0; padding: 8px; background: rgba(30, 41, 59, 0.6); border-radius: 6px; border: 1px solid rgba(255,255,255,0.08);">
  <img
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=240&q=80"
    alt="Developer coding setup"
    style="width: 100%; max-width: 200px; height: 90px; object-fit: cover; border-radius: 4px;"
  />
  <figcaption style="font-size: 11px; color: #94a3b8; margin-top: 4px;">
    Figure 1: Workstation initialized on <time datetime="2026-09-15">September 15, 2026</time>.
  </figcaption>
</figure>

<!-- Author contact information -->
<address style="font-size: 11px; font-style: normal; color: #cbd5e1; border-left: 2px solid #38bdf8; padding-left: 8px;">
  Written by Lead Architect<br />
  Contact: <a href="mailto:dev@webdevhub.io" style="color: #38bdf8;">dev@webdevhub.io</a><br />
  Tokyo &amp; San Francisco Tech Hub
</address>`,
            interactiveNote: "Semantically rich figure captions, machine-readable datetime stamps, and author address info."
          }
        ]
      }
    ]
  },
  {
    id: "phase-2",
    phaseNumber: 2,
    title: "Advanced HTML5 & Modern Web APIs",
    badge: "PHASE 2",
    topics: [
      {
        id: "topic-6",
        topicNumber: 6,
        title: "Embedded Media & Modern Graphics",
        description: "Declarative vector graphics with SVG and procedural pixel manipulation with HTML5 Canvas.",
        subtopics: [
          {
            id: "sub-6-1",
            subtopicNumber: "6.1",
            title: "Vector Graphics with SVG",
            tagBadges: ["<svg>", "<circle>", "<rect>", "<line>", "<path>"],
            codeSnippet: `<!-- Resolution-independent Scalable Vector Graphics (SVG) -->
<svg width="100%" height="110" viewBox="0 0 320 110" style="background: #0f172a; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
  <!-- SVG Rect with rounded corners -->
  <rect x="15" y="20" width="70" height="70" rx="10" fill="#6366f1" opacity="0.8" />
  
  <!-- SVG Circle with stroke border -->
  <circle cx="140" cy="55" r="32" fill="#06b6d4" stroke="#ffffff" stroke-width="2" />
  
  <!-- SVG Line -->
  <line x1="190" y1="20" x2="215" y2="90" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
  
  <!-- SVG Path (Heart shape geometry) -->
  <path d="M 270 40 C 270 25, 245 25, 245 45 C 245 65, 270 85, 270 85 C 270 85, 295 65, 295 45 C 295 25, 270 25, 270 40 Z" fill="#ec4899" />
</svg>`,
            interactiveNote: "Resolution-independent vector primitives: rect, circle, line, and bezier curved path."
          },
          {
            id: "sub-6-2",
            subtopicNumber: "6.2",
            title: "Dynamic Graphics with Canvas",
            tagBadges: ["<canvas>"],
            codeSnippet: `<!-- HTML5 2D Canvas element with JavaScript script rendering -->
<canvas id="demo-canvas" width="280" height="100" style="background: #020617; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); display: block;"></canvas>

<script>
  // Access Canvas 2D rendering context
  const canvas = document.getElementById('demo-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    
    // Draw animated gradient background
    const grad = ctx.createLinearGradient(0, 0, 280, 100);
    grad.addColorStop(0, '#4f46e5');
    grad.addColorStop(1, '#06b6d4');
    ctx.fillStyle = grad;
    ctx.fillRect(10, 10, 260, 80);
    
    // Draw procedural particle circle
    ctx.beginPath();
    ctx.arc(60, 50, 22, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Render Canvas text
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Interactive 2D Canvas', 96, 55);
  }
<\/script>`,
            interactiveNote: "Immediate-mode raster graphics rendering shapes, gradients, and text in real-time."
          }
        ]
      },
      {
        id: "topic-7",
        topicNumber: 7,
        title: "Meta Data, SEO & Document Head Strategy",
        description: "Search engine crawler optimization, social Open Graph protocols, and external resource linking.",
        subtopics: [
          {
            id: "sub-7-1",
            subtopicNumber: "7.1",
            title: "Metadata Configuration",
            tagBadges: ["<meta charset>", "<meta viewport>", "<meta description>"],
            codeSnippet: `<head>
  <!-- Character set standard encoding for all international alphabets & emoji -->
  <meta charset="UTF-8">

  <!-- Responsive viewport configuration for mobile screen adaptability -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

  <!-- SEO description indexed by Google and modern search engines -->
  <meta name="description" content="Comprehensive interactive documentation for modern HTML5, semantic tags, and Web APIs.">

  <!-- Search engine indexing bot directives -->
  <meta name="robots" content="index, follow">
</head>

<!-- Visual Head Inspector Box -->
<div style="padding: 10px; background: #1e293b; border-left: 3px solid #10b981; border-radius: 4px; font-family: monospace; font-size: 11px;">
  <span style="color: #6ee7b7;">&lt;meta charset="UTF-8"&gt;</span> &rarr; Active<br />
  <span style="color: #6ee7b7;">&lt;meta name="viewport"&gt;</span> &rarr; Mobile Scale 1.0<br />
  <span style="color: #6ee7b7;">&lt;meta name="description"&gt;</span> &rarr; High SEO Ranking
</div>`,
            interactiveNote: "Core metadata tags placed inside <head> to guarantee search indexing and responsive rendering."
          },
          {
            id: "sub-7-2",
            subtopicNumber: "7.2",
            title: "Open Graph & External Assets",
            tagBadges: ["<title>", "<link rel=\"icon\">", "<link rel=\"stylesheet\">", "<script>", "<meta property=\"og:...\">"],
            codeSnippet: `<head>
  <!-- Browser tab title -->
  <title>Developer Hub | Master HTML5</title>

  <!-- Favicon link -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- External Stylesheet linking -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />

  <!-- Open Graph Protocol for rich social media cards (Twitter/X, Discord, LinkedIn) -->
  <meta property="og:title" content="WebDev Hub Documentation" />
  <meta property="og:description" content="Interactive HTML5 roadmap with live playgrounds." />
  <meta property="og:image" content="https://example.com/banner.png" />
  <meta property="og:type" content="website" />

  <!-- External JavaScript module with deferred loading -->
  <script type="module" src="/app.js" defer><\/script>
</head>

<div style="padding: 8px; background: rgba(99,102,241,0.15); border: 1px solid #6366f1; border-radius: 6px; font-size: 12px;">
  <strong>Social Share Card Preview:</strong>
  <p style="margin: 4px 0 0; color: #a5b4fc;">&#128038; Twitter / LinkedIn will render rich card preview with title, description, and thumbnail banner!</p>
</div>`,
            interactiveNote: "Asset loading tags and social Open Graph metadata for rich link previews."
          }
        ]
      },
      {
        id: "topic-8",
        topicNumber: 8,
        title: "HTML5 Native Web APIs & Storage Mechanics",
        description: "Browser client-side storage mechanisms, Geolocation API, and native drag-and-drop interfaces.",
        subtopics: [
          {
            id: "sub-8-1",
            subtopicNumber: "8.1",
            title: "Client-Side Web Storage",
            tagBadges: ["localStorage", "sessionStorage"],
            codeSnippet: `<div style="font-size: 12px;">
  <p style="margin-top:0;"><strong>Native Web Storage Demo:</strong></p>
  <div style="display: flex; gap: 6px; margin-bottom: 8px;">
    <input id="storage-input" type="text" placeholder="Enter key-value string" style="flex: 1; padding: 5px 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 4px;" />
    <button onclick="saveItem()" style="background: #6366f1; color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer;">Save</button>
    <button onclick="readItem()" style="background: #10b981; color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer;">Read</button>
  </div>
  <div id="storage-output" style="padding: 6px; background: #0f172a; border-radius: 4px; color: #94a3b8; font-family: monospace; font-size: 11px;">
    Stored: (Click 'Read' or 'Save')
  </div>
</div>

<script>
  function saveItem() {
    const val = document.getElementById('storage-input').value;
    localStorage.setItem('webdev_hub_demo_key', val || 'HTML5 Rocks!');
    document.getElementById('storage-output').textContent = 'Saved to localStorage: "' + (val || 'HTML5 Rocks!') + '"';
  }
  function readItem() {
    const val = localStorage.getItem('webdev_hub_demo_key') || 'No value saved yet.';
    document.getElementById('storage-output').textContent = 'Retrieved: "' + val + '"';
  }
<\/script>`,
            interactiveNote: "Interactive live demonstration of window.localStorage persistent key-value caching."
          },
          {
            id: "sub-8-2",
            subtopicNumber: "8.2",
            title: "Native Browser APIs",
            tagBadges: ["Geolocation", "draggable", "Drag & Drop"],
            codeSnippet: `<div style="font-size: 12px;">
  <!-- Native Drag and Drop Element with draggable="true" -->
  <div style="display: flex; gap: 10px; margin-bottom: 12px;">
    <div
      id="drag-item"
      draggable="true"
      ondragstart="event.dataTransfer.setData('text/plain', 'Draggable HTML5 Item')"
      style="padding: 8px 12px; background: #6366f1; color: white; border-radius: 4px; cursor: grab;"
    >
      &#9776; Drag Me
    </div>

    <div
      id="drop-target"
      ondragover="event.preventDefault(); this.style.borderColor = '#10b981';"
      ondragleave="this.style.borderColor = '#475569';"
      ondrop="event.preventDefault(); this.innerHTML = '&#10004; Dropped: ' + event.dataTransfer.getData('text/plain'); this.style.borderColor = '#10b981'; this.style.background = 'rgba(16,185,129,0.2)';"
      style="flex: 1; padding: 8px; border: 2px dashed #475569; border-radius: 4px; text-align: center; color: #94a3b8;"
    >
      Drop Zone
    </div>
  </div>

  <!-- Geolocation API trigger -->
  <button onclick="getGeo()" style="background: #0ea5e9; color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer;">
    &#127758; Query Geolocation Coordinates
  </button>
  <span id="geo-status" style="margin-left: 8px; color: #cbd5e1; font-size: 11px;"></span>
</div>

<script>
  function getGeo() {
    const status = document.getElementById('geo-status');
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
      return;
    }
    status.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        status.textContent = 'Lat: ' + pos.coords.latitude.toFixed(2) + ', Lon: ' + pos.coords.longitude.toFixed(2);
      },
      (err) => {
        status.textContent = 'Demo Mode (Permission granted or simulated)';
      }
    );
  }
<\/script>`,
            interactiveNote: "Native HTML5 drag-and-drop event handlers with interactive drop zone and Geolocation trigger."
          }
        ]
      }
    ]
  }
];

// Helper list of all indexed tags for the search engine
export const ALL_INDEXED_TAGS = Array.from(
  new Set(
    HTML5_ROADMAP.flatMap((phase) =>
      phase.topics.flatMap((topic) =>
        topic.subtopics.flatMap((sub) => sub.tagBadges)
      )
    )
  )
).sort();
