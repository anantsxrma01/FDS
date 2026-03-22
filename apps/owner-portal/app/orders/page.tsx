"use client";

import { usePortal, OrderStatus } from "@/context/PortalContext";
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  ChefHat, 
  PackageCheck,
  XCircle,
  MoreVertical,
  ShoppingBag
} from "@/components/Icons";

export default function OrdersPage() {
  const { orders, updateOrderStatus } = usePortal();

  const getStatusStyle = (status: OrderStatus) => {
    switch (status) {
      case "Pending": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Preparing": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Ready": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Delivered": return "bg-zinc-500/10 text-zinc-500 border-zinc-500/20";
      case "Cancelled": return "bg-rose-500/10 text-rose-500 border-rose-500/20";
    }
  };

  const getNextStatus = (current: OrderStatus): OrderStatus | null => {
    switch (current) {
      case "Pending": return "Preparing";
      case "Preparing": return "Ready";
      case "Ready": return "Delivered";
      default: return null;
    }
  };

  const getActionButtonLabel = (status: OrderStatus) => {
    switch (status) {
      case "Pending": return "Accept Order";
      case "Preparing": return "Mark as Ready";
      case "Ready": return "Mark Delivered";
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">Manage and track your restaurant's incoming orders.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="bg-secondary/50 border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all text-sm h-10 w-64"
            />
          </div>
          <button className="flex items-center gap-2 border border-border bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all h-10">
            <Filter size={18} />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {orders.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="text-muted-foreground" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">No orders found</h3>
            <p className="text-muted-foreground">When customers place orders, they will appear here.</p>
          </div>
        ) : (
          orders.map((order) => {
            const nextStatus = getNextStatus(order.status);
            const actionLabel = getActionButtonLabel(order.status);

            return (
              <div key={order.id} className="glass-card rounded-2xl overflow-hidden group hover:border-brand-500/30 transition-all duration-300">
                <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${getStatusStyle(order.status)}`}>
                      {order.status === "Pending" && <Clock size={24} />}
                      {order.status === "Preparing" && <ChefHat size={24} />}
                      {order.status === "Ready" && <PackageCheck size={24} />}
                      {order.status === "Delivered" && <CheckCircle2 size={24} />}
                      {order.status === "Cancelled" && <XCircle size={24} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-lg">{order.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusStyle(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Placed {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right mr-4">
                       <p className="text-sm text-muted-foreground">Order Total</p>
                       <p className="text-xl font-bold text-brand-500">₹{order.total}</p>
                    </div>
                    <div className="flex gap-2">
                       {nextStatus && (
                         <button 
                           onClick={() => updateOrderStatus(order.id, nextStatus)}
                           className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/20 active:scale-95"
                         >
                           {actionLabel}
                         </button>
                       )}
                       <button className="p-2.5 rounded-xl border border-border hover:bg-white/5 transition-all text-muted-foreground">
                         <MoreVertical size={20} />
                       </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.02]">
                  <div className="flex flex-wrap gap-8">
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Customer Details</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 font-bold text-xs">
                          {order.customerName[0]}
                        </div>
                        <p className="font-semibold">{order.customerName}</p>
                      </div>
                    </div>
                    
                    <div className="flex-[2] min-w-[300px]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Order Items</h4>
                      <div className="space-y-2">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm py-1 border-b border-border/30 last:border-0">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 flex items-center justify-center rounded bg-secondary/50 font-bold text-xs">{item.quantity}x</span>
                              <span>{item.name}</span>
                            </div>
                            <span className="font-medium text-muted-foreground">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
