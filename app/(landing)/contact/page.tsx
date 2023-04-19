import React from 'react'
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5"
import { IoCall } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io5"
import { IoLogoTwitter } from "react-icons/io5"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoLinkedin } from "react-icons/io5"


export default function Contact() {
     return (
          <><div className='overflow-x-hidden rounded-3xl
          bg-gradient-to-r from-blue-900 to-blue-400'>
               <div className="relative w-full pt-8 px-20 pb-20">
                    <div className="flex justify-center items-center text-4xl text-white text-bold font-medium">
                         <h2 className='mt-0 pb-2.5 font-medium'>Let's get in touch</h2>
                    </div>
                    <div className="relative grid grid-cols-3 gap-x-8">
                         <div className="col-span-2 [padding:40px] bg-white rounded-3xl mt-3 shadow-lg">
                              <h3 className='text-blue-900 font-medium text-2xl mb-4'>Send a Message</h3>
                              <form className="rounded-3xl" action="https://formsubmit.co/subha9.5roy350@gmail.com" method="POST">
                                   <div className="relative w-full">
                                        <div className="flex gap-5">
                                             <div className="flex flex-col mb-2.5 w-6/12">
                                                  <span className='text-cyan-500 mt-2.5 mb-1.5 font-medium'>First Name</span>
                                                  <input className='p-2.5 rounded-md text-lg [outline:none] [border:1px solid #333]' type="text" name="fname" placeholder="Steve" />
                                             </div>
                                             <div className="flex flex-col mb-2.5 w-6/12">
                                                  <span className='text-cyan-500 mt-2.5 mb-1.5 font-medium'>Last Name</span>
                                                  <input className='p-2.5 rounded-md text-lg [outline:none] [border:1px solid #333]' type="text" name="lname" placeholder="Jobs" />
                                             </div>
                                        </div>


                                        <div className="flex gap-5">
                                             <div className="flex flex-col mb-2.5 w-6/12">
                                                  <span className='text-cyan-500 mt-2.5 mb-1.5 font-medium'>Email</span>
                                                  <input className='p-2.5 rounded-md text-lg [outline:none] [border:1px solid #333]' type="text" name="email" placeholder="stevejobs@email.com" />
                                             </div>
                                             <div className="flex flex-col mb-2.5 w-6/12">
                                                  <span className='text-cyan-500 mt-2.5 mb-1.5 font-medium'>Mobile</span>
                                                  <input className='p-2.5 rounded-md text-lg [outline:none] [border:1px solid #333]' type="text" name="phno" placeholder="+91 989 989 9898" />
                                             </div>
                                        </div>

                                        <div className="w-full">
                                             <div className="flex flex-col mb-2.5 w-full">
                                                  <span className='text-cyan-500 mt-2.5 mb-1.5 font-medium'>Message</span>
                                                  <textarea className='p-2 rounded-md resize-none mb-2 text-lg [outline:none] [min-height:220px] w-full[border:1px solid #333]' placeholder="Write your message here..." name="msg"></textarea>
                                             </div>
                                        </div>

                                        <div className="w-full">
                                             <div className="flex flex-col mb-2.5 w-6/12">
                                                  <input className="bg-pink-400 text-white text-bold font-medium cursor-pointer mt-5 text-lg border-none [max-width:120px] [min-height:50px] [padding:14px 15px] rounded-md hover:bg-pink-600" type="submit" value="Send" />
                                             </div>
                                        </div>
                                   </div>
                              </form>
                         </div>

                         <div className='col-span-1 gap-y-4 flex flex-col mt-3'>
                              <div className="bg-blue-950 rounded-3xl px-8 pt-8 pb-4">
                                   <h3 className='text-white text-2xl pb-4'>Contact Info</h3>
                                   <div className='pb-0'>
                                        <div className='flex items-center mb-2.5'>
                                             <span className='bg-cyan-500 flex justify-center items-center text-2xl rounded-full mr-4 text-white h-10 [min-width:40px]'><IoLocationSharp /></span>
                                             <p className='text-white text-lg'>Techno Main Salt Lake<br />Kolkata - 7000091</p>
                                        </div>
                                        <div className='flex items-center mb-2.5'>
                                             <span className='bg-cyan-500 flex justify-center items-center text-2xl rounded-full mr-4 text-white h-10 [min-width:40px]'><IoMail /></span>
                                             <a className='text-white text-lg no-underline' href="mailto:iic.tmsl@gmail.com">iic.tmsl@gmail.com</a>
                                        </div>
                                        <div className='flex items-center mb-2.5'>
                                             <span className='bg-cyan-500 flex justify-center items-center text-2xl rounded-full mr-4 text-white h-10 [min-width:40px]'><IoCall /></span>
                                             <a className='text-white text -lg no-underline' href="tel:+9185150 05676">85150 05676</a>
                                        </div>
                                        <ul className="mt-3.5 flex gap-2 pb-2">
                                             <li className='list-none mt-4'><a className='text-neutral-400 text-3xl hover:text-white' href="https://www.facebook.com/iictmsl/" target="_blank"><IoLogoFacebook /></a></li>
                                             <li className='list-none mt-4'><a 
                                             className='text-neutral-400 text-3xl hover:text-white' href="https://twitter.com/iictmsl" target="_blank"><IoLogoTwitter /></a></li>
                                             <li className='list-none mt-4'><a className='text-neutral-400 text-3xl hover:text-white' href="https://www.linkedin.com/company/iictmsl/mycompany/" target="_blank"><IoLogoLinkedin /></a></li>
                                             <li className='list-none mt-4'><a className='text-neutral-400 text-3xl hover:text-white' href="https://www.instagram.com/iictmsl/" target="_blank"><IoLogoInstagram /></a></li>
                                        </ul>
                                   </div>
                              </div>


                              <div className="rounded-3xl p-0 w-full h-full overflow-hidden">
                                   <iframe className='rounded-3xl w-full h-full'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0784057117116!2d88.42445437522129!3d22.576170679489138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1681615671904!5m2!1sen!2sin"
                                        style={{ border: 0 }} allowFullScreen={false} loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade" />
                              </div>
                         </div>
                    </div>
               </div>
          </div></>
     )
}

