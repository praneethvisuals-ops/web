"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 z-[100] w-full bg-white/85 backdrop-blur-xl border-b border-[#ece8e6]/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
          <Link href="/" className="z-[110] flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            <img src="/gallery-2.jpg" alt="Logo" className="h-7 w-7 rounded-sm object-cover shadow-sm" />
            <span className="text-xs font-black uppercase tracking-widest text-[#320904]">Praneeth Visuals</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-[#320904] ${active ? "text-[#320904]" : "text-[#958c89]"}`}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#320904] rounded-full" />}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:block rounded-full bg-[#320904] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#4d1d15] hover:shadow-lg active:scale-95">
              Book a Shoot
            </Link>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
              aria-label="Toggle Menu"
            >
              <span className={`block h-0.5 w-6 rounded-full bg-[#320904] transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-[#320904] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-[#320904] transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[105] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      <aside className={`fixed top-0 right-0 z-[110] h-screen w-80 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex h-full flex-col p-8 pt-24">
          <p className="mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-[#320904]/40">Menu</p>
          <div className="flex flex-col gap-8">
            {links.map((link, idx) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center justify-between text-2xl font-black uppercase tracking-[0.1em] transition-all duration-300 ${active ? "text-[#320904]" : "text-[#958c89] hover:text-[#320904]"}`}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-2 w-2 rounded-full bg-[#320904]" />}
                </Link>
              );
            })}
          </div>
          
          <div className="mt-auto">
            <Link 
              href="/contact" 
              className="flex w-full items-center justify-center rounded-2xl bg-[#320904] py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#4d1d15] active:scale-95 shadow-xl"
            >
              Book Now
            </Link>
            
            <div className="mt-10 flex flex-col items-start gap-3 opacity-40">
                <div className="h-px w-10 bg-[#320904]/40" />
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#320904]">Praneeth Visuals © 2024</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
