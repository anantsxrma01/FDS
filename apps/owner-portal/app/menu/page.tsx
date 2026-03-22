"use client";

import { usePortal, MenuItem } from "@/context/PortalContext";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit2, 
  Trash2, 
  Eye, 
  EyeOff,
  MoreVertical,
  ChevronRight,
  ShoppingBag
} from "@/components/Icons";
import { useState } from "react";

export default function MenuPage() {
  const { menuItems, updateMenuItem, deleteMenuItem, addMenuItem } = usePortal();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAvailability = (item: MenuItem) => {
    updateMenuItem({ ...item, available: !item.available });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Menu Management</h1>
          <p className="text-muted-foreground">Add, edit, or remove items from your restaurant's digital menu.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/20 active:scale-95"
        >
          <Plus size={20} />
          <span>Add New Item</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-4 rounded-2xl">
        <div className="flex gap-2 w-full sm:w-auto">
          {["All", "Starters", "Main Course", "Beverages", "Desserts"].map((cat) => (
            <button 
              key={cat}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                cat === "All" ? "bg-brand-500 text-white" : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search menu..." 
            className="w-full bg-secondary/50 border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className={`glass-card rounded-2xl overflow-hidden group hover:border-brand-500/30 transition-all duration-300 ${!item.available ? 'opacity-75' : ''}`}>
            <div className="aspect-video bg-secondary/50 relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-brand-500/20 font-bold text-6xl select-none">
                 {item.name[0]}
               </div>
               {!item.available && (
                 <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                   <span className="bg-rose-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">Sold Out</span>
                 </div>
               )}
               <div className="absolute top-4 right-4 flex gap-2">
                 <button 
                   onClick={() => toggleAvailability(item)}
                   className="p-2 rounded-lg bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all"
                   title={item.available ? "Mark as Unavailable" : "Mark as Available"}
                 >
                   {item.available ? <Eye size={18} /> : <EyeOff size={18} />}
                 </button>
               </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-brand-500 transition-colors">{item.name}</h3>
                  <p className="text-sm text-brand-500 font-semibold">{item.category}</p>
                </div>
                <p className="text-xl font-bold text-foreground">₹{item.price}</p>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-6 h-10">{item.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex gap-2">
                   <button className="p-2 rounded-xl border border-border hover:bg-white/5 transition-all text-muted-foreground hover:text-foreground">
                     <Edit2 size={18} />
                   </button>
                   <button 
                     onClick={() => deleteMenuItem(item.id)}
                     className="p-2 rounded-xl border border-border hover:bg-rose-500/10 hover:border-rose-500/30 transition-all text-muted-foreground hover:text-rose-500"
                   >
                     <Trash2 size={18} />
                   </button>
                </div>
                <button className="flex items-center gap-1 text-sm font-semibold text-brand-500 hover:gap-2 transition-all">
                  Full Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-muted-foreground hover:border-brand-500/50 hover:text-brand-500 transition-all group min-h-[400px]"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-brand-500/10 transition-all">
            <Plus size={32} />
          </div>
          <span className="font-bold text-lg">Add New Product</span>
          <p className="text-sm">Click to add a new delicious item to your menu</p>
        </button>
      </div>

      {/* Mock Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)}></div>
          <div className="glass-card rounded-3xl w-full max-w-xl relative z-10 shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 border-b border-border bg-white/[0.02]">
              <h2 className="text-2xl font-bold">Add New Menu Item</h2>
              <p className="text-muted-foreground">Fill in the details below to list a new item on your menu.</p>
            </div>
            
            <form className="p-8 space-y-6" onSubmit={(e) => {
              e.preventDefault();
              addMenuItem({
                name: "New Item",
                description: "A freshly added delicious dish from our kitchen.",
                price: 299,
                category: "Starters",
                available: true
              });
              setIsAddModalOpen(false);
            }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-semibold ml-1">Item Name</label>
                  <input type="text" placeholder="e.g. Garlic Naan" className="w-full bg-white/5 border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Price (₹)</label>
                  <input type="number" placeholder="250" className="w-full bg-white/5 border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Category</label>
                  <select className="w-full bg-white/5 border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all">
                    <option className="bg-zinc-900">Starters</option>
                    <option className="bg-zinc-900">Main Course</option>
                    <option className="bg-zinc-900">Desserts</option>
                  </select>
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-semibold ml-1">Description</label>
                  <textarea rows={3} placeholder="Describe your dish..." className="w-full bg-white/5 border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all resize-none"></textarea>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-border hover:bg-white/5 font-bold transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold transition-all shadow-lg shadow-brand-500/20"
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
