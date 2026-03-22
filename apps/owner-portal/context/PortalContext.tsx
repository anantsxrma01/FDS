"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type OrderStatus = "Pending" | "Preparing" | "Ready" | "Delivered" | "Cancelled";

export interface Order {
  id: string;
  customerName: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
  image?: string;
}

interface PortalContextType {
  orders: Order[];
  menuItems: MenuItem[];
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updateMenuItem: (item: MenuItem) => void;
  addMenuItem: (item: Omit<MenuItem, "id">) => void;
  deleteMenuItem: (id: string) => void;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

const initialOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Ritik Saini",
    items: [{ name: "Paneer Tikka", quantity: 2, price: 250 }],
    total: 500,
    status: "Pending",
    createdAt: new Date().toISOString(),
  },
  {
    id: "ORD-002",
    customerName: "Anant Sharma",
    items: [{ name: "Butter Chicken", quantity: 1, price: 450 }],
    total: 450,
    status: "Preparing",
    createdAt: new Date().toISOString(),
  },
];

const initialMenu: MenuItem[] = [
  { id: "1", name: "Paneer Tikka", description: "Delicious grilled paneer", price: 250, category: "Starters", available: true },
  { id: "2", name: "Butter Chicken", description: "Rich and creamy chicken curry", price: 450, category: "Main Course", available: true },
];

export function PortalProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenu);

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem = { ...item, id: Math.random().toString(36).substr(2, 9) };
    setMenuItems((prev) => [...prev, newItem]);
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PortalContext.Provider
      value={{
        orders,
        menuItems,
        updateOrderStatus,
        updateMenuItem,
        addMenuItem,
        deleteMenuItem,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (context === undefined) {
    throw new Error("usePortal must be used within a PortalProvider");
  }
  return context;
}
