"use client";
import { BriefcaseBusiness, Hospital, Pill, Radio } from "lucide-react";
import React, { useState } from "react";
import {
  Users,
  Stethoscope,
  Tent,
  Building2,
  FlaskRoundIcon as Flask,
  ThumbsUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "../context/useContext";

const StatCard = ({ icon: Icon, title, value, description }) => (
  <div
    className="bg-white p-4 rounded-lg border
   w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)] flex flex-col items-center text-center hover:shadow-lg transition-shadow"
  >
    <Icon className="w-12 h-12 text-[#8dc63f] mb-3" />
    <h3 className="text-lg font-semibold text-[#00563B] mb-2">{title}</h3>
    <p className="text-2xl font-bold text-[#00563B] mb-1">{value}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function Facilities() {
  const { facilities } = useAppContext();
  const [expanded, setExpanded] = useState({});

  const stats = [
    {
      icon: Users,
      title: "Patients Treated",
      value: "22 million+",
      description: "Screened & treated to date",
    },
    {
      icon: Stethoscope,
      title: "Surgeries Performed",
      value: "3.2 million+",
      description: "Successful operations to date",
    },
    {
      icon: Tent,
      title: "Medical Camps",
      value: "250+",
      description: "Organized per year",
    },
    {
      icon: Building2,
      title: "Functional Hospitals",
      value: "07",
      description: "Across Sindh",
    },
    {
      icon: Flask,
      title: "Laboratories",
      value: "20+",
      description: "Across Sindh",
    },
    {
      icon: ThumbsUp,
      title: "Patient Satisfaction",
      value: "99.9%",
      description: "Nationally",
    },
  ];

  const iconMap = {
    Hospital: Hospital,
    Radio: Radio,
    BriefcaseBusiness: BriefcaseBusiness,
    Pill: Pill,
  };

  const toggleExpend = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="px-8 md:px-[86px] bg-gray-100 pt-12 pb-20">
        <h2 className="text-3xl font-[SairaSemibold] text-[#00563B] mb-10">
          OUR FACILITIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {facilities?.map((facility) => {
            const isExpanded = expanded[facility.id];
            return (
              <div
                key={facility.id}
                className="bg-white border-r p-6 text-center"
              >
                <div className="flex justify-center items-center" key={facility.id}>
                  {iconMap[facility.icon]
                    ? React.createElement(iconMap[facility.icon], {
                        className: "h-10 w-10 text-[#8dc63f] mb-4",
                      })
                    : "N/A"}
                </div>
                <h3 className="text-xl font-[SairaSemibold] text-[#00563B] mb-2">
                  {facility.title}
                </h3>
                <p className="mb-4 tracking-tighter font-[SairaRegular]">
                  {isExpanded
                    ? facility.description
                    : `${facility.description.slice(0, 130)}`}{" "}
                </p>
                {facility.description.length > 130 && (
                  <>
                    <button
                      onClick={() => toggleExpend(facility.id)}
                      className="text-[#8dc63f] hover:underline"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>{" "}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="container mx-auto md:px-14 px-8 py-14">
        <div className="flex md:flex-row flex-col justify-center items-center gap-3">
          <div>
            <h1 className="text-[#00563B]">Muhammadi Medical Trust</h1>
            <h1 className="text-3xl font-[SairaSemibold] text-[#00563B] pb-8">
              Trusted By Millions Globally
            </h1>
            <img
              src="https://www.hashmanis.com.pk/wp-content/uploads/2023/05/trusted-img.webp"
              alt="Muhammadi Medicat Trust"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <StatCard
              icon={Users}
              title="Patients Treated"
              value="22 million+"
              description="Screened & treated to date"
            />
            <StatCard
              icon={Stethoscope}
              title="Surgeries Performed"
              value="3.2 million+"
              description="Successful operations to date"
            />
            <StatCard
              icon={Tent}
              title="Medical Camps"
              value="250+"
              description="Organized per year"
            />
            <StatCard
              icon={Building2}
              title="Functional Hospitals"
              value="07"
              description="Across Sindh"
            />
            <StatCard
              icon={Flask}
              title="Laboratories"
              value="20+"
              description="Across Sindh"
            />
            <StatCard
              icon={ThumbsUp}
              title="Patient Satisfaction"
              value="99.9%"
              description="Nationally"
            />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-8 md:px-14 py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-[#00563B] text-xl font-medium">
              Muhammadi Medical Trust
            </h2>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#00563B] mb-6">
              Trusted By Millions Globally
            </h1>
            <img
              src="https://www.hashmanis.com.pk/wp-content/uploads/2023/05/trusted-img.webp"
              alt="Muhammadi Medical Trust"
              className="rounded-lg shadow-md w-full max-w-md mx-auto"
            />
          </div>

          {/* Right Section - Stats Grid */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-wrap gap-3 justify-center">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
