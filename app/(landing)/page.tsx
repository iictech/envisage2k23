"use client";

import {
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Notify from "@/app/components/Notify";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <title>Home - Envisage 23</title>
      <main className="">
        <div className="max-h-auto h-auto bg-gradient-to-bl from-slate-800 to-black py-28 pt-10 sm:pb-12">
          <Notify />
          <div className="mx-auto max-w-6xl rounded-2xl p-8 text-white sm:rounded-3xl sm:px-28 sm:py-2 sm:pt-8 sm:pb-20">
            <div className="mx-auto max-w-4xl">
              <h1 className="pb-4 text-center text-base font-semibold tracking-widest text-zinc-100 sm:pb-10 sm:text-xl">
                PRESENTING
              </h1>
              <h1 className="pb-12 text-center text-5xl font-black uppercase sm:text-8xl">
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
        <section className="py-28">
          <p className="marquee marquee1">
            <span className="text-9xl font-black normal-case tracking-tight text-blue-600">
              Welcome to Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23
            </span>
          </p>
          <p className="marquee marquee2">
            <span className="font-decoration1 text-9xl normal-case tracking-tight">
              Welcome to Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23
            </span>
          </p>
          <p className="marquee marquee3">
            <span className="text-9xl font-black normal-case tracking-tight text-blue-600">
              Welcome to Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23 Welcome to Envisage&rsquo; 2K23 Welcome to
              Envisage&rsquo; 2K23
            </span>
          </p>
        </section>
        <section className="text-gray-600">
          <div className="container mx-auto px-5 py-20 sm:pb-32">
            <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
              <h1 className="text-2xl font-extrabold text-gray-900 sm:text-6xl">
                Why take part in
                <br />
                Envisage&rsquo; 2K23?
              </h1>
            </div>
            <div className="-m-4 mx-auto flex max-w-6xl cursor-pointer flex-wrap">
              <div className="p-4 md:w-1/2">
                <div className="rounded-lg border border-gray-200 p-6 shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:border-2 hover:border-blue-600 hover:shadow-xl">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <UserPlusIcon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    Expert Speakers
                  </h2>
                  <p className="text-base leading-relaxed">
                    We have invited some of the best speakers from the industry to share
                    their knowledge and experience with you.
                  </p>
                </div>
              </div>

              <div className="p-4 md:w-1/2">
                <div className="rounded-lg border border-gray-200 p-6 shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:border-2 hover:border-blue-600 hover:shadow-xl">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <UserGroupIcon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">Networking</h2>
                  <p className="text-base leading-relaxed">
                    You will get a chance to interact with some of the best minds in the
                    industry.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2">
                <div className="rounded-lg border border-gray-200 p-6 shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:border-2 hover:border-blue-600 hover:shadow-xl">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <TrophyIcon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">Prizes</h2>
                  <p className="text-base leading-relaxed">
                    We have some exciting prizes for you to win.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2">
                <div className="rounded-lg border border-gray-200 p-6 shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:border-2 hover:border-blue-600 hover:shadow-xl">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">Live QnA</h2>
                  <p className="text-base leading-relaxed">
                    You will get a chance to ask your questions to the speakers.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-8 mt-14 flex flex-col justify-center sm:flex-row">
              <button
                className="block rounded-lg bg-blue-600 px-6 py-4 text-center text-base font-semibold uppercase tracking-tight text-zinc-100 active:scale-95 sm:px-12 sm:text-xl"
                onClick={() => router.push("/signup")}
              >
                Register Now
              </button>
            </div>
          </div>
        </section>
        <section className="pb-28">
          <div
            className="mx-6 h-auto rounded-3xl bg-gradient-to-bl from-slate-800 to-black py-14 sm:mx-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mx-auto max-w-6xl rounded-2xl p-8 text-white sm:rounded-3xl">
              <div className="mx-auto max-w-4xl">
                <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-6xl">
                  Wanna be a part of the <br className="hidden sm:visible" />
                  biggest E-Summit of Kolkata?
                </h1>
                <div className="mt-14 flex flex-col justify-center sm:flex-row">
                  <button
                    className="block rounded-lg bg-blue-600 px-6 py-4 text-center text-base font-semibold uppercase tracking-tight text-zinc-100 active:scale-95 sm:px-12 sm:text-xl"
                    onClick={() => router.push("/signup")}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
