"use client";

import NavBar from "@/app/components/layout/NavBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <div className="relative isolate pt-20">{children}</div>
      </div>
    </>
  );
}
