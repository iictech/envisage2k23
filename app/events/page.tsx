"use client";

import Title from "@/app/components/Title";
import EventCard from "@/app/components/events/EventCard";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
import HomeLayout from "../(landing)/layout";
import UserLayout from "../(user)/layout";

export default function AboutPage() {
  const { user } = useAuthContext() as { user: User | null };

  const events = [
    {
      id: "event1",
      title: "Event 1",
      description: "Event 1 description",
      date: "0000-00-00",
      time: "00:00",
      category: "Offline",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "event2",
      title: "Event 2",
      description: "Event 2 description",
      date: "0000-00-00",
      time: "00:00",
      category: "Online",
      image: "https://picsum.photos/200/300",
    },
  ];

  if (user) {
    return (
      <UserLayout>
        <title>Events - Envisage 23</title>
        <div>
          <div className="text-gray-600">
            <div className="container mx-auto px-5 py-24 pt-0">
              <div className="-m-4 flex flex-wrap">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    );
  } else {
    return (
      <HomeLayout>
        <title>Events - Envisage 23</title>
        <div>
          <Title title="Events" />
          <div className="text-gray-600">
            <div className="container mx-auto px-5 py-24 pt-0">
              <div className="-m-4 flex flex-wrap">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    );
  }
}
