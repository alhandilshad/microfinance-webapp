"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { handleSendEmail } from "../server/server";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const LoanSubmissionForm = () => {
  const router = useRouter();
  const [psw, setPsw] = useState('');
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cnic || !formData.email || !formData.name || !psw) {
      alert("CNIC is required to save data!");
      return;
    }

    // const psw = Date.now().toString(36);
    // const localData = localStorage.getItem("formData");
    // const parsedData = localData ? JSON.parse(localData) : {};

    // const cleanedFormData = {
    //   ...formData,
    //   ...parsedData
    // };

    try {
      createUserWithEmailAndPassword(auth, formData.email, psw)
        .then((userCredential) => {
          const user = userCredential.user;
          const data = {
            ...formData,
            uid: user.uid,
          }
          addDoc(collection(db, "users"), data);
          localStorage.setItem("user", formData);
          alert("Data saved successfully!");
        //   handleSendEmail(formData.email, psw);
          setFormData({
            cnic: "",
            name: "",
            email: "",
          });

          router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } catch (error) {
      console.error("Error saving data: ", error);
      Swal.fire({
        title: "Failed to Save Data",
        text: `Reason: ${error.message}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">SignUp Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            CNIC
          </label>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="CNIC"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="text"
            name="name"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex">
          <h1>Already have an account ? <Link href='/Login'>Login</Link></h1>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LoanSubmissionForm;