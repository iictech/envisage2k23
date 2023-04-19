import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto flex-shrink-0 text-center sm:w-96 md:mx-0 md:text-left">
          <a
            href="/"
            className="flex items-center justify-center font-medium text-white md:justify-start"
          >
            <Logo className="h-12 w-12" />
            <span className="ml-3 text-3xl font-extrabold">
              ENVISAGE&rsquo; <span className="text-blue-600">23</span>
            </span>
          </a>
          <p className="mt-2 text-xs text-gray-500 sm:text-base">
            The Official E-Summit of
            <br className="visible sm:hidden" />
            Techno Main Salt Lake.
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-3 text-base font-bold tracking-widest text-white ">
              QUICK LINKS
            </h2>
            <nav className="mb-10 flex list-none flex-col gap-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-400 hover:text-gray-200">
                  Team
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-gray-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/sponsors" className="text-gray-400 hover:text-gray-200">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-400 hover:text-gray-200">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-3 text-base font-bold tracking-widest text-white ">
              LEGAL
            </h2>
            <nav className="mb-10  flex list-none flex-col gap-y-2">
              <li>
                <a href="/legal/privacy" className="text-gray-400 hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/terms" className="text-gray-400 hover:text-gray-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/legal/refund" className="text-gray-400 hover:text-gray-200">
                  Refund Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-3 text-base font-bold tracking-widest text-white ">
              IIC TMSL
            </h2>
            <nav className="mb-10 flex list-none flex-col gap-y-2">
              <li>
                <a
                  href="https://iictmsl.com"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-200"
                >
                  iictmsl.com
                </a>
              </li>
              <li>
                <a
                  href="https://iictmsl.com/about"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://iictmsl.com/#aim"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Our Aim
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            &copy; {new Date().getFullYear()} Envisage - All rights reserved.
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://www.facebook.com/iictmsl/"
              target="_blank"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/iictmsl"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/iictmsl/"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/iictmsl/mycompany/"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
