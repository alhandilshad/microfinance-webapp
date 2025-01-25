"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "@/app/utils/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

export default function DonationPage() {
  const [resource, setResource] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    behalf: "",
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitData = async () => {
    if (
      formData.behalf === "" ||
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.number === "" ||
      formData.email === "" ||
      formData.amount === "" ||
      !resource
    ) {
      return toast.error("All fields are required");
    }
    setIsLoading(true);
    await addDoc(collection(db, "donations"), {
      ...formData,
      resource,
      status: "Pending",
      createdAt: Date.now(),
    });
    toast.success("Thank you for your donation!");
    setFormData({
      behalf: "",
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      amount: "",
    });
    setResource("");
    setIsLoading(false);
  };

  const features = [
    "Discover innovative features that elevate your donor experience",
    "Demo the product and ask questions with our success team",
    "Get customized pricing offers and packages that fit your team and organization",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 px-14 py-12 lg:grid-cols-2">
        <div className="max-w-xl py-8">
          <h1 className="text-[2.75rem] font-medium leading-[1.2] font-[SairaSemibold] tracking-tight text-[#00563B]">
            Transform your fundraising today
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Guidance, expertise, and personalized setup - all a conversation
            away.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#8dc63f]" />
                <span className="text-base text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-600">
              Already familiar with MMT?{" "}
              <Link href="#" className="text-[#8dc63f]">
                Create your account to access the dashboard
              </Link>
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 border space-y-4">
          <div>
            <label className="text-sm font-[SairaRegular] text-gray-700">
              Donation On Behalf Of
            </label>
            <Input
              name="behalf"
              value={formData.behalf}
              type="text"
              placeholder="Donation On behalf of*"
              required
              className="w-full"
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-[SairaRegular] text-gray-700">
                First Name
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First name*"
                required
              />
            </div>
            <div>
              <label className="text-sm font-[SairaRegular] text-gray-700">
                Last Name
              </label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last name*"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-[SairaRegular] text-gray-700">
                Email Address
              </label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email*"
                required
              />
            </div>
            <div>
              <label className="text-sm font-[SairaRegular] text-gray-700">
                Phone Number
              </label>
              <Input
                name="number"
                value={formData.number}
                onChange={handleChange}
                type="tel"
                placeholder="Phone number"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-[SairaRegular] text-gray-700">
              Donation Amount
            </label>
            <Input
              name="amount"
              value={formData.amount}
              type="number"
              placeholder="Donation Amount*"
              required
              className="w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <Select
              value={resource}
              onValueChange={(value) => setResource(value)}
            >
              <SelectTrigger className="w-full text-gray-500">
                <SelectValue placeholder="To help us connect you with the best resources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Looking to start fundraising">
                  Looking to start fundraising
                </SelectItem>
                <SelectItem value="Evaluating fundraising platforms">
                  Evaluating fundraising platforms
                </SelectItem>
                <SelectItem value="Ready to switch to MMT">
                  Ready to switch to MMT
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" required className="h-4" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I acknowledge that by submitting this form, I agree to receiving
              occasional relevant communications regarding my request, and
              abiding by MMT's{" "}
              <Link href="#" className="text-[#8dc63f]">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#8dc63f]">
                Privacy Policy
              </Link>
              *
            </label>
          </div>

          <button
            onClick={handleSubmitData}
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-[#8dc63f] px-8 py-2.5 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            {isLoading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
