"use client";
import { ArrowRight, Home } from "lucide-react";
import React from "react";
import PageStarter from "@/app/components/PageStarter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppContext } from "../context/useContext";

const page = () => {
  const { webImages } = useAppContext();
  return (
    <div>
      <PageStarter pageTitle="About Us" desc="ABOUT OUR HOSPITAL" />
      <div className="flex justify-center items-center mt-5">
        <img className="w-[87%] md:h-[90vh]" src={webImages?.aboutUsPage}></img>
      </div>
      <div className="container mx-auto md:px-14 px-10 mt-20">
        <h1 className="text-[#00563B]">Muhammadi Medicat Trust</h1>
        <h1 className="text-4xl text-[#00563B] font-[SairaSemibold] pt-1">
          ABOUT OUR JOURNEY
        </h1>
        <p className="text-[#9dabaf] text-justify font-[SairaRegular] leading-7 pt-3">
          Serving healthcare for over 40 years, Muhammadi Medicat Trust Group of
          Hospitals has established itself as a pioneer in ophthalmology and
          successfully expanded into a 100 bedded tertiary care hospital,
          offering 25 different modalities with over 20 labs and 7 locations
          across Pakistan. Muhammadi Medicat Trust has proudly screened and
          treated over 22 million patients and performed over 3.2 million
          surgeries to date. We are known for introducing the most advanced and
          innovative technologies into our medical practice and procedures in
          Pakistan. Our team of certified medical specialists are trained to
          diagnose and treat the most complex and complicated medical
          conditions. Our patient satisfaction rate marks as 99.9% nationwide.
        </p>

        <h1 className="text-4xl text-[#00563B] font-[SairaSemibold] pt-7">
          CORE VALUES
        </h1>
        <div className="flex items-center gap-3 text-justify pt-10">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Proud to be Pakistan’s most advanced and well-equipped eyecare and
            tertiary care provider
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Renowned as the only healthcare facility to provide comprehensive
            eyecare services including cataract, refractive surgeries, glaucoma,
            corneal problems, retinal eye issues, pediatric ophthalmology among
            others
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Proven to treat the most complex and complicated medical cases,
            inaccessible elsewhere.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Recognized for introducing novel and innovative technologies into
            Pakistan’s eyecare sector comprising Phaco, LASIK, Femto LASIK,
            Femto Cataract, IOLS Implants, Phakic IOLs, iTrace, Ocular CT scan,
            OCT, OCT angiography, confocal microscopy among many others.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Focused upon advancing and revolutionizing across all areas of our
            tertiary care division including gynecology, cardiology, pediatrics,
            orthopedic, general medicine, dental care & aesthetics among many
            others.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Emerging towards digital transformation by introducing and
            implementing Electronic Health Record System to benefit patient
            outcomes and experiences across Muhammadi Medicat Trust.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            A passion for continuous investment in research and development to
            facilitate and bring novel and innovative ideas, procedures and
            technologies into Pakistan’s medical sector.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            Dedicated to provide exceptional and personalized patience care
            across all divisions of Muhammadi Medicat Trust.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            A growing team of Pakistan’s most leading, knowledgeable and
            qualified medical experts across all departments of Muhammadi
            Medicat Trust.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="rounded-full p-[1px] bg-[#8dc63f]">
            <ArrowRight className="text-white w-4 h-4" />
          </div>
          <p className="text-[#00563B]">
            A continuous effort to provide free medical and surgical services to
            the underprivileged through Muhammadi Medicat Trust Medical Welfare
            Foundation.
          </p>
        </div>

        <h1 className="text-4xl text-[#00563B] font-[SairaSemibold] pt-12">
          OUR VISION, MISSION & VALUES
        </h1>
        <Tabs defaultValue="vision" className="w-full mt-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="vision"
              className="font-[SairaSemibold] text-xl"
            >
              Vision
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="font-[SairaSemibold] text-xl"
            >
              Mission
            </TabsTrigger>
            <TabsTrigger
              value="values"
              className="font-[SairaSemibold] text-xl"
            >
              Values
            </TabsTrigger>
          </TabsList>
          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-[SairaRegular] text-justify">
                  Muhammadi Medicat Trust envisions to remain positioned as
                  Pakistan's leader in ophthalmology as well as the most
                  exceptional and advanced tertiary care provider. We aim to
                  deliver unsurpassed excellence in medical expertise,
                  technology and procedures as well as patience satisfaction.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-[SairaRegular] text-justify">
                  Muhammadi Medicat Trust mission aspires continued efforts and
                  dedication towards providing the most advanced quality
                  standards and ideal patient care across our eyecare and
                  tertiary care services. We aim to be the most preferable
                  choice, easily accessible nationwide.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="values">
            <Card>
              <CardHeader>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-[SairaRegular] text-justify">
                  Muhammadi Medicat Trust values an intense commitment towards
                  delivering the highest quality service levels and continuous
                  research and development to support vital ideas, inventions
                  and innovations in the medical sector of Pakistan. We bring a
                  dedicated network of medical experts inspiring trust,
                  integrity and compassion towards personalized patient
                  experience.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="container mx-auto md:px-14 px-10 flex md:flex-row flex-col justify-between items-center mt-24">
        <img
          src="https://www.hashmanis.com.pk/wp-content/uploads/2023/03/Dr-Sharif-img-250x350.webp"
          className="md:pl-20 md:mb-0 mb-8"
        ></img>
        <div>
          <h1 className="text-4xl text-[#00563B] font-[SairaSemibold]">
            MESSAGE FROM OUR CHAIRMAN
          </h1>
          <p className="pt-4 font-[SairaRegular] lg:max-w-xl text-justify">
            “A journey of a thousand miles starts with a single step” A thought
            that has influenced and motivated me with the formation of Muhammadi
            Medicat Trust Group of Hospitals back in 1981, with a clear vision to provide the topmost
            quality standards of eye-care facility in Pakistan. With over 40 years of intensive
            experience in healthcare, we have proudly established ourselves as a pioneer in
            ophthalmology and envision to grow and advance across all our tertiary care modalities
            with the same ideology.Our ideals were and continues to stand as creating a better
            today and a brighter future for Pakistan’s health sector. We strongly believe in
            giving and serving humanity and aim to continue making every effort towards
            constantly reaching and treating each individual in need of medical help regardless
            of their religion, cast,creed or affordability across our nation as “healthcare is
            not simply a matter of diagnosing or treating an individual, but it is about helping
            people lead a wholesome and healthy life” – Dr. Sharif Muhammadi Medicat Trust
          </p>
        </div>
      </div>
      <div className="container mx-auto md:px-14 px-10 flex md:flex-row flex-col justify-between items-center mt-20 mb-20">
        <div>
          <h1 className="text-4xl text-[#00563B] font-[SairaSemibold]">
            MESSAGE FROM OUR CEO
          </h1>
          <p className="pt-4 font-[SairaRegular] lg:max-w-xl text-justify">
            “Challenges, issues and problems are worldwide within every era;
            however, we must see beyond these challenges and find opportunities.” As
            I looked into the shortages and lacking in the health sector of Pakistan, I was
            instantly empathic and motivated to help bring a change. Together with my father,
            Dr. Sharif Muhammadi Medicat Trust by my side, we have enforced all our energy and efforts towards
            rigorous medical research and development, training, educating and executing
            to help support patients with the highest quality standards of care. We
            constantly strive for better patient outcomes and experiences by introducing new
            technologies, innovations and expertise supporting advanced treatments and procedures
            to facilitate healthcare across our nation. We are extremely proud to be at
            the forefront of whatever we do and what we have managed to achieve with our
            exclusive emphasis in ophthalmology along with expansions and
            advancements within tertiary care. We are deeply passionate and heavily invested
            in all aspects of healthcare including initiatives towards digitization and
            aspire to bring Pakistan ahead of times. – Arsalan Muhammadi Medicat Trust
          </p>
        </div>
        <img
          src="https://www.hashmanis.com.pk/wp-content/uploads/2023/03/arslan-hashmani-400x400.webp"
          className="md:pr-20"
        ></img>
      </div>
    </div>
  );
};

export default page;
