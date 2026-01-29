import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";

export default function App() {
    React.useEffect(() => {
    document.title = "Poorni Kishore | Senior Frontend Developer";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Senior Frontend Developer with 7 years of experience specializing in React, TypeScript, and modern Bento-grid aesthetics.");
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = "description";
      newMeta.content = "Senior Frontend Developer with 7 years of experience specializing in React, TypeScript, and modern Bento-grid aesthetics.";
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <main className="min-h-screen text-dark selection:bg-primary selection:text-white font-sans">
      <Navbar />

      <div className="space-y-6 pb-24">
        <Hero />
        <About />
        <Career />
        <Contact />
      </div>

      <footer className="py-12 px-6 md:px-12 text-center border-t border-dark/5">
        <p className="text-dark/40 text-[10px] uppercase tracking-[0.3em] font-bold font-sans">
          &copy; 2026 Poorni Kishore &bull; London, UK
        </p>
      </footer>
    </main>
  );
}