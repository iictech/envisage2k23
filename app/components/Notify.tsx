export default function Notify() {
  return (
    <div className="isolate mx-4 flex items-center justify-center gap-x-6 overflow-hidden rounded-lg bg-blue-100 p-2 py-2.5 sm:mx-auto sm:max-w-2xl sm:px-3.5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="mx-auto text-sm leading-6 text-gray-900">
          <strong className="font-semibold">ENVISAGE 23</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Partner Registration Open Now !
        </p>
        <a
          href="/partners"
          className="mx-auto flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register Now
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
