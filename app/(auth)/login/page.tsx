/* eslint-disable @next/next/no-img-element */
"use client";

import GoogleButton from "@/app/components/buttons/GoogleButton";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuthContext() as { user: User | null };

  const router = useRouter();

  if (!user)
    return (
      <>
        <title>Login - Envisage 23</title>
        <main className="flex h-full w-screen bg-gray-100">
          <div className="flex w-full flex-col bg-white sm:m-auto sm:max-w-sm sm:rounded-xl sm:shadow-xl">
            <div className="h-48 w-full bg-gradient-to-bl from-cyan-300 to-blue-700 sm:rounded-t-xl lg:h-56" />
            <div className="mx-auto -mt-16 max-w-5xl flex-col px-4 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 sm:px-6 lg:px-8">
            <div className="group relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <img
                  alt="Profile Picture"
                  src={"https://source.unsplash.com/random/100x100/?abstract"}
                  width="300"
                  height="300"
                  decoding="async"
                  data-nimg="1"
                  className="scale-100 blur-0 grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Welcome back,
                </h2>
              </div>
            </div>
            <div className="mx-auto px-8">
              <div className="mb-12 mt-6 flex flex-col items-center justify-center">
                <GoogleButton text="Continue with Google" />
                <p className="mt-4 text-center text-sm text-gray-400 sm:text-xs">
                  By continuing, you agree to our
                  <a
                    href="/legal/terms"
                    className="px-1 font-medium text-gray-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    href="/legal/privacy"
                    className="px-1 font-medium text-gray-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <p className="mt-6 text-center text-base text-gray-500 sm:text-sm">
                  Don&apos;t have an account?
                  <Link
                    href="/signup"
                    className="px-1 font-semibold text-blue-600 hover:underline"
                    rel="noopener noreferrer"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </>
    );

  return router.push("/dashboard");
}
