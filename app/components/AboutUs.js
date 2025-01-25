"use client";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useAppContext } from "../context/useContext";

const AboutUs = () => {
  const { webImages } = useAppContext()
  const services = [
    {
      title: "CATARACT",
      description:
        "Clear your vision and gain a better quality of life when you go for a cataract procedure.",
    },
    {
      title: "LASIK",
      description:
        "Get rid of wearing glasses or contact lenses for a lifetime with the right procedure.",
    },
    {
      title: "RETINA",
      description:
        "Protect your eyes from vision loss with a safe and effective retinal treatment.",
    },
    {
      title: "CORNEA",
      description:
        "Improve sight, relieve pain or treat any severe infection impacting the cornea.",
    },
    {
      title: "OCULOPLASTIC",
      description:
        "Get rid of droopy, inward or outward eyelids, tear duct problems or any other issues surrounding the eyes or face with a safe procedure.",
    },
    {
      title: "PEDIATRIC OPHTHALMOLOGY",
      description:
        "Find out all about your child's eye health through Pediatric Ophthalmology, a specialized branch of ophthalmology.",
    },
    {
      title: "GLAUCOMA",
      description:
        "Save your vision from worsening with an advanced glaucoma procedure. Glaucoma is a disease that damages the eye's optic nerve.",
    },
  ];

  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-sm font-bold text-[#00563B] uppercase mb-2">
              About Us
            </h3>
            <h2 className="text-3xl md:text-3xl font-[SairaSemibold] text-[#00563B] leading-snug mb-4 uppercase">
              The is an Eye Hospital
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify font-[SairaRegular]">
              Muhammadi Medicat Trust Group of Hospitals, the pioneers of
              ophthalmology in Pakistan are the most leading, well-equipped, and
              technologically advanced full scope eyecare and tertiary care
              provider with a passion to transform patients' health with global
              standards expertise. We aim to connect our patients with
              specialized treatment designed to match their medical case with a
              comfortable, compassionate, and caring patient experience!
            </p>
            <Link
              href="/AboutUs"
              className="mt-12 text-[#00563B] decoration-black underline "
            >
              Read More
            </Link>
          </div>
          <div>
            <img
              src={webImages?.aboutUsSection}
              alt="Ophthalmology Technology"
              className="w-full md:h-[65vh] rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#8dc63f] py-20">
        <div className="container mx-auto px-8 md:px-14">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              A Full Scope of Eyecare & Tertiary Care
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-200">
              Specialized Eyecare
            </h2>
          </div>

          <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-16 text-center">
            Muhammadi Medicat Trust Group of Hospitals has been serving the
            healthcare sector of Pakistan for over 4 decades. We bring a
            dedicated focus, passion and commitment to combine exceptional
            surgical talent with the most advanced, proven, safe and effective
            vision correction technologies to patients nationwide. Our goal is
            100% positive patient experience and satisfaction along with the
            highest quality service levels, unattainable elsewhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-opacity-20 hover:transform hover:-translate-y-2"
              >
                <Eye className="w-12 h-12 text-[#fff] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link
                  href=""
                  className="text-[#fff] hover:text-blue-300 transition-colors duration-300"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
