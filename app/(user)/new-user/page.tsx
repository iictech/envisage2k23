/* eslint-disable @next/next/no-img-element */
"use client";

import { useAuthContext } from "@/context/AuthContext";
import statesList from "@/data/data.json";
import { getUserData, updateUserData } from "@/lib/firestore";
import { Cities, UserData } from "@/lib/types";
import { generateId } from "@/lib/utils";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useAuthContext() as { user: User | null };
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  // display cities based on state code selected

  const [cities, setCities] = useState<Cities[] | undefined>([]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const stateCode = e.target.value;
    const state = statesList.find((state) => state.state_code === stateCode)?.name;
    setState(state || "");
    const stateCities = statesList.find(
      (state) => state.state_code === stateCode
    )?.cities;
    setCities(stateCities);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const city = e.target.value;
    setCity(city);
    setIsValid(true);
  };

  useEffect(() => {
    try {
      getUserData("users_test", user?.uid as string).then((doc: UserData | any) => {
        setUserData(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    if (userData) {
      if (userData.isNewUser === true) {
        setPhoneNumber(userData.phoneNumber);
        setState(userData.state);
        setCity(userData.city);
        setCollege(userData.college);
      } else router.push("/dashboard");
    }
  }, [userData, router]);

  const handleAddUserData = async () => {
    const data = {
      evgId: generateId(),
      phoneNumber,
      college,
      state,
      city,
      isNewUser: false,
    };

    try {
      await updateUserData("users_test", user?.uid as string, data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="mx-auto flex max-w-2xl flex-col rounded-xl shadow-xl">
        <div
          className="h-48 w-full rounded-t-xl
          bg-gradient-to-l from-pink-300 via-purple-300 to-cyan-400 lg:h-64"
          style={
            {
              backgroundImage: "url(https://source.unsplash.com/random/?abstract)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            } as React.CSSProperties
          }
        ></div>
        <div className="mx-auto -mt-12 max-w-5xl flex-col px-4 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 sm:px-6 lg:px-8">
          <div className="group relative mx-auto h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
            <img
              alt="Profile Picture"
              src={user?.photoURL || "https://source.unsplash.com/random/?abstract"}
              width="300"
              height="300"
              decoding="async"
              data-nimg="1"
              className="undefined scale-100 blur-0 grayscale-0 transition-all"
              loading="lazy"
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:pb-1">
            <div className="min-w-0 flex-1 flex-col space-x-2">
              <h1 className="truncate text-2xl font-semibold text-black">
                Hi, {user?.displayName}
              </h1>
              <p>Fill up this form to complete registration</p>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
          </div>
        </div>
        <form className="mx-auto px-8">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-10">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      value={user?.displayName || ""}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      readOnly
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={user?.email || ""}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      readOnly
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      maxLength={10}
                      value={phoneNumber}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setPhoneNumber(parseInt(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="college"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    College
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="college"
                      id="college"
                      autoComplete="college"
                      value={college || ""}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setCollege(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <select
                      id="state"
                      name="state"
                      autoComplete="state"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={handleStateChange}
                      required
                    >
                      <option hidden>{state === "" ? "Choose State" : state}</option>
                      {statesList.map((state) => {
                        return (
                          <option key={state.id} value={state.state_code}>
                            {state.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <select
                      id="city"
                      name="city"
                      autoComplete="city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={handleCityChange}
                      required
                    >
                      <option hidden>{city === "" ? "Choose City" : city}</option>
                      {cities?.map((city) => {
                        return (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="referral"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Referral ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="referral"
                      id="referral"
                      autoComplete="referral"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 flex items-center justify-center gap-x-6">
            {!isValid ? (
              "Fill all required fields to enable button"
            ) : (
              <button
                type="submit"
                onClick={handleAddUserData}
                className="inline-flex justify-center rounded-md border border-gray-800 bg-black px-4 py-2 text-sm font-medium tracking-wide text-white shadow-sm transition-all hover:border-white focus:outline-none focus:ring-0 active:scale-95"
              >
                <span>Save and Continue</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-3 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
