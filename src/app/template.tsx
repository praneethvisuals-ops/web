"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Set ready after a tiny delay to ensure the browser has a chance to see the initial state
    const timer = setTimeout(() => setIsReady(true), 20); // Very fast 20ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${isReady ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-sm"}`}>
      {children}
    </div>
  );
}
