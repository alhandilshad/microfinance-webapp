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
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
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
                type="text"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                className="bg-[#8dc63f] group rounded-full p-3 flex items-center justify-center ml-3"
              >
                <ArrowRight className="group-hover:pl-1 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
