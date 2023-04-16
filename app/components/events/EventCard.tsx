/* eslint-disable @next/next/no-img-element */
import { EventProps } from "@/lib/types";

export default function EventCard({ event }: { event: EventProps }) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 border-opacity-60 shadow-lg transition-all duration-300 ease-in-out hover:scale-95 hover:border-blue-600">
        <img
          className="aspect-square w-full object-cover object-center md:h-36 lg:h-48"
          src={event.image}
          alt={event.title}
        />
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-400">
            {event.category}
          </h2>
          <h1 className="mb-3 text-2xl font-semibold text-gray-900">{event.title}</h1>
          <p className="mb-3 leading-relaxed">{event.description}</p>
          <div className="flex flex-wrap items-center ">
            <a
              href="#"
              className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
            >
              Register Now
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
