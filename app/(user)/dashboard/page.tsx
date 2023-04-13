/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import GoogleLogout from "@/app/components/GoogleLogout";
import { User } from "firebase/auth";
import { getUserData } from "@/lib/firestore";
import { UserData } from "@/lib/types";

function Page() {
  const { user } = useAuthContext() as { user: User | null };
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const router = useRouter();

  React.useEffect(() => {
    try {
      if (user) {
        getUserData("users_test", user.uid).then((doc) => {
          if (doc.exists()) {
            setUserData(doc.data() as UserData);
          } else {
            router.push("/new-user");
          }
        });
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, [router, user]);

  return (
    <div>
      <h1>Only logged in users can view this page</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      <GoogleLogout />
    </div>
  );
}

export default Page;
