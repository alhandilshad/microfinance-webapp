"use client"
import PageStarter from '@/app/components/PageStarter';
import { useParams } from 'next/navigation'
import React from 'react'
import AppointmentForm from '@/app/components/AppointmentForm';

const page = () => {
    const { name } = useParams();
    const nameParts = name.split('%20');
    const combinedName = nameParts.length > 1 ? `${nameParts[0]} ${nameParts[1]}` : name;
  return (
    <>
    <PageStarter pageTitle={`${combinedName} Appointment Form`} />
    <AppointmentForm name={combinedName} />
    </>
  )
}

export default page;