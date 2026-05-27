"use client";

import { useState } from "react";
import questions from "../questions.json";

type Question = {
  id: number;
  question: string;
  tip: string;
  category: string;
};

const categoryLabel: Record<string, string> = {
  "transition-story": "Your Story",
  strengths: "Strengths",
  leadership: "Leadership",
  failure: "Growth Moment",
  motivation: "Motivation",
  "culture-fit": "Culture Fit",
};

export default function Home() {
  const [current, setCurrent] = useState<Question | null>(null);
  const [seen, setSeen] = useState<number[]>([]);
  const [showIcon, setShowIcon] = useState(false);

  function getQuestion() {
    const unseen = questions.filter((q) => !seen.includes(q.id));
    const pool = unseen.length > 0 ? unseen : questions;
    const next = pool[Math.floor(Math.random() * pool.length)];
    setCurrent(next);
    setSeen((prev) => (unseen.length > 0 ? [...prev, next.id] : [next.id]));
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 900);
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden font-sans"
      style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 50%, #0a0a1a 100%)" }}
    >
      <style>{`
        @keyframes zoomAcross {
          0%   { transform: translate(0, 0) scale(0.5); opacity: 1; }
          100% { transform: translate(80vw, -80vh) scale(2.5); opacity: 0; }
        }
        .zoom-icon { animation: zoomAcross 0.9s ease-out forwards; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-appear { animation: fadeSlideUp 0.4s ease-out both; }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.07; }
        }
        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: gridPulse 4s ease-in-out infinite;
        }
        .glow-btn {
          box-shadow: 0 0 24px rgba(99,102,241,0.5), 0 0 48px rgba(99,102,241,0.2);
          transition: box-shadow 0.2s, transform 0.1s;
        }
        .glow-btn:hover {
          box-shadow: 0 0 36px rgba(99,102,241,0.8), 0 0 72px rgba(99,102,241,0.3);
        }
        .glow-btn:active { transform: scale(0.97); }
      `}</style>

      <div className="grid-bg" />

      {/* Background illustrations */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Neural network SVG */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Connections */}
          <line x1="80" y1="200" x2="280" y2="150" stroke="#818cf8" strokeWidth="1"/>
          <line x1="80" y1="200" x2="280" y2="300" stroke="#818cf8" strokeWidth="1"/>
          <line x1="80" y1="400" x2="280" y2="150" stroke="#818cf8" strokeWidth="1"/>
          <line x1="80" y1="400" x2="280" y2="300" stroke="#818cf8" strokeWidth="1"/>
          <line x1="80" y1="400" x2="280" y2="450" stroke="#818cf8" strokeWidth="1"/>
          <line x1="80" y1="600" x2="280" y2="300" stroke="#818cf8" strokeWidth="1"/>
          <line x1="80" y1="600" x2="280" y2="450" stroke="#818cf8" strokeWidth="1"/>
          <line x1="280" y1="150" x2="480" y2="100" stroke="#c084fc" strokeWidth="1"/>
          <line x1="280" y1="150" x2="480" y2="250" stroke="#c084fc" strokeWidth="1"/>
          <line x1="280" y1="300" x2="480" y2="250" stroke="#c084fc" strokeWidth="1"/>
          <line x1="280" y1="300" x2="480" y2="380" stroke="#c084fc" strokeWidth="1"/>
          <line x1="280" y1="450" x2="480" y2="380" stroke="#c084fc" strokeWidth="1"/>
          <line x1="280" y1="450" x2="480" y2="520" stroke="#c084fc" strokeWidth="1"/>
          <line x1="480" y1="100" x2="650" y2="300" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="480" y1="250" x2="650" y2="300" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="480" y1="380" x2="650" y2="300" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="480" y1="520" x2="650" y2="300" stroke="#818cf8" strokeWidth="1.5"/>
          {/* Right side mirror */}
          <line x1="1120" y1="200" x2="920" y2="150" stroke="#818cf8" strokeWidth="1"/>
          <line x1="1120" y1="200" x2="920" y2="300" stroke="#818cf8" strokeWidth="1"/>
          <line x1="1120" y1="400" x2="920" y2="300" stroke="#818cf8" strokeWidth="1"/>
          <line x1="1120" y1="400" x2="920" y2="450" stroke="#818cf8" strokeWidth="1"/>
          <line x1="1120" y1="600" x2="920" y2="450" stroke="#818cf8" strokeWidth="1"/>
          <line x1="920" y1="150" x2="720" y2="300" stroke="#c084fc" strokeWidth="1.5"/>
          <line x1="920" y1="300" x2="720" y2="300" stroke="#c084fc" strokeWidth="1.5"/>
          <line x1="920" y1="450" x2="720" y2="300" stroke="#c084fc" strokeWidth="1.5"/>
          {/* Nodes — input layer */}
          <circle cx="80" cy="200" r="8" fill="#4f46e5"/>
          <circle cx="80" cy="400" r="8" fill="#4f46e5"/>
          <circle cx="80" cy="600" r="8" fill="#4f46e5"/>
          {/* Hidden layer 1 */}
          <circle cx="280" cy="150" r="7" fill="#6366f1"/>
          <circle cx="280" cy="300" r="7" fill="#6366f1"/>
          <circle cx="280" cy="450" r="7" fill="#6366f1"/>
          {/* Hidden layer 2 */}
          <circle cx="480" cy="100" r="7" fill="#818cf8"/>
          <circle cx="480" cy="250" r="7" fill="#818cf8"/>
          <circle cx="480" cy="380" r="7" fill="#818cf8"/>
          <circle cx="480" cy="520" r="7" fill="#818cf8"/>
          {/* Output node */}
          <circle cx="650" cy="300" r="12" fill="#c084fc"/>
          {/* Right side nodes */}
          <circle cx="1120" cy="200" r="8" fill="#4f46e5"/>
          <circle cx="1120" cy="400" r="8" fill="#4f46e5"/>
          <circle cx="1120" cy="600" r="8" fill="#4f46e5"/>
          <circle cx="920" cy="150" r="7" fill="#6366f1"/>
          <circle cx="920" cy="300" r="7" fill="#6366f1"/>
          <circle cx="920" cy="450" r="7" fill="#6366f1"/>
          <circle cx="720" cy="300" r="12" fill="#c084fc"/>
        </svg>

        {/* Floating AI symbols */}
        {[
          { text: "∑", x: "8%", y: "15%", size: "2rem", delay: "0s" },
          { text: "∇", x: "88%", y: "12%", size: "1.8rem", delay: "1s" },
          { text: "{ }", x: "5%", y: "75%", size: "1.6rem", delay: "2s" },
          { text: "∞", x: "90%", y: "70%", size: "2rem", delay: "0.5s" },
          { text: "λ", x: "15%", y: "50%", size: "1.8rem", delay: "1.5s" },
          { text: "σ", x: "82%", y: "45%", size: "1.8rem", delay: "2.5s" },
          { text: "π", x: "20%", y: "88%", size: "1.5rem", delay: "3s" },
          { text: "</>", x: "75%", y: "85%", size: "1.3rem", delay: "0.8s" },
          { text: "⊕", x: "50%", y: "8%", size: "1.6rem", delay: "1.2s" },
          { text: "≈", x: "50%", y: "92%", size: "1.8rem", delay: "2.2s" },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute text-indigo-400 font-mono select-none"
            style={{
              left: s.x, top: s.y,
              fontSize: s.size,
              opacity: 0.18,
              animation: `floatSymbol 6s ease-in-out infinite`,
              animationDelay: s.delay,
            }}
          >
            {s.text}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floatSymbol {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {showIcon && (
        <div className="zoom-icon fixed bottom-12 left-8 text-5xl z-50 pointer-events-none">
          ✨
        </div>
      )}

      <div className="max-w-2xl w-full text-center space-y-6 relative z-10">
        <style>{`
          .metallic-badge {
            background: linear-gradient(90deg, #b8860b, #ffd700, #daa520, #ffd700, #b8860b);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          .metallic-h1 {
            background: linear-gradient(90deg, #c0c0c0, #ffffff, #e8e8e8, #ffffff, #c0c0c0);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s linear infinite;
          }
          .metallic-accent {
            background: linear-gradient(90deg, #daa520, #ffd700, #fffacd, #ffd700, #daa520);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          .metallic-sub {
            background: linear-gradient(90deg, #9ca3af, #d1d5db, #9ca3af);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 5s linear infinite;
          }
          @keyframes shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          .gold-btn {
            background: linear-gradient(135deg, #b8860b, #daa520, #ffd700, #daa520, #b8860b);
            background-size: 200% auto;
            color: #0a0a1a;
            font-weight: 700;
            box-shadow: 0 0 24px rgba(218,165,32,0.4), 0 0 48px rgba(218,165,32,0.15);
            animation: shimmer 3s linear infinite;
            transition: box-shadow 0.2s, transform 0.1s;
          }
          .gold-btn:hover { box-shadow: 0 0 36px rgba(218,165,32,0.7), 0 0 72px rgba(218,165,32,0.3); }
          .gold-btn:active { transform: scale(0.97); }
        `}</style>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-xs font-medium tracking-widest uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse inline-block" />
          <span className="metallic-badge">Interview Prep · Tech · Data &amp; AI Engineering</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="metallic-h1">Hi Jana — </span>
          <span className="metallic-accent">let&apos;s practice.</span>
        </h1>

        <p className="text-base metallic-sub font-medium">
          20 questions, built for tech data &amp; AI engineers.
          <br />
          Click the button when you&apos;re ready.
        </p>

        <button
          onClick={getQuestion}
          className="gold-btn mt-2 px-10 py-4 rounded-xl text-base"
        >
          Give me a question →
        </button>

        {current && (
          <div
            key={current.id}
            className="card-appear mt-6 rounded-2xl p-8 text-left space-y-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(218,165,32,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-lg metallic-badge"
              style={{ background: "rgba(218,165,32,0.1)", border: "1px solid rgba(218,165,32,0.25)", WebkitTextFillColor: "unset", color: "#ffd700" }}
            >
              {categoryLabel[current.category] ?? current.category}
            </span>
            <p className="text-xl font-semibold leading-relaxed metallic-h1">
              {current.question}
            </p>
            <p className="text-sm leading-relaxed border-t border-white/10 pt-4 metallic-sub">
              💡 {current.tip}
            </p>
          </div>
        )}
      </div>

      <a
        href="https://buildbeautifully.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-3 z-50 text-[11px] opacity-50 hover:opacity-100 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md no-underline text-slate-400 transition-opacity"
      >
        Learn how to build sites and apps like this with{" "}
        <span className="underline">Build Beautifully</span>
      </a>
    </main>
  );
}
