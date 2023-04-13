"use client";

import { addUserData, getUserData } from "@/lib/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function GoogleSignIn({ text }: { text: string }) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const router = useRouter();

  const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;

        // check if user exists in database
        // if not, add user to database
        try {
          const docSnap = await getUserData("users_test", user?.uid as string);

          if (docSnap.exists() === true) {
            console.log("Document data:", docSnap.data());
            router.push("/dashboard");
          } else {
            // doc.data() will be undefined in this case

            await addUserData("users_test", user?.uid, {
              uid: user?.uid,
              email: user?.email,
              name: user?.displayName,
              photoUrl: user?.photoURL,
              phoneNumber: 0,
              college: "",
              state: "",
              city: "",
              evgId: "",
              referralId: "",
              isNewUser: true,
            });
            router.push("/new-user");

            console.log("No such document!");
          }
        } catch (error) {
          console.log(error);
        }
        // you would insert this detail to your database and proceed from there.

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 font-bold text-white duration-150 ease-in-out hover:bg-blue-700 active:scale-95"
        onClick={handleLogin}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3 h-5 w-5 text-white"
          viewBox="0 0 512 512"
        >
          <path
            d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"
            fill="currentColor"
          />
        </svg>
        {text}
      </button>
    </>
  );
}
