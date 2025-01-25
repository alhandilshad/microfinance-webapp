"use client";
import PageStarter from "@/app/components/PageStarter";
import { useAppContext } from "@/app/context/useContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const { doctors } = useAppContext();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    if (id) {
      const selected = doctors.find((doctor) => doctor.id.toString() === id);
      setSelectedDoctor(selected);
    }
  }, [id]);
  return (
    <>
      <PageStarter pageTitle={selectedDoctor?.name} />
      <div className="container mx-auto px-14 flex gap-20 mt-10 mb-20">
        <img
          src={selectedDoctor?.imageUrl}
          className="w-[440px] h-[500px]"
        ></img>
        <div className="mt-10">
          <h1 className="text-3xl font-[SairaSemibold] text-[#00563B]">
            {selectedDoctor?.name}
          </h1>
          <h1 className="font-[SairaRegular]">{selectedDoctor?.role}</h1>
          <div className="flex items-center gap-3 mt-10">
            <h1 className="text-2xl font-[SairaSemibold] text-[#00563B]">
              Timings :{" "}
            </h1>
            <div>
              <h1>
                {selectedDoctor?.startTime} to {selectedDoctor?.endTime}
              </h1>
              <h1>{selectedDoctor?.date}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-14 mt-10">
        <h1 className="font-[SairaRegular]">{selectedDoctor?.role}</h1>
        <h1 className="text-4xl font-[SairaSemibold] pt-2 text-[#00563B]">
          {selectedDoctor?.name}
        </h1>
        <p className="pt-3 font-[SairaRegular]">
          {selectedDoctor?.description}
        </p>
      </div>
    </>
  );
};

export default page;
