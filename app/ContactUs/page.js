"use client";
import React, { useEffect, useState } from "react";
import PageStarter from "../components/PageStarter";
import { Button } from "@/components/ui/button";
import { Eye, Phone, MapPin, Clock, Mail, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppContext } from "../context/useContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const { webInfo, webImages } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = async () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return toast.error("All fields are required");
    }
    await addDoc(collection(db, "contactInqueries"), {
      ...formData,
      createdAt: Date.now(),
    });
    toast.success("Message send");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <PageStarter
        pageTitle="Contact Us"
        desc="BOOK AN APPOINTMENT OR VISIT US"
      />
      <div className="flex justify-center items-center">
        <img className="w-[87%] md:h-[90vh]" src={webImages?.ContactPage}></img>
      </div>
      <div className="container mx-auto md:px-14 px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-start gap-5">
            <div className="flex justify-center items-center gap-4 border-b border-gray-300 pb-5">
              <div className="p-4 rounded-full bg-[#8dc63f]">
                <Phone className="text-white" size={40} />
              </div>

              <h1 className="text-xl text-gray-600">{webInfo?.phone}</h1>
            </div>
            <div className="flex justify-center items-center gap-4 border-b border-gray-300 pb-5">
              <div className="p-4 rounded-full bg-[#8dc63f]">
                <Mail className="text-white" size={40} />
              </div>
              <h1 className="text-xl text-gray-600">{webInfo?.email}</h1>
            </div>
            <div className="flex justify-center items-center gap-4 border-b border-gray-300 pb-5">
              <div className="p-4 rounded-full bg-[#8dc63f]">
                <MapPin className="text-white" size={40} />
              </div>
              <h1 className="text-xl text-gray-600">{webInfo?.location}</h1>
            </div>
            <div className="flex justify-center items-center gap-4 border-gray-300">
              <div className="p-4 rounded-full bg-[#8dc63f]">
                <Clock className="text-white" size={40} />
              </div>
              <h1 className="text-xl text-gray-600">
                Mon-Fri: 9am-5pm, Sat: 10am-2pm
              </h1>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white md:p-10 p-2 rounded-lg border">
            <h2 className="text-2xl font-[SairaSemibold] mb-6 text-[#00563B]">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm pb-1 text-[#00563B]"
                  >
                    First Name <span className="text-[#8dc63f]">*</span>
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full focus:ring-2 focus:ring-[#8dc63f] focus:border-[#8dc63f] rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm pb-1 text-[#00563B]"
                  >
                    Last Name <span className="text-[#8dc63f]">*</span>
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full focus:ring-2 focus:ring-[#8dc63f] focus:border-[#8dc63f] rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm pb-1 text-[#00563B]"
                >
                  Email <span className="text-[#8dc63f]">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full focus:ring-2 focus:ring-[#8dc63f] focus:border-[#8dc63f] rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm pb-1 text-[#00563B]"
                >
                  Message <span className="text-[#8dc63f]">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-20 focus:ring-2 focus:ring-[#8dc63f] focus:border-[#8dc63f] rounded-md"
                  placeholder="Enter Your Message..."
                />
              </div>

              <Button
                className="w-full border border-[#00563B] text-[#00563B] bg-white hover:bg-[#00563B] hover:text-white duration-300 rounded-md py-2"
                onClick={handleSend}
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border h-[80vh] mt-10">
          <iframe className="w-full h-full" src={webInfo?.mapLink}></iframe>
        </div>

        <div className="flex justify-center mt-12">
          <Eye className="text-blue-600 w-16 h-16 opacity-50" />
        </div>
      </div>
    </>
  );
};

export default page;
