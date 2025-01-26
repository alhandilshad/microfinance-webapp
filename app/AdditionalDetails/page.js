"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../utils/firebaseConfig";

const AdditionalDetails = () => {
    // const user = auth.currentUser;
  const router = useRouter();
  const { name } = useParams();
  const [currentUser, setcurrentUser] = useState('');
  const [formData, setFormData] = useState({
    guarantor1: { name: "", email: "", location: "", cnic: "" },
    guarantor2: { name: "", email: "", location: "", cnic: "" },
    statement: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setcurrentUser(user);
        }
      });
      return () => unsubscribe();
}, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuarantorChange = (e, guarantor) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [guarantor]: {
        ...prev[guarantor],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.address ||
      !formData.guarantor1.cnic ||
      !formData.statement ||
      !formData.phoneNumber
    ) {
      alert("Please fill all the inputs");
      return;
    } else {
      const tokenNumber = `TKN-${Date.now()}`;
      const appointmentDate = new Date();
      appointmentDate.setDate(appointmentDate.getDate() + 7);

      const slipDetails = {
        tokenNumber,
        qrCodeValue: tokenNumber,
        appointmentDetails: {
          date: appointmentDate.toDateString(),
          time: "10:00 AM",
          location: "Saylani Head Office, Karachi",
        },
      };

      const userData = localStorage.getItem("userData");
      const parsedUserData = userData ? JSON.parse(userData) : null;

      const localData = localStorage.getItem("formData");
      const parsedData = localData ? JSON.parse(localData) : {};
      const data = {
        ...formData,
        ...parsedData,
        ...slipDetails,
        userId: currentUser.uid,
        status: 'pending'
      };
      addDoc(collection(db, "form"), data);
      Swal.fire(
        "Form submitted successfully!",
        "Your form has been submitted successfully.",
        "success"
      );
      router.push(`/`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Additional Details</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Guarantor 1</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.guarantor1.name}
            onChange={(e) => handleGuarantorChange(e, "guarantor1")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.guarantor1.email}
            onChange={(e) => handleGuarantorChange(e, "guarantor1")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.guarantor1.location}
            onChange={(e) => handleGuarantorChange(e, "guarantor1")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            CNIC
          </label>
          <input
            type="text"
            name="cnic"
            value={formData.guarantor1.cnic}
            onChange={(e) => handleGuarantorChange(e, "guarantor1")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's CNIC"
          />
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Guarantor 2</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.guarantor2.name}
            onChange={(e) => handleGuarantorChange(e, "guarantor2")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.guarantor2.email}
            onChange={(e) => handleGuarantorChange(e, "guarantor2")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.guarantor2.location}
            onChange={(e) => handleGuarantorChange(e, "guarantor2")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            CNIC
          </label>
          <input
            type="text"
            name="cnic"
            value={formData.guarantor2.cnic}
            onChange={(e) => handleGuarantorChange(e, "guarantor2")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter guarantor's CNIC"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Statement
          </label>
          <input
            type="text"
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your statement"
          />
        </div>

        <Button type="submit">Submit Loan Application</Button>
      </form>
    </div>
  );
};

export default AdditionalDetails;
