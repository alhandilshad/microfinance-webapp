"use client";
import React from "react";
import PageStarter from "../components/PageStarter";
import { useAppContext } from "../context/useContext";

const page = () => {
  const { events } = useAppContext();
  return (
    <>

      <PageStarter pageTitle="Events" />
      <div className="container mx-auto md:px-14 px-8 flex flex-col gap-5">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row gap-4 pt-3 md:pt-5 pb-4 md:pb-6 border-b"
          >
            <img src={event.imageUrl}></img>
            <div>
              <h1 className="text-3xl font-[SairaSemibold] text-[#00563B]">
                {event.title}
              </h1>
              <p className="font-[SairaRegular] pt-2 text-justify">{event.description}</p>
              <h1 className="pt-3">Venue : {event.venue}</h1>
              <h1>Date : {event.date}</h1>
              <h1>
                Timings : {event.startTime} to {event.endTime}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
