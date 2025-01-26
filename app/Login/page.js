"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { handleSendEmail } from "../server/server";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const LoanSubmissionForm = () => {
  const router = useRouter();
  const [psw, setPsw] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !psw) {
      alert("Please fill in all fields");
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
        signInWithEmailAndPassword(auth, email, psw)
        .then((response) => {
          router.push('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          if(errorCode === 'auth/invalid-credential'){
            alert("Invalid email or password. Please try again.");
          }
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
        <h2 className="text-2xl font-bold mb-4">Login Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
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
            placeholder="Enter your name"
          />
        </div>

        <div className="flex">
          <h1>Don't have an account ? <Link href='Signup'>Sign Up</Link></h1>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LoanSubmissionForm;