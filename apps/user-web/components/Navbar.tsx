"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "glass py-4 shadow-lg shadow-black/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group relative z-50">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-600 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-brand-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-600">
            Gajraula Eats
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="pl-10 pr-4 py-2.5 bg-input/50 backdrop-blur-sm border border-border rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm placeholder:text-muted-foreground group-hover:bg-input/80 focus:bg-input/80"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          <Link href="/cart" className="relative group p-2 hover:bg-white/5 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              2
            </span>
          </Link>

          <Link href="/login" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-full shadow-lg shadow-brand-500/20 transform transition-all hover:-translate-y-0.5 active:translate-y-0 text-center">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <Link href="/cart" className="relative p-2 h-10 w-10 flex items-center justify-center bg-white/5 rounded-full z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 h-10 w-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none relative z-50"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <div 
          className={`fixed inset-0 bg-background lg:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full px-6 pt-20 gap-8">
            <div className="w-full relative max-w-sm">
              <input
                type="text"
                placeholder="Search for restaurants..."
                className="w-full pl-12 pr-4 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="w-full max-w-sm py-4 border border-border bg-muted/50 hover:bg-muted text-foreground text-xl font-bold rounded-2xl text-center transition-all"
            >
              Log In
            </Link>
            
            <Link 
              href="/signup" 
              onClick={() => setIsOpen(false)}
              className="w-full max-w-sm py-4 bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold rounded-2xl text-center shadow-xl shadow-brand-500/20 active:scale-[0.98] transition-all"
            >
              Sign Up
            </Link>
            
            <div className="flex gap-6 mt-4">
               {["Help", "Offers", "Restaurants"].map(item => (
                 <Link key={item} href="#" className="text-muted-foreground hover:text-brand-400 font-medium">
                   {item}
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
