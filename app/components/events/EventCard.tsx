/* eslint-disable @next/next/no-img-element */
import { EventProps } from "@/lib/types";
import Image from "next/image";

export default function EventCard({ event }: { event: EventProps }) {
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 border-opacity-60 shadow-lg transition-all duration-300 ease-in-out hover:scale-95 hover:border-blue-600">
        <Image
          className="aspect-square w-full object-cover object-center"
          src={event.image}
          alt={event.title}
          width={240}
          height={300}
          quality={100}
        />
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-400">
            {event.category}
          </h2>
          <h1 className="mb-3 text-xl font-semibold text-gray-900">{event.title}</h1>
          <p className="mb-3 leading-relaxed">{event.description}</p>
          <div className="flex flex-wrap items-center ">
            <a
              href="https://forms.gle/cheDryRsxBy4R2jv6"
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
