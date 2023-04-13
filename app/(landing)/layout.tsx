"use client";

import NavBar from "@/app/components/layout/NavBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-white">
      <NavBar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">{children}</div>
      </div>
    </div>
  );
}
