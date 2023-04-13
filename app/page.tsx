"use client";

import GoogleLogout from "@/components/GoogleLogout";
import GoogleSignIn from "@/components/GoogleSignIn";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";

export default function Home() {
  const { user } = useAuthContext() as { user: User | null };

  return (
    <main>
      <h1 className="text-xl font-bold">Home</h1>
      {!user ? <GoogleSignIn text="Sign in with Google" /> : <GoogleLogout />}
    </main>
  );
}
