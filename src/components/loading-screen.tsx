"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Praneeth Visuals";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 1400); // pause fully written text + icon
      }
    }, 120); // typing speed
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#1f0704] text-white transition-opacity duration-500 px-4">
      <h1 className="text-xl font-black uppercase tracking-[0.2em] sm:text-3xl sm:tracking-[0.3em] md:text-5xl lg:text-6xl text-center">
        {text}
        {text === fullText && (
          <svg className="inline-block relative -top-1 ml-2 sm:ml-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white fill-current transition-opacity animate-pulse" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
        <span className="inline-block w-[3px] bg-white animate-pulse h-[1em] align-middle ml-2"></span>
      </h1>
    </div>
  );
}
