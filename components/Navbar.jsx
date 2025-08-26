"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Shield, Github, Linkedin, Twitter } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const progress = document.getElementById("scroll-progress");
      const h = document.documentElement;
      const p = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (progress) progress.style.width = p + "%";
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx("fixed top-0 left-0 w-full z-50 transition-all", scrolled ? "backdrop-blur bg-black/40 border-b border-cyan-400/20" : "")}>
      <div id="scroll-progress"></div>
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-cyan-300" />
          <span className="font-semibold tracking-widest text-cyan-200">RAMYA<span className="text-cyan-400">SEC</span></span>
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden px-3 py-2 border border-cyan-400/30 rounded">
          ☰
        </button>
        <ul className={clsx("md:flex gap-6 items-center text-sm", open ? "block mt-4 md:mt-0" : "hidden md:flex")}>
          <li><a href="#about" className="hover:text-cyan-300">About</a></li>
          <li><a href="#certs" className="hover:text-cyan-300">Certs</a></li>
          <li><a href="#skills" className="hover:text-cyan-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-300">Projects</a></li>
          <li><a href="#blog" className="hover:text-cyan-300">Blog</a></li>
          <li><a href="#ctf" className="hover:text-cyan-300">CTF</a></li>
          <li><a href="#timeline" className="hover:text-cyan-300">Experience</a></li>
          <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
          <li className="flex gap-3 pl-2">
            <a href="https://github.com/" target="_blank" className="hover:text-cyan-300" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/arumugam-ramya" target="_blank" className="hover:text-cyan-300" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-cyan-300" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}