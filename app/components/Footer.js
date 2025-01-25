"use client";
import { Input } from "@/components/ui/input";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { 
  useAppContext } 
  from "../context/useContext";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);
  const { webInfo } = useAppContext();
  // const webInfo = JSON.parse(localStorage.getItem('webInfo'))

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      addDoc(collection(db, "subscribers"), { email: email })
        .then(() => {
          setEmail("");
          toast.success("Subscribed Successfully!");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      toast.error("Please enter a valid email address!");
    }
  };
  const handleNavigate = () => {
    window.location.href = "/Appointments";
  };
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#00162f] text-white w-full mt-10">
        <div className="container mx-auto px-14 py-5 flex md:flex-row flex-col justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <Link
              href="https://www.facebook.com/mmtrust/"
              target="blank"
              className="hover:bg-[#8dc63f] hover:text-white border text-[#8dc63f] border-[#8dc63f] duration-300 p-[10px] rounded-full"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/mmteyehospital/"
              target="blank"
              className="hover:bg-[#8dc63f] hover:text-white text-[#8dc63f] border border-[#8dc63f] duration-300 p-[10px] rounded-full"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              target="blank"
              className="hover:bg-[#8dc63f] hover:text-white text-[#8dc63f] border border-[#8dc63f] duration-300 p-[10px] rounded-full"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=EvBXRIs5Hj0"
              target="blank"
              className="hover:bg-[#8dc63f] text-[#8dc63f] hover:text-white border border-[#8dc63f] duration-300 p-[10px] rounded-full"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-5">
            <h1 className="text-xl">Newsletter</h1>
            <div className="flex items-center bg-[#00563B] rounded-full py-1 pl-4 pr-1 w-96">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#8dc63f] group rounded-full p-3 flex items-center justify-center ml-3"
              >
                <ArrowRight className="group-hover:pl-1 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#00563B] text-white pt-12 pb-8">
        <div className="container mx-auto px-8 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.png" alt="Logo" className="w-36" />
            <p className="text-gray-400">
              There are many variations of passages of lorem ipsum available,
              but the majority suffered.
            </p>
            <button
              onClick={handleNavigate}
              className="group mt-6 bg-[#8dc63f] text-white rounded-full pl-4 pr-1 py-1 flex items-center space-x-2 hover:bg-[#00162f] duration-300"
            >
              <span>Book Appointment</span>
              <div className="p-2 bg-[#00563B] group-hover:bg-[#8dc63f] duration-300 rounded-full flex items-center justify-center">
                <Check />
              </div>
            </button>
          </div>

          <div>
            <h3 className="text-xl font-[SairaSemibold] mb-7">Links</h3>
            <div className="text-gray-400 flex gap-4 text-sm">
              <div className="flex flex-col gap-2 text-lg">
                {/* <Link className="hover:text-[#8dc63f] duration-300" href="/">Home</Link> */}
                <Link
                  href="/"
                  className={`hover:text-[#8dc63f] duration-300 ${
                    activeLink === "/" ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => handleLinkClick("/")}
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  href="/AboutUs"
                  className={`hover:text-[#8dc63f] duration-300 ${
                    activeLink === "/AboutUs" ? "text-blue-500 font-bole" : ""
                  }`}
                  onClick={() => handleLinkClick("/AboutUs")}
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/Services"
                >
                  Services
                </Link>
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/Appointments"
                >
                  Appointments
                </Link>
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/Doctors"
                >
                  Our Doctors
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-lg">
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/Events"
                >
                  Events
                </Link>
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/Corporate"
                >
                  Corporate
                </Link>
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/ContactUs"
                >
                  Contact Us
                </Link>
                <Link
                  className="hover:text-[#8dc63f] duration-300"
                  href="/Donate-now"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-[SairaSemibold] text-xl mb-7">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 pb-2 border-b border-gray-600">
                <Phone className="w-8 h-8 text-[#8dc63f]" />
                <span className="text-gray-400 text-lg">
                  {" "}
                  {webInfo?.phone}{" "}
                </span>
              </li>
              <li className="flex items-center space-x-3 pb-2 border-b border-gray-600">
                <Mail className="w-8 h-8 text-[#8dc63f]" />
                <span className="text-gray-400 text-lg">{webInfo?.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-[#8dc63f]" />
                <span className="text-gray-400 text-lg">
                  {webInfo?.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-6 border-t border-gray-600">
          <p className="text-sm text-gray-400">
            © Copyright {currentYear} by{" "}
            <span className="text-[#8dc63f]">Muhammadi Medical Trust</span>
          </p>
        </div>
      </footer>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Footer;
