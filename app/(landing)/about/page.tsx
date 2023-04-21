import Logo from "@/app/components/Logo";
import Title from "@/app/components/Title";
import "./../team/style.css"
import Image from "next/image"


export default function AboutPage() {
  return (
    <>
      <title>About - Envisage 23</title>
      <div className="all overflow-x-hidden">
        <Title title="About" />
        <section className="mx-auto max-w-5xl px-4 py-20 sm:pt-10">
          <div className="mx-auto mb-10 flex flex-col items-center gap-y-4 rounded-3xl bg-gray-900 p-10 text-white transition-all duration-200 ease-in-out hover:scale-95 hover:shadow-2xl hover:ring-4 hover:ring-blue-500 hover:ring-offset-8 sm:flex-row">
            <div className="inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:h-96 sm:w-96">
              <Logo className="h-72 w-72" />
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                What is Envisage?
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-400 sm:text-left sm:text-xl">
                Envisage is the official E-Summit of Techno Main Salt Lake. It is born out
                of the dreams and aspirations of the youth who have the zest and the zeal
                to take their future into their own hands. Supporting the growing startup
                culture in the country, we are promised to inculcate and identify the best
                ideas and b-plans. Envisage is the platform for budding entrepreneurs to
                showcase the power of their ideas and to be appreciated and mentored by
                the best in the fields. So come along be a part of this wonderful and
                exciting journey.
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center sm:flex-row">
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Our Goal
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 sm:text-left sm:text-xl">
                Our goal is to provide a platform for budding entrepreneurs to showcase
                the power of their ideas and to be appreciated and mentored by the best in
                the fields.
              </p>
            </div>
            <div className="order-first inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-96 sm:w-96">
              <Image src={"./images/poster.png"} alt=""/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
