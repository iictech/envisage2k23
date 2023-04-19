import React from "react";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import "./team/styles.css"
import Title from "@/app/components/Title";

export default function Contact() {
  return (
    <>
      <title>Contact Us - Envisage 23</title>
      <div
        className="overflow-x-hidden all">
        <div>
          <Title title="Contact" />
        </div>
        <div className="relative w-full px-20 pb-20 pt-8">
          <div className="text-bold flex items-center justify-center text-4xl font-medium text-white">
            <h2 className="mt-0 pb-2.5 font-medium">Let&apos;s get in touch</h2>
          </div>
          <div className="relative grid grid-cols-3 gap-x-8">
            <div className="col-span-2 mt-3 rounded-3xl bg-white shadow-lg [padding:40px]">
              <h3 className="mb-4 text-2xl font-medium text-blue-900">Send a Message</h3>
              <form
                className="rounded-3xl"
                action="https://formsubmit.co/subha9.5roy350@gmail.com"
                method="POST"
              >
                <div className="relative w-full">
                  <div className="flex gap-5">
                    <div className="mb-2.5 flex w-6/12 flex-col">
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
                    <div className="mb-2.5 flex w-6/12 flex-col">
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

                  <div className="flex gap-5">
                    <div className="mb-2.5 flex w-6/12 flex-col">
                      <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">
                        Email
                      </span>
                      <input
                        className="[border:1px solid #333] rounded-md p-2.5 text-lg [outline:none]"
                        type="text"
                        name="email"
                        placeholder="stevejobs@email.com"
                      />
                    </div>
                    <div className="mb-2.5 flex w-6/12 flex-col">
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

                  <div className="w-full">
                    <div className="mb-2.5 flex w-full flex-col">
                      <span className="mb-1.5 mt-2.5 font-medium text-cyan-500">
                        Message
                      </span>
                      <textarea
                        className="w-full[border:1px solid #333] mb-2 resize-none rounded-md p-2 text-lg [outline:none] [min-height:220px]"
                        placeholder="Write your message here..."
                        name="msg"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mb-2.5 flex w-6/12 flex-col">
                      <input
                        className="text-bold [padding:14px 15px] mt-5 cursor-pointer rounded-md border-none bg-pink-400 text-lg font-medium text-white [max-width:120px] [min-height:50px] hover:bg-pink-600"
                        type="submit"
                        value="Send"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-span-1 mt-3 flex flex-col gap-y-4">
              <div className="rounded-3xl bg-blue-950 px-8 pb-4 pt-8">
                <h3 className="pb-4 text-2xl text-white">Contact Info</h3>
                <div className="pb-0">
                  <div className="mb-2.5 flex items-center">
                    <span className="mr-4 flex h-10 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white [min-width:40px]">
                      <IoLocationSharp />
                    </span>
                    <p className="text-lg text-white">
                      Techno Main Salt Lake
                      <br />
                      Kolkata - 7000091
                    </p>
                  </div>
                  <div className="mb-2.5 flex items-center">
                    <span className="mr-4 flex h-10 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white [min-width:40px]">
                      <IoMail />
                    </span>
                    <a
                      className="text-lg text-white no-underline"
                      href="mailto:iic.tmsl@gmail.com"
                    >
                      iic.tmsl@gmail.com
                    </a>
                  </div>
                  <div className="mb-2.5 flex items-center">
                    <span className="mr-4 flex h-10 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white [min-width:40px]">
                      <IoCall />
                    </span>
                    <a
                      className="text -lg text-white no-underline"
                      href="tel:+9185150 05676"
                    >
                      85150 05676
                    </a>
                  </div>
                  <ul className="mt-3.5 flex gap-2 pb-2">
                    <li className="mt-4 list-none">
                      <a
                        className="text-3xl text-neutral-400 hover:text-white"
                        href="https://www.facebook.com/iictmsl/"
                        target="_blank"
                      >
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li className="mt-4 list-none">
                      <a
                        className="text-3xl text-neutral-400 hover:text-white"
                        href="https://twitter.com/iictmsl"
                        target="_blank"
                      >
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li className="mt-4 list-none">
                      <a
                        className="text-3xl text-neutral-400 hover:text-white"
                        href="https://www.linkedin.com/company/iictmsl/mycompany/"
                        target="_blank"
                      >
                        <IoLogoLinkedin />
                      </a>
                    </li>
                    <li className="mt-4 list-none">
                      <a
                        className="text-3xl text-neutral-400 hover:text-white"
                        href="https://www.instagram.com/iictmsl/"
                        target="_blank"
                      >
                        <IoLogoInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-full w-full overflow-hidden rounded-3xl p-0">
                <iframe
                  className="h-full w-full rounded-3xl"
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
