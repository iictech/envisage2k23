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
      <main className="flex h-full w-screen bg-gray-100">
        <div className="flex w-full flex-col bg-white sm:m-auto sm:max-w-sm sm:rounded-xl sm:shadow-xl">
          <div
            className="h-48 w-full bg-gradient-to-l
          from-pink-300 via-purple-300 to-cyan-400 sm:rounded-t-xl lg:h-56"
          ></div>
          <div className="mx-auto -mt-12 max-w-5xl flex-col px-4 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 sm:px-6 lg:px-8">
            <div className="group relative mx-auto h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
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
              <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Welcome to Envisage 23,
              </h2>
            </div>
          </div>
          <div className="mx-auto px-8">
            <div className="mb-12 mt-4 flex flex-col items-center justify-center">
              <GoogleButton text="Sign Up with Google" />
              <p className="mt-2 text-center text-xs text-gray-500 sm:text-sm">
                Already have an account?
                <Link
                  href="/login"
                  className="px-1 font-medium text-gray-900 hover:underline"
                  rel="noopener noreferrer"
                >
                  Sign In
                </Link>
              </p>
              <p className="mt-6 text-center text-xs text-gray-500">
                By continuing, you agree to our
                <a
                  href="/legal/terms"
                  className="px-1 font-medium text-gray-900 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
                and
                <a
                  href="/legal/privacy"
                  className="px-1 font-medium text-gray-900 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    );

  return router.push("/dashboard");
}
