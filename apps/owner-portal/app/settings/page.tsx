"use client";

import { 
  User, 
  Store, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe,
  ChevronRight
} from "@/components/Icons";

export default function SettingsPage() {
  const sections = [
    {
      title: "Profile",
      items: [
        { name: "Personal Information", icon: User, desc: "Update your name, email and phone" },
        { name: "Restaurant Profile", icon: Store, desc: "Change store name, address and brand colors" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { name: "Notifications", icon: Bell, desc: "Manage order alerts and system news" },
        { name: "Security", icon: Shield, desc: "Password and two-factor authentication" },
      ]
    },
    {
      title: "Business",
      items: [
        { name: "Payouts & Billing", icon: CreditCard, desc: "Manage your bank account and invoices" },
        { name: "Store Visibility", icon: Globe, desc: "Control when your store is open and visible" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Settings</h1>
        <p className="text-muted-foreground">Manage your account and restaurant preferences.</p>
      </div>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-500 ml-1">{section.title}</h2>
            <div className="grid grid-cols-1 gap-3">
              {section.items.map((item, j) => (
                <button key={j} className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:border-brand-500/30 transition-all text-left">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-secondary/50 text-muted-foreground group-hover:text-brand-500 transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground group-hover:text-brand-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-8 flex justify-end">
          <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/20 active:scale-95">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}