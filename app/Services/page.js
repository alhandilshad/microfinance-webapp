"use client";
import React, { useEffect, useState } from "react";
import PageStarter from "@/app/components/PageStarter";
import { Check, Headphones } from "lucide-react";
import { useAppContext } from "../context/useContext";

const page = () => {
  const { services, webInfo, webImages } = useAppContext();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleNavigate = () => {
    window.location.href = "/Appointments";
  };
  return (
    <>
      <PageStarter pageTitle="Services" desc="OUR SERVICES" />
      <div className="container mx-auto px-8 md:px-14 flex md:flex-row flex-col gap-5">
        <div className="mb-14">
          <img className="w-full" src={webImages?.servicesPage}></img>
          <h1 className="text-2xl font-[SairaSemibold] text-[#00563B] pt-8 pb-4 border-b">
            Services
          </h1>
          <p className="pt-6 text-[15px] font-[SairaRegular] text-justify">
            Muhammadi Medicat Trust Group of Hospitals is known as the authority
            in the field of phthalmology having introduced over 15 different
            treatment modalities to Pakistan. Currently, Hashmanis is the only
            Hospital in Pakistan performing certain treatments and is privileged
            to be counted among a handful of hospitals in the world to perform
            advanced treatments such as laser assisted (bladeless) cataract
            surgery and Topography Guided Lasik.
          </p>
          <p className="pt-3 text-[15px] font-[SairaRegular] text-justify">
            A full range of vision correction procedures are offered at
            Muhammadi Medicat Trust Group of Hospitals, where our experienced
            team of professionals will discuss with you what treatment option is
            best suited for your eyes.
          </p>

          {services.map((service) => {
            const isExpanded = expanded[service?.id];

            // return (
            //   <div key={service?.id}>
            //     <h1 className="pt-10 text-xl text-[#00563B] font-[SairaSemibold]">
            //       {service?.title}
            //     </h1>
            //     <div className="flex gap-4 pt-5 pb-6 border-b">
            //       <img src={service?.imageUrl}></img>
            //       <div>
            //         <p className="font-[SairaRegular]">
            //           {isExpanded
            //             ? service?.description
            //             : `${service?.description?.slice(0, 400)}`}{" "}
            //         </p>
            //         {service?.description?.length > 400 && (
            //             <button
            //             onClick={() => toggleExpand(service?.id)}
            //             className="text-[#8dc63f] underline mt-2"
            //           >
            //             {isExpanded ? "Show Less" : "Read More"}
            //           </button>
            //         )}
            //       </div>
            //     </div>
            //   </div>
            // );
            return (
              <div key={service?.id}>
                <h1 className="pt-6 md:pt-10 text-lg md:text-xl text-[#00563B] font-[SairaSemibold]">
                  {service?.title}
                </h1>
                <div className="flex flex-col md:flex-row gap-4 pt-3 md:pt-5 pb-4 md:pb-6 border-b">
                  <img
                    src={service?.imageUrl}
                    className="w-full md:w-auto max-w-[300px] h-auto object-cover"
                  />
                  <div>
                    <p className="font-[SairaRegular] text-sm md:text-base text-justify">
                      {isExpanded
                        ? service?.description
                        : `${service?.description?.slice(0, 400)}`}{" "}
                    </p>
                    {service?.description?.length > 400 && (
                      <button
                        onClick={() => toggleExpand(service?.id)}
                        className="text-[#8dc63f] underline mt-2 text-sm md:text-base"
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <div className="bg-[#8dc63f] flex flex-col justify-center items-center gap-5 mt-10 text-white p-8">
            <Headphones className="w-14 h-14" />
            <h1 className="font-[SairaSemibold] text-3xl">“Let’s Help You!</h1>
            <div className="text-center font-[SairaRegular]">
              <h1>Call {webInfo?.phone}</h1>
              <h1>({webInfo?.phone})</h1>
              <h1>{webInfo?.email}</h1>
            </div>
            <button
              onClick={handleNavigate}
              className="group mt-6 text-white rounded-full pl-4 pr-1 py-1 flex items-center space-x-2 bg-[#00162f] duration-300"
            >
              <span>Book Appointment</span>
              <div className="p-2 bg-[#00563B] group-hover:bg-[#8dc63f] duration-300 rounded-full flex items-center justify-center">
                <Check />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
