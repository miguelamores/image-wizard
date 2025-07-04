import HeaderNav from "@/components/shared/HeaderNav";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <HeaderNav />

      {/* Main content */}
      <main className="min-h-screen pt-4">{children}</main>

      <Toaster />
    </div>
  );
};

export default Layout;
