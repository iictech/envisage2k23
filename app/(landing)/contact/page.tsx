import Title from "@/app/components/Title";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import "./../team/style.css";

export default function ContactPage() {
  return (
    <>
      <title>Contact Us - Envisage 23</title>
      <div className="all overflow-x-hidden">
        <Title title="Let's get in touch" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-20">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8">
            <div className="col-span-2 mt-3 rounded-2xl bg-white p-6 shadow-lg sm:p-10">
              <h3 className="mb-4 text-2xl font-medium text-blue-900">Send a Message</h3>
              <form action="https://formsubmit.co/subha9.5roy350@gmail.com" method="POST">
                <div className="flex flex-col gap-x-5 sm:flex-row">
                  <div className="mb-2.5 flex flex-col sm:w-6/12">
                    <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">
                      First Name
                    </span>
                    <input
                      className="[border:1px solid #333] rounded-md p-2.5 text-lg [outline:none]"
                      type="text"
                      name="fname"
                      placeholder="Steve"
                    />
                  </div>
                  <div className="mb-2.5 flex flex-col sm:w-6/12">
                    <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">
                      Last Name
                    </span>
                    <input
                      className="[border:1px solid #333] rounded-md p-2.5 text-lg [outline:none]"
                      type="text"
                      name="lname"
                      placeholder="Jobs"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-x-5 sm:flex-row">
                  <div className="mb-2.5 flex flex-col sm:w-6/12">
                    <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">Email</span>
                    <input
                      className="[border:1px solid #333] rounded-md p-2.5 text-lg [outline:none]"
                      type="text"
                      name="email"
                      placeholder="stevejobs@email.com"
                    />
                  </div>
                  <div className="mb-2.5 flex flex-col sm:w-6/12">
                    <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">
                      Mobile
                    </span>
                    <input
                      className="[border:1px solid #333] rounded-md p-2.5 text-lg [outline:none]"
                      type="text"
                      name="phno"
                      placeholder="+91 989 989 9898"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col">
                  <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">Message</span>
                  <textarea
                    className="w-full[border:1px solid #333] mb-2 resize-none rounded-md p-2 text-lg [outline:none] [min-height:220px]"
                    placeholder="Write your message here..."
                    name="msg"
                  />
                </div>

                <div className="w-full">
                  <button
                    className="mt-5 flex w-full cursor-pointer justify-center rounded-lg border-none bg-blue-900 py-3 text-center text-xl font-semibold text-white hover:bg-blue-600"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-1 mt-3 flex w-full flex-col gap-y-8">
              <div className="rounded-2xl bg-blue-950 px-8 pb-4 pt-8">
                <h3 className="pb-4 text-2xl text-white">Contact Info</h3>
                <div className="flex flex-col gap-y-2.5 pb-0">
                  <div className="flex items-center">
                    <span className="mr-4 flex h-10 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white [min-width:40px]">
                      <MapPinIcon className="h-6 w-6" />
                    </span>
                    <p className="text-lg text-white">
                      Techno Main Salt Lake
                      <br />
                      Kolkata - 7000091
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4 flex h-10 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white [min-width:40px]">
                      <EnvelopeIcon className="h-5 w-5" />
                    </span>
                    <a
                      className="text-lg text-white no-underline"
                      href="mailto:iic.tmsl@gmail.com"
                    >
                      iic.tmsl@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4 flex h-10 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white [min-width:40px]">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <a
                      className="text -lg text-white no-underline"
                      href="tel:+9185150 05676"
                    >
                      85150 05676
                    </a>
                  </div>
                  <ul className="mt-4 flex list-none gap-2 pb-2">
                    <li>
                      <a
                        className="text-3xl text-neutral-300 transition-all duration-200 ease-in-out hover:text-white"
                        href="https://www.facebook.com/iictmsl/"
                        target="_blank"
                      >
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-3xl text-neutral-300 transition-all duration-200 ease-in-out hover:text-white"
                        href="https://twitter.com/iictmsl"
                        target="_blank"
                      >
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-3xl text-neutral-300 transition-all duration-200 ease-in-out hover:text-white"
                        href="https://www.linkedin.com/company/iictmsl/mycompany/"
                        target="_blank"
                      >
                        <IoLogoLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-3xl text-neutral-300 transition-all duration-200 ease-in-out hover:text-white"
                        href="https://www.instagram.com/iictmsl/"
                        target="_blank"
                      >
                        <IoLogoInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-full w-full overflow-hidden rounded-2xl p-0">
                <iframe
                  className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0784057117116!2d88.42445437522129!3d22.576170679489138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1681615671904!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
