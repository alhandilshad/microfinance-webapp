"use client";
import React from "react";
import PageStarter from "../components/PageStarter";
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "../context/useContext";

const page = () => {
  const { doctors, webImages } = useAppContext();

  return (
    // <>
    //   <PageStarter pageTitle="Corporate" />
    //   <div className="flex justify-center items-center">
    //     <img src={webImages?.CorporatePage}></img>
    //   </div>
    //   <div className="container mx-auto md:px-14 px-10 mt-10 mb-20 font-[SairaRegular]">
    //     <h1 className="text-[#00563B] text-2xl font-[SairaSemibold]">
    //       OUR CORPORATE ALLIANCE
    //     </h1>
    //     <p className="pt-4">
    //       A number of Pakistan’s biggest corporate brands partner with us.
    //       Whatever your size, we would love to have you as next!
    //     </p>
    //     <p className="pt-2">
    //       Muhammadi Medicat Trust Group of Hospitals works with over 500+
    //       leading industries and corporate entities to support and facilitate
    //       access to ideal healthcare services for individuals, employees,
    //       families and beneficiaries. We believe in cultivating meaningful
    //       relationships with our valued partners who share similar values and
    //       purpose in developing sustainable health solutions for prevention,
    //       early diagnosis and treatment across our nation. We offer a full range
    //       of specialized services under Eyecare, Laboratory, General and Dental
    //       Care & Aesthetics built-into custom-made health programs and packages
    //       for our valued partners.
    //     </p>
    //     <h1 className="pt-5 text-[#00563B] text-2xl font-[SairaSemibold]">
    //       CUSTOMIZED CORPORATE HEALTH PROGRAM AND PACKAGES
    //     </h1>
    //     <h1 className="font-[SairaSemibold] pt-2">
    //       • EXECUTIVE HEALTH PROFILE
    //     </h1>
    //     <p className="pt-3">
    //       Investing in the health of our executives is an investment in the
    //       organization. An executive health profile entails a comprehensive
    //       medical evaluation tailored to the unique needs of high-powered
    //       executives to help monitor their health status, regularly screen for
    //       risk factors or diseases, early detection of treatable diseases and
    //       provide preventive counseling for keeping a healthy lifestyle.
    //     </p>
    //     <h1 className="font-[SairaSemibold] pt-3">
    //       • PRE-EMPLOYMENT MEDICAL ASSESSMENT
    //     </h1>
    //     <p className="pt-3">
    //       A pre-employment medical assessment program helps determine employee
    //       health status, any underlying medical conditions or risks to public
    //       health & safety and assists in making informed and smart hiring
    //       decisions.
    //     </p>
    //     <h1 className="font-[SairaSemibold] pt-3">• EMPLOYEE HEALTH PACKAGE</h1>
    //     <p className="pt-3">
    //       Healthier employees lead to an engaged and productive workforce. Our
    //       tailored employee health package encourages regular medical
    //       examination throughout the year. Continual health checks improve
    //       workforce productivity, enhance employee morale, lower healthcare
    //       costs and reduce retention or absenteeism.
    //     </p>
    //     <h1 className="font-[SairaSemibold] pt-3">
    //       • MEDICAL CAMPS & DRIVE-THRU
    //     </h1>
    //     <p className="pt-3">
    //       Muhammadi Medicat Trust annual medical camps & drive-thru are
    //       considered to be a life-saving program to help in early diagnosis and
    //       treatment of medical conditions, emergency care, reducing the risks of
    //       medical complications and improving patient outcomes.
    //     </p>
    //     <h1 className="font-[SairaSemibold] pt-3">• CRISES RESPONSE</h1>
    //     <p className="pt-3">
    //       Muhammadi Medicat Trust provides the privilege to customize healthcare
    //       services based on any unprecedented or prevailing disease outbreak
    //       (i.e., viral or infectious disease) or health crises to best benefit,
    //       support and aid all of our corporate community.
    //     </p>
    //     <p className="pt-2">
    //       Our valued partners benefit from the above personalized healthcare
    //       programs with the option to customize services (i.e., thorough eye
    //       health examination, laboratory tests (routine or special), dental
    //       health screening etc.) and make any amendments or additions as per
    //       corporate requirements or as needs arise. Additionally, all of our
    //       specialized medical services are delivered on premises based on our
    //       partner preferences. Moreover, corporations are privileged with
    //       Improved employee performance, engaged workforce, reduced retention
    //       rates and an access to healthcare expertise, knowledge and solutions
    //       from some of the leading medical experts and consultants in Pakistan.
    //     </p>
    //     <p className="pt-2">
    //       To learn more or to discuss partnership opportunities, please reach
    //       out to our corporate sales at corporate.sales@hashmanis.com.pk
    //     </p>
    //   </div>
    // </>
    <>
    <PageStarter pageTitle="Our Staff" desc="OUR STAFF" />
      <div className="container mx-auto md:px-14 px-8 py-14">
        <h1 className="text-slate-500">MEET OUR EXPERIENCED TEAM</h1>
        <h1 className="text-4xl font-[SairaSemibold] text-[#00563B] py-1">
          Our Dedicated Staff Team
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
