"use client";

import { Bell, Search, User } from "@/components/Icons";

export default function Header() {
  return (
    <header className="h-20 border-b border-border glass flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input 
          type="text" 
          placeholder="Search orders, menu items..." 
          className="w-full bg-secondary/50 border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all font-sans"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-xl hover:bg-white/5 relative text-muted-foreground hover:text-foreground transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full border-2 border-background"></span>
        </button>
        
        <div className="h-8 w-px bg-border mx-2"></div>
        
        <button className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-white/5 transition-all">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center border-2 border-background shadow-lg">
            <User size={20} className="text-white" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold">Restaurant Admin</p>
            <p className="text-xs text-muted-foreground">Owner</p>
          </div>
        </button>
      </div>
    </header>
  );
}
