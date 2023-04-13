"use client";

import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head />
      <body className="h-full">
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
