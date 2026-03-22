import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { PortalProvider } from "../context/PortalContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Gajraula Eats - Owner Portal",
  description: "Manage your restaurant, orders, and menu with ease.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex selection:bg-brand-500 selection:text-white bg-background text-foreground">
        <PortalProvider>
          <div className="flex w-full min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 min-h-screen">
              <Header />
              <main className="p-8 flex-1 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </PortalProvider>
      </body>
    </html>
  );
}