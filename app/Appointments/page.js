"use client";
import React from "react";
import PageStarter from "../components/PageStarter";
import { Bandage, BriefcaseMedical, Eye, FlaskConical } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "../context/useContext";

const page = () => {
  const { appointmentTitles } = useAppContext()

  const iconMap = {
    Eye: Eye,
    Bandage: Bandage,
    BriefcaseMedical: BriefcaseMedical,
    FlaskConical: FlaskConical,
  };

  return (
    <>
      <PageStarter pageTitle="Appointments" desc="BOOK AN APPOINTMENT" />
      <div className="flex md:flex-row flex-col justify-center items-center gap-11 text-white mt-8 mb-24">
        {appointmentTitles.map((appoint) => (
          <Link
            key={appoint.id}
            href={`/Appointments/SeeAppoints/${appoint.title}`}
            className="bg-[#8dc63f] border-2 border-[#8dc63f] group hover:bg-white hover:text-[#8dc63f] duration-300 px-20 py-6 flex flex-col justify-center items-center gap-2 rounded-md"
          >
            {iconMap[appoint.icon]
              ? React.createElement(iconMap[appoint.icon], {
                  className: "h-8 w-8 text-white group-hover:text-[#8dc63f]",
                })
              : "N/A"}
            <h1 className="font-[SairaSemibold] text-xl">{appoint.title}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
