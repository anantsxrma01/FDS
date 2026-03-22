"use client";

import { usePortal } from "@/context/PortalContext";
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Plus
} from "@/components/Icons";
import Link from "next/link";

export default function Dashboard() {
  const { orders, menuItems } = usePortal();
  
  const stats = [
    { 
      label: "Total Revenue", 
      value: "₹24,500", 
      change: "+12.5%", 
      trend: "up", 
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    { 
      label: "Total Orders", 
      value: orders.length.toString(), 
      change: "+5.2%", 
      trend: "up", 
      icon: ShoppingBag,
      color: "text-brand-500",
      bg: "bg-brand-500/10"
    },
    { 
      label: "Active Customers", 
      value: "156", 
      change: "-2.1%", 
      trend: "down", 
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      label: "Avg. Prep Time", 
      value: "18m", 
      change: "+1.5%", 
      trend: "up", 
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
  ];

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Store Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your restaurant today.</p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/menu"
            className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-brand-500/20"
          >
            <Plus size={20} />
            <span>Add Item</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl group hover:border-brand-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-muted-foreground text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold leading-none">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Orders</h2>
            <Link href="/orders" className="text-brand-500 hover:underline text-sm font-medium">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 font-semibold text-sm">Order ID</th>
                  <th className="p-4 font-semibold text-sm">Customer</th>
                  <th className="p-4 font-semibold text-sm">Total</th>
                  <th className="p-4 font-semibold text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 font-medium text-brand-500">{order.id}</td>
                    <td className="p-4">{order.customerName}</td>
                    <td className="p-4 font-semibold">₹{order.total}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Pending' ? 'bg-amber-500/20 text-amber-500' :
                        order.status === 'Preparing' ? 'bg-blue-500/20 text-blue-500' :
                        'bg-emerald-500/20 text-emerald-500'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Popular Items</h2>
          <div className="space-y-6">
            {menuItems.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center border border-border overflow-hidden">
                  <div className="text-brand-500 font-bold text-xl">{item.name[0]}</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold group-hover:text-brand-500 transition-colors">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">₹{item.price}</p>
                  <p className="text-xs text-emerald-500 font-medium">Top Seller</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-dashed border-border text-muted-foreground hover:text-brand-500 hover:border-brand-500/50 transition-all font-medium">
            Analyze Menu Performance
          </button>
        </div>
      </div>
    </div>
  );
}
