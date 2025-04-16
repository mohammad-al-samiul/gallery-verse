"use client";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="ml-[240px] pt-[64px] p-4">{children}</main>
    </div>
  );
}
