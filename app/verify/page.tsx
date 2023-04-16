"use client";

import { db } from "@/firebase/config";
import { Dialog, Transition } from "@headlessui/react";
import { TicketIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

function IsVerified({ ticketId }: { ticketId: string }) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    try {
      const q = query(collection(db, "users_test"), where("evgId", "==", ticketId));
      const verify = async () => {
        await getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setIsVerified(true);
          });
        });
      };
      verify();
    } catch (error) {
      console.log(error);
    }
  }, [ticketId]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mx-auto flex-col justify-center sm:flex">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                      {isVerified ? (
                        <CheckCircleIcon
                          className="h-12 w-12 text-green-600"
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircleIcon
                          className="h-12 w-12 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        {isVerified ? "Valid" : "Invalid"}
                      </Dialog.Title>

                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {isVerified ? (
                            <span>Your ticket is valid.</span>
                          ) : (
                            <span>This ticket is not valid.</span>
                          )}
                        </p>
                        {isVerified ? (
                          <div className="mt-4 flex justify-center gap-x-2">
                            <TicketIcon className="h-6 w-6" />
                            <p>{ticketId}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                {isVerified ? (
                  <div className="w-full justify-center bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm outline-none hover:bg-green-700 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Okay
                    </button>
                  </div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default function VerifyTicket() {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("ticketId");

  // URL -> `/verify?ticketId=23EVG123`
  // `ticketId` -> '23EVG123'

  const router = useRouter();

  useEffect(() => {
    if (!ticketId) {
      router.push("/");
    }
  }, [ticketId, router]);

  return (
    <>
      <title>Verify</title>
      <meta name="robots" content="noindex" />
      <>
        {ticketId ? (
          <div>
            <IsVerified ticketId={ticketId} />
          </div>
        ) : null}
      </>
    </>
  );
}
