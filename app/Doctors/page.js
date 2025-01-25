"use client";
import React from "react";
import PageStarter from "../components/PageStarter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useAppContext } from "../context/useContext";
import { MessageCircle } from "lucide-react";

const page = () => {
  const { doctors } = useAppContext();
   
  return (
    <>
      <PageStarter pageTitle="Doctors" desc="OUR DOCTORS" />
      <div className="container mx-auto md:px-14 px-8 py-14">
        <h1 className="text-slate-500">MEET OUR EXPERIENCED TEAM</h1>
        <h1 className="text-4xl font-[SairaSemibold] text-[#00563B] py-1">
          Our Dedicated Doctors' Team
        </h1>
        <p className="font-[SairaRegular]">
          We offer extensive medical procedures to outbound and inbound
          patients. This is what we are very proud of achieving.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
          {doctors.map((card, index) => (
            <Link href={`/Doctors/SeeDetails/${card?.id}`} key={index}>
              <Card className="bg-white rounded-lg">
                <CardContent className="p-3">
                  <div className="flex flex-col">
                    <img className="w-60 h-64 rounded-lg object-cover" src={card.imageUrl} />
                    <div className="mt-2">
                                          <Badge
                    variant="secondary"
                    className="rounded-full px-2 py-0.5 text-xs font-medium text-blue-500"
                  >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
                    new
                  </Badge>
                    </div>

                    <h1 className="font-[SairaRegular] text-left pt-2">{card.role}</h1>
                    <h1 className="font-[SairaSemibold] text-left text-[#00563B] text-xl">
                      {card.name}
                    </h1>
                  </div>
                </CardContent>
              </Card>
              
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
