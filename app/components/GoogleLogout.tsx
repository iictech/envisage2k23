"use client";

import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function GoogleLogout() {
  const auth = getAuth();
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        type="button"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
