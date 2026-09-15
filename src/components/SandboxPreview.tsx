import React, { useEffect, useRef } from "react";

interface SandboxPreviewProps {
  code: string;
  title: string;
  id?: string;
}

export const SandboxPreview: React.FC<SandboxPreviewProps> = ({ code, title, id }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    
    // Check if the snippet contains full HTML structure or if it's pure CSS or JS
    let formattedCode = code;
    
    // If it looks like CSS only (contains curly braces and properties without html tags)
    const isPureCss = code.includes("{") && code.includes(":") && !code.includes("<") && !code.includes("function") && !code.includes("console.");
    if (isPureCss) {
      formattedCode = `
        <style>${code}</style>
        <div class="demo-box">
          <h3>CSS Preview Sandbox</h3>
          <p>Style applied dynamically from code snippet.</p>
          <button>Interactive Element</button>
        </div>
      `;
    }

    // Build an isolated document with dark-mode styling and virtual console for JS
    const sandboxDoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0d1322;
            color: #e2e8f0;
            margin: 0;
            padding: 14px;
            font-size: 13px;
            line-height: 1.5;
          }
          h1, h2, h3, h4, h5, h6 { color: #f8fafc; margin-top: 0; margin-bottom: 8px; }
          h1 { font-size: 1.35rem; }
          h2 { font-size: 1.15rem; }
          h3 { font-size: 1rem; }
          h4 { font-size: 0.9rem; }
          h5 { font-size: 0.8rem; }
          h6 { font-size: 0.75rem; }
          p { margin-top: 0; margin-bottom: 8px; color: #cbd5e1; }
          a { color: #818cf8; text-decoration: underline; text-underline-offset: 2px; }
          a:hover { color: #a5b4fc; }
          hr { border: 0; height: 1px; background: rgba(255, 255, 255, 0.12); margin: 12px 0; }
          mark { background-color: #eab308; color: #0f172a; padding: 1px 4px; border-radius: 2px; }
          blockquote { margin: 8px 0; padding-left: 12px; border-left: 3px solid #6366f1; color: #cbd5e1; font-style: italic; }
          ul, ol { padding-left: 20px; margin: 6px 0; color: #cbd5e1; }
          li { margin-bottom: 3px; }
          table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 12px; }
          th, td { border: 1px solid rgba(255, 255, 255, 0.12); padding: 6px 8px; }
          th { background: rgba(99, 102, 241, 0.2); color: #e0e7ff; font-weight: 600; }
          input, select, textarea {
            background: #1e293b;
            color: #f8fafc;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            padding: 5px 8px;
            font-size: 12px;
          }
          input[type="color"] { padding: 1px 2px; cursor: pointer; }
          input[type="range"] { accent-color: #6366f1; }
          button {
            font-family: inherit;
            font-size: 12px;
            border-radius: 6px;
            padding: 6px 12px;
            border: none;
            background: #4f46e5;
            color: #ffffff;
            cursor: pointer;
            transition: all 0.2s;
          }
          button:hover { background: #6366f1; opacity: 0.95; }
          
          /* Virtual Console Container */
          #__virtual_console__ {
            margin-top: 12px;
            background: #020617;
            border: 1px solid #1e293b;
            border-radius: 8px;
            padding: 10px 12px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            color: #94a3b8;
            max-height: 180px;
            overflow-y: auto;
          }
          .__log_line {
            padding: 3px 0;
            border-bottom: 1px dashed rgba(255,255,255,0.06);
            white-space: pre-wrap;
            word-break: break-all;
          }
          .__log_log { color: #38bdf8; }
          .__log_warn { color: #fbbf24; }
          .__log_error { color: #f87171; }
          .__log_info { color: #a78bfa; }
          .__log_table { color: #34d399; font-family: monospace; }
        </style>
        <script>
          (function() {
            function formatArg(arg) {
              if (arg === null) return 'null';
              if (arg === undefined) return 'undefined';
              if (typeof arg === 'object') {
                try {
                  return JSON.stringify(arg, null, 2);
                } catch(e) {
                  return String(arg);
                }
              }
              return String(arg);
            }

            function appendLog(type, args) {
              try {
                var str = Array.from(args).map(formatArg).join(' ');
                var box = document.getElementById('__virtual_console__');
                if (!box) {
                  box = document.createElement('div');
                  box.id = '__virtual_console__';
                  box.innerHTML = '<div style="font-family:monospace;font-size:11px;font-weight:bold;color:#38bdf8;padding-bottom:4px;border-bottom:1px solid #1e293b;margin-bottom:6px;display:flex;align-items:center;gap:6px;"><span>&#9654; Live Console Output</span></div>';
                  document.body.appendChild(box);
                }
                var line = document.createElement('div');
                line.className = '__log_line __log_' + type;
                line.textContent = '> ' + str;
                box.appendChild(line);
              } catch(err) {}
            }

            var origLog = console.log;
            var origWarn = console.warn;
            var origError = console.error;
            var origInfo = console.info;

            console.log = function() { appendLog('log', arguments); if (origLog) origLog.apply(console, arguments); };
            console.info = function() { appendLog('info', arguments); if (origInfo) origInfo.apply(console, arguments); };
            console.warn = function() { appendLog('warn', arguments); if (origWarn) origWarn.apply(console, arguments); };
            console.error = function() { appendLog('error', arguments); if (origError) origError.apply(console, arguments); };
            console.table = function() { appendLog('table', arguments); if (origLog) origLog.apply(console, arguments); };
          })();
        </script>
      </head>
      <body>
        ${formattedCode}
      </body>
      </html>
    `;

    iframeRef.current.srcdoc = sandboxDoc;
  }, [code]);

  return (
    <div id={id} className="relative w-full rounded-lg overflow-hidden border border-white/10 bg-[#0d1322] shadow-inner">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#131b2e] border-b border-white/10 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse"></span>
          <span>Live Interactive Sandbox</span>
        </div>
        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Preview Frame</span>
      </div>
      <iframe
        ref={iframeRef}
        title={title}
        className="w-full min-h-[170px] h-auto max-h-[340px] border-none block"
        sandbox="allow-scripts allow-forms allow-modals"
      />
    </div>
  );
};
