"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
}
