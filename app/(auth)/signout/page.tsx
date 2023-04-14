"use client";

import GoogleLogout from "@/app/components/buttons/GoogleLogout";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuthContext() as { user: User | null };

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (user)
    return (
      <>
        <title>Sign Out - Envisage 23</title>
        <main className="flex h-full w-screen bg-gray-100">
          <div className="flex w-full flex-col bg-white sm:m-auto sm:max-w-sm sm:rounded-xl sm:shadow-xl">
            <div className="mx-auto max-w-5xl flex-col px-4 sm:flex sm:items-end sm:space-x-5 sm:px-6 lg:px-8">
              <div>
                <h2 className="mt-12 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Are you sure you want to sign out?
                </h2>
              </div>
            </div>
            <div className="mx-auto px-8">
              <div className="my-4 mb-12 flex flex-col items-center justify-center">
                <GoogleLogout />
              </div>
            </div>
          </div>
        </main>
      </>
    );
}
