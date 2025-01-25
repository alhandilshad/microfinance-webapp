'use client';
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/app/utils/firebaseConfig";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from "lucide-react";



const page = ({ name }) => {
  const [service, setService] = useState('');
  const [visitFirstTime, setVisitFirstTime] = useState('yes');
  const [isLoading, setIsLoading] = useState(false);

  const services = JSON.parse(localStorage.getItem('services'))


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    gender: "",
    recordNo: "",
    number: "",
    email: "",
    comments: "",
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
      formData.firstName === '' || 
      formData.lastName === '' || 
      formData.age === '' || 
      formData.address === '' || 
      formData.gender === '' || 
      formData.recordNo === '' || 
      formData.number === '' || 
      formData.email === '' || 
      formData.comments === ''
  ) {
      return toast.error('All Fields Are Required');
  }
  
    setIsLoading(true);
    await addDoc(collection(db, "Appointments"), {
      ...formData,
      service,
      visitFirstTime,
      title: name,
      timestamp: Date.now(),
    });
    toast.success("Appointment booked successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      gender: "",
      recordNo: "",
      number: "",
      email: "",
      comments: "",
    })
    setIsLoading(false);
  }

  return (
    <>
      <div className="container mx-auto px-14 py-16">
        <div className="flex items-center justify-center gap-5">
          <div className="w-full">
            <label className="text-sm">First Name <span className="text-[#8dc63f]">*</span></label>
            <Input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" className="mt-1" />
          </div>
          <div className="w-full">
            <label className="text-sm">Last Name <span className="text-[#8dc63f]">*</span></label>
            <Input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="mt-1" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 pt-5">
          <div className="w-full">
            <label className="text-sm">Age <span className="text-[#8dc63f]">*</span></label>
            <Input name="age" value={formData.age} onChange={handleChange} type="number" placeholder="Age" className="mt-1" />
          </div>
          <div className="w-full">
            <label className="text-sm">Address <span className="text-[#8dc63f]">*</span></label>
            <Input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Address" className="mt-1" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 pt-5">
          <div className="w-full">
            <label className="text-sm">Gender <span className="text-[#8dc63f]">*</span></label>
            <Input name="gender" value={formData.gender} onChange={handleChange} type="text" placeholder="Gender" className="mt-1" />
          </div>
          <div className="w-full">
            <label className="text-sm">Medical Record No. (If Any) <span className="text-[#8dc63f]">*</span></label>
            <Input name="recordNo" value={formData.recordNo} onChange={handleChange} type="text" placeholder="Record Number" className="mt-1" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 pt-5">
          <div className="w-full">
            <label className="text-sm">Mobile Number <span className="text-[#8dc63f]">*</span></label>
            <Input name="number" value={formData.number} onChange={handleChange} type="number" placeholder="Mobile Number" className="mt-1" />
          </div>
          <div className="w-full">
            <label className="text-sm">Email <span className="text-[#8dc63f]">*</span></label>
            <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="mt-1" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 pt-5">
          <div className="w-full">
            <label className="text-sm">Services</label>
            <Select value={service} onValueChange={(e) => setService(e)} className="mt-1">
              <SelectTrigger>
                <SelectValue placeholder="Services"/>
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <label className="text-sm">First Time Visit?</label>
            <RadioGroup defaultValue="yes" className="flex flex-row gap-4 mt-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" onClick={()=>setVisitFirstTime('yes')} id="yes" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" onClick={()=>setVisitFirstTime('no')} id="no" />
                <label htmlFor="no">No</label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="pt-5">
          <label className="text-sm">Comments</label>
          <Textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" className="mt-1" />
        </div>
        <div className="pt-6">
          <Button className='bg-[#8dc63f] border border-[#8dc63f] hover:bg-white hover:text-[#8dc63f]' disabled={isLoading} onClick={handleSubmitData}>{isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Submit Form"}</Button>
        </div>

      </div>
    </>
  );
};

export default page;