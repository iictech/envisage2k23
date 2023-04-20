import Logo from "@/app/components/Logo";
import Title from "@/app/components/Title";
import events from "@/data/events.json";
import "./../team/style.css";

export default function PartnersPage() {
  return (
    <>
      <title>Partner with Us - Envisage 23</title>
      <div className="all overflow-x-hidden">
        <Title title="Partner with Us" />
        <section className="mx-auto max-w-5xl px-4 py-20 sm:pt-10">
          <div className="mx-auto mb-10 flex flex-col bg-gray-900 items-center gap-y-4 rounded-3xl p-10 text-black transition-all duration-200 ease-in-out hover:scale-95 hover:shadow-2xl hover:ring-4 hover:ring-blue-900 hover:ring-offset-8 sm:flex-row">
            <div className="sm:h-84 sm:w-84 inline-flex h-72 w-72 flex-shrink-0 items-center justify-center">
              <Logo className="h-60 w-60" />
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl text-sky-400 font-bold tracking-tight sm:text-5xl">
                What is Envisage?
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-white sm:text-left sm:text-xl">
                Envisage is the official E-Summit of Techno Main Salt Lake. It is born out
                of the dreams and aspirations of the youth who have the zest and the zeal
                to take their future into their own hands. Supporting the growing startup
                culture in the country, we are promised to inculcate and identify the best
                ideas and b-plans.
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-6 pt-12 text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Our List of Events
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="cursor-pointer rounded-md border bg-white p-4 text-center text-lg font-semibold shadow transition-all duration-200 ease-in-out hover:bg-gray-900 hover:text-white hover:shadow-xl"
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-12">
            <button className="block rounded-lg bg-gray-900 px-6 py-4 text-center text-base font-semibold uppercase tracking-tight text-zinc-100 hover:bg-blue-900 active:scale-95 sm:px-12 sm:text-xl">
              Join as a Event Partner
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
