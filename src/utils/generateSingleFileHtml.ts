import { Phase } from "../data/html5Roadmap";
import { HTML5_ROADMAP, ALL_INDEXED_TAGS } from "../data/html5Roadmap";
import { CSS3_ROADMAP, CSS3_INDEXED_TAGS } from "../data/css3Roadmap";
import { JS_ROADMAP, JS_INDEXED_TAGS } from "../data/jsRoadmap";
import { TabType } from "../components/Navbar";

export function generateSingleFileHtml(selectedTab: TabType = "HTML5"): string {
  let targetRoadmap: Phase[] = HTML5_ROADMAP;
  let targetTags: string[] = ALL_INDEXED_TAGS;
  let techName = "HTML5";

  if (selectedTab === "CSS3") {
    targetRoadmap = CSS3_ROADMAP;
    targetTags = CSS3_INDEXED_TAGS;
    techName = "CSS3";
  } else if (selectedTab === "JavaScript") {
    targetRoadmap = JS_ROADMAP;
    targetTags = JS_INDEXED_TAGS;
    techName = "JavaScript";
  }

  // Generate HTML markup for all phases, topics, subtopics
  const phasesHtml = targetRoadmap.map((phase) => {
    const topicsHtml = phase.topics.map((topic) => {
      const subtopicsHtml = topic.subtopics.map((sub) => {
        const tagBadgesHtml = sub.tagBadges
          .map((tag) => `<button class="tag-pill" onclick="searchTag('${tag.replace(/'/g, "\\'")}')">${tag}</button>`)
          .join(" ");

        const escapedCode = sub.codeSnippet
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");

        return `
          <div class="subtopic-card" id="${sub.id}">
            <div class="subtopic-header">
              <div class="subtopic-badge">${sub.subtopicNumber}</div>
              <h4 class="subtopic-title">${sub.title}</h4>
            </div>
            <div class="tag-list">
              <span class="tag-label">Tags &amp; Concepts:</span>
              ${tagBadgesHtml}
            </div>
            <div class="sandbox-grid">
              <div class="code-box">
                <div class="code-header">
                  <div class="traffic-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                    <span class="code-title">Source Code</span>
                  </div>
                  <button class="copy-btn" onclick="copySnippet(this, '${sub.id}-code')">Copy</button>
                </div>
                <pre class="code-pre"><code id="${sub.id}-code">${escapedCode}</code></pre>
              </div>
              <div class="preview-box">
                <div class="preview-header">
                  <span class="live-dot"></span> Live Output Sandbox
                </div>
                <iframe class="sandbox-iframe" id="${sub.id}-frame" sandbox="allow-scripts allow-forms allow-modals"></iframe>
              </div>
            </div>
            ${sub.interactiveNote ? `<div class="subtopic-note"><strong>Note:</strong> ${sub.interactiveNote}</div>` : ""}
          </div>
        `;
      }).join("\n");

      return `
        <section class="topic-section" id="${topic.id}">
          <div class="topic-header">
            <div class="topic-number">Topic ${topic.topicNumber}</div>
            <h3 class="topic-title">${topic.title}</h3>
            <p class="topic-desc">${topic.description}</p>
          </div>
          <div class="subtopics-container">
            ${subtopicsHtml}
          </div>
        </section>
      `;
    }).join("\n");

    return `
      <div class="phase-container" id="${phase.id}">
        <div class="phase-header">
          <span class="phase-badge">${phase.badge}</span>
          <h2 class="phase-title">${phase.title}</h2>
        </div>
        ${topicsHtml}
      </div>
    `;
  }).join("\n");

  const popularTagsPills = targetTags.slice(0, 12).map((tag) => `<button class="popular-tag" onclick="searchTag('${tag}')">${tag}</button>`).join(" ");

  // Prepare iframe loader data
  const snippetData = JSON.stringify(
    targetRoadmap.flatMap((p) =>
      p.topics.flatMap((t) =>
        t.subtopics.map((s) => ({ id: s.id, code: s.codeSnippet }))
      )
    )
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WebDev Hub - ${techName} Master Documentation &amp; Roadmap</title>
  <meta name="description" content="Standalone single-file documentation for ${techName} with interactive sandboxes, tag search, and offline execution." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090d16;
      --card-bg: rgba(15, 23, 42, 0.75);
      --border: rgba(255, 255, 255, 0.1);
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --text: #f8fafc;
      --text-muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    header {
      position: sticky; top: 0; z-index: 40;
      background: rgba(9, 13, 22, 0.9);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      padding: 0.75rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
    }
    .brand { display: flex; align-items: center; gap: 0.75rem; font-weight: 700; font-size: 1.1rem; }
    .brand-badge { background: rgba(99,102,241,0.2); border: 1px solid rgba(99,102,241,0.4); color: #818cf8; font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
    .container { max-width: 1200px; margin: 0 auto; padding: 1.5rem; }
    .search-box {
      position: sticky; top: 65px; z-index: 30;
      background: rgba(9, 13, 22, 0.95);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      padding: 1rem 0; margin-bottom: 2rem;
    }
    .search-input {
      width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem;
      background: #0f172a; border: 1px solid var(--border); color: #fff;
      font-size: 0.9rem; outline: none; transition: border-color 0.2s;
    }
    .search-input:focus { border-color: var(--primary); box-shadow: 0 0 12px rgba(99, 102, 241, 0.3); }
    .popular-tags-row { margin-top: 0.5rem; display: flex; align-items: center; gap: 0.4rem; overflow-x: auto; font-size: 0.75rem; }
    .popular-tag {
      background: rgba(30, 41, 59, 0.8); border: 1px solid var(--border);
      color: #94a3b8; padding: 2px 8px; border-radius: 9999px; cursor: pointer; font-family: 'Fira Code', monospace;
    }
    .popular-tag:hover { background: var(--primary); color: #fff; }
    .hero-banner {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8));
      border: 1px solid var(--border); border-radius: 1rem; padding: 2rem; margin-bottom: 2.5rem;
    }
    .phase-container { margin-bottom: 3rem; }
    .phase-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem; }
    .phase-badge { background: rgba(225, 29, 72, 0.2); border: 1px solid rgba(225, 29, 72, 0.4); color: #fda4af; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; font-family: monospace; }
    .phase-title { font-size: 1.5rem; font-weight: 800; }
    .topic-section { margin-bottom: 2rem; background: var(--card-bg); border: 1px solid var(--border); border-radius: 1rem; padding: 1.5rem; }
    .topic-header { margin-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 1rem; }
    .topic-number { font-size: 0.75rem; color: #818cf8; font-weight: 700; text-transform: uppercase; font-family: monospace; }
    .topic-title { font-size: 1.25rem; font-weight: 700; margin: 0.2rem 0; }
    .topic-desc { font-size: 0.85rem; color: var(--text-muted); }
    .subtopic-card {
      background: rgba(13, 19, 34, 0.6); border: 1px solid var(--border);
      border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1.25rem;
    }
    .subtopic-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
    .subtopic-badge { background: #1e1b4b; border: 1px solid #6366f1; color: #a5b4fc; font-size: 0.7rem; font-family: monospace; font-weight: 700; padding: 2px 6px; border-radius: 4px; }
    .subtopic-title { font-size: 1rem; font-weight: 600; }
    .tag-list { display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem; }
    .tag-label { font-size: 0.7rem; color: var(--text-muted); }
    .tag-pill {
      background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3);
      color: #c7d2fe; font-family: 'Fira Code', monospace; font-size: 0.7rem; padding: 2px 8px; border-radius: 4px; cursor: pointer;
    }
    .tag-pill:hover { background: #6366f1; color: #fff; }
    .sandbox-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 0.75rem; }
    @media(min-width: 900px) { .sandbox-grid { grid-template-columns: 1fr 1fr; } }
    .code-box { background: #020617; border: 1px solid var(--border); border-radius: 0.5rem; overflow: hidden; }
    .code-header {
      background: #0f172a; padding: 0.4rem 0.75rem; display: flex; justify-content: space-between; align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.75rem; color: var(--text-muted);
    }
    .traffic-dots { display: flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; }
    .dot.red { background: #ef4444; } .dot.yellow { background: #f59e0b; } .dot.green { background: #10b981; }
    .code-title { margin-left: 6px; font-family: monospace; }
    .copy-btn { background: #1e293b; color: #cbd5e1; border: 1px solid var(--border); padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 0.7rem; }
    .copy-btn:hover { background: var(--primary); color: #fff; }
    .code-pre { padding: 0.75rem; overflow-x: auto; font-family: 'Fira Code', monospace; font-size: 0.75rem; color: #e2e8f0; max-height: 240px; }
    .preview-box { background: #0d1322; border: 1px solid var(--border); border-radius: 0.5rem; overflow: hidden; }
    .preview-header {
      background: #131b2e; padding: 0.4rem 0.75rem; font-size: 0.75rem; color: var(--text-muted);
      border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 0.4rem; font-family: monospace;
    }
    .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
    .sandbox-iframe { width: 100%; min-height: 180px; max-height: 280px; border: none; display: block; }
    .subtopic-note {
      background: rgba(99, 102, 241, 0.08); border-left: 3px solid var(--primary);
      padding: 0.5rem 0.75rem; border-radius: 0 4px 4px 0; font-size: 0.75rem; color: #cbd5e1;
    }
  </style>
</head>
<body>
  <header>
    <div class="brand">
      <div style="width: 28px; height: 28px; background: linear-gradient(135deg, #6366f1, #38bdf8); border-radius: 6px; display: grid; place-items: center; color: #fff;">&lt;/&gt;</div>
      <span>WebDev Hub</span>
      <span class="brand-badge">${techName} Master Bundle</span>
    </div>
    <div style="font-size: 0.8rem; color: #94a3b8;">100% Standalone &amp; Offline Ready</div>
  </header>

  <div class="container">
    <div class="search-box">
      <input type="text" id="standalone-search" class="search-input" placeholder="Search by tag name, concept, or code..." oninput="handleSearch(this.value)" />
      <div class="popular-tags-row">
        <span style="color: #64748b; font-size: 0.75rem;">Popular:</span>
        ${popularTagsPills}
      </div>
    </div>

    <div class="hero-banner">
      <h1 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">${techName} Complete Master Roadmap</h1>
      <p style="color: #94a3b8; font-size: 0.9rem; max-width: 800px;">
        Self-contained, interactive developer specification for ${techName}. Run snippets directly inside live sandbox frames with zero server dependencies.
      </p>
    </div>

    <main id="roadmap-content">
      ${phasesHtml}
    </main>
  </div>

  <script>
    const snippets = ${snippetData};

    function initPreviews() {
      snippets.forEach(item => {
        const frame = document.getElementById(item.id + '-frame');
        if (frame) {
          const doc = \`
            <!DOCTYPE html><html><head><meta charset="UTF-8"><style>
              body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #0d1322; color: #e2e8f0; margin: 0; padding: 12px; font-size: 13px; line-height: 1.4; }
              h1,h2,h3,h4,h5,h6 { color: #fff; margin-top:0; margin-bottom:6px; }
              p { margin: 0 0 6px 0; color: #cbd5e1; }
              a { color: #818cf8; }
              table { width: 100%; border-collapse: collapse; font-size: 12px; }
              th, td { border: 1px solid rgba(255,255,255,0.15); padding: 5px; }
              th { background: rgba(99,102,241,0.2); }
              input, select, textarea { background: #1e293b; color: #fff; border: 1px solid #475569; padding: 4px; border-radius: 4px; font-size: 12px; }
              button { background: #4f46e5; color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
              #__virtual_console__ { margin-top: 10px; background: #020617; border: 1px solid #1e293b; border-radius: 6px; padding: 6px 8px; font-family: monospace; font-size: 11px; color: #38bdf8; }
            </style>
            <script>
              (function() {
                var origLog = console.log;
                console.log = function() {
                  var str = Array.from(arguments).join(' ');
                  var box = document.getElementById('__virtual_console__');
                  if (!box) {
                    box = document.createElement('div');
                    box.id = '__virtual_console__';
                    box.innerHTML = '<strong>&#9654; Live Console:</strong><br>';
                    document.body.appendChild(box);
                  }
                  box.innerHTML += '<div>' + str + '</div>';
                  if (origLog) origLog.apply(console, arguments);
                };
              })();
            <\\/script>
            </head><body>\${item.code}</body></html>
          \`;
          frame.srcdoc = doc;
        }
      });
    }

    function searchTag(tag) {
      const input = document.getElementById('standalone-search');
      if (input) {
        input.value = tag;
        handleSearch(tag);
      }
    }

    function handleSearch(query) {
      const q = query.trim().toLowerCase().replace(/[<>]/g, "");
      const cards = document.querySelectorAll('.subtopic-card');
      let firstMatch = null;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = 'block';
          if (q && !firstMatch) firstMatch = card;
        } else {
          card.style.display = 'none';
        }
      });

      if (firstMatch && q) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function copySnippet(btn, codeId) {
      const code = document.getElementById(codeId);
      if (code) {
        navigator.clipboard.writeText(code.innerText).then(() => {
          btn.innerText = 'Copied!';
          setTimeout(() => { btn.innerText = 'Copy'; }, 2000);
        });
      }
    }

    window.addEventListener('DOMContentLoaded', initPreviews);
  </script>
</body>
</html>`;
}
