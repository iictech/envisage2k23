"use client";

import Ticket from "@/app/components/Ticket";
import { useAuthContext } from "@/context/AuthContext";
import { getUserData } from "@/lib/firestore";
import { UserData } from "@/lib/types";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function DashboardPage() {
  const { user } = useAuthContext() as { user: User | null };
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const router = useRouter();

  React.useEffect(() => {
    try {
      if (user) {
        getUserData("users", user.uid).then((doc) => {
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
    <>
      <title>Dashboard - Envisage 23</title>
      <div>
        <h1 className="pb-4 text-center text-2xl font-bold">Welcome {userData?.name},</h1>
        <div className="flex flex-col justify-center gap-y-4">
          <Ticket userData={userData} />
        </div>
      </div>
    </>
  );
}
