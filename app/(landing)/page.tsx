"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <title>Home - Envisage 23</title>
      <main className="sm:px-6">
        <div className="max-h-auto mb-10 h-auto bg-gradient-to-bl from-slate-800 to-black py-28 pt-32 sm:rounded-3xl sm:pb-12">
          <div className="mx-auto max-w-6xl rounded-2xl p-8 text-white sm:rounded-3xl sm:px-28 sm:py-2 sm:pb-20">
            <div className="mx-auto max-w-4xl">
              <h1 className="pb-4 text-center text-base font-semibold tracking-widest text-zinc-100 sm:pb-10 sm:text-xl">
                PRESENTING
              </h1>
              <h1 className="pb-12 text-center text-5xl font-black uppercase sm:text-7xl">
                Envisage&rsquo;
                <span className="pl-4 text-blue-600">23</span>
              </h1>
              <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-5xl">
                The Official
                <br className="visible sm:hidden" />
                <span className="px-2 text-blue-600">E-Summit</span>of Techno Main Salt
                Lake.
              </h1>
              <div className="mt-14 flex flex-col justify-center gap-y-8 sm:flex-row sm:gap-x-6">
                <button
                  className="block rounded-lg bg-blue-600 px-6 py-4 text-center text-base font-semibold uppercase tracking-tight text-zinc-100 active:scale-95 sm:px-12 sm:text-xl"
                  onClick={() => router.push("/signup")}
                >
                  Register Now
                </button>
                <button
                  className="block rounded-lg border-2 px-6 py-4 text-center text-base font-semibold uppercase tracking-tight text-zinc-100 transition-all duration-150 ease-in-out hover:border-blue-600 hover:bg-blue-600 active:scale-95 sm:px-12 sm:text-xl"
                  onClick={() => router.push("/about")}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
