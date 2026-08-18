import { NavBar } from "@/components/customer/NavBar";
import React from "react";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar/>

      <main>{children}</main>
    </div>
  );
}