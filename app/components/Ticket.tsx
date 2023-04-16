import { UserData } from "@/lib/types";
import {
  AcademicCapIcon,
  MapPinIcon,
  PhoneIcon,
  TicketIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { QRCodeSVG } from "qrcode.react";

export default function Ticket({ userData }: { userData: UserData | null }) {
  return (
    <div className="px-4">
      <h1 className="pb-4 text-center text-xl font-semibold">Your Ticket</h1>
      <div className="mx-auto w-full max-w-3xl rounded-2xl border-2 bg-white p-10 shadow-lg">
        <div className="flex flex-col items-center justify-between gap-y-6 sm:flex-row">
          <div className="flex flex-row items-center gap-x-6">
            <div>
              <div>
                <h1 className="text-4xl font-black">
                  ENVISAGE&rsquo;
                  <span className="pl-2 text-blue-600">23</span>
                </h1>
                <h1 className="text-base font-semibold text-gray-500">
                  4th-9th May, 2023
                </h1>
              </div>

              <div className="flex items-center gap-x-2 pt-4 text-xl font-semibold text-gray-800">
                <UserCircleIcon className="h-5 w-5" />
                {userData?.name}
              </div>

              <div className="flex flex-row gap-x-4">
                <div className="flex items-center gap-x-2 text-base font-semibold text-gray-600">
                  <AcademicCapIcon className="h-5 w-5" />
                  {userData?.college}
                </div>
                <div className="flex items-center gap-x-2 text-base font-semibold text-gray-600">
                  <PhoneIcon className="h-5 w-5" />
                  {userData?.phoneNumber}
                </div>
              </div>

              <div className="flex items-start gap-x-2 pt-3 text-base font-semibold text-gray-600">
                <MapPinIcon className="h-5 w-5" />
                Techno Main Salt Lake
                <br />
                EM-4/1, EM Block, Sector V, Bidhannagar, Kolkata,
                <br />
                West Bengal 700091
              </div>

              <div className="flex items-center gap-x-2 pt-2 text-xl font-bold text-gray-900">
                <TicketIcon className="h-6 w-6" />
                {userData?.evgId}
              </div>
            </div>
          </div>
          <QRCodeSVG
            value={`https://envisage23.vercel.app/verify?ticketId=${userData?.evgId}`}
            size={180}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            imageSettings={{
              src: "/envisage.svg",
              x: undefined,
              y: undefined,
              height: 48,
              width: 36,
              excavate: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
