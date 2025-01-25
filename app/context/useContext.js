"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [appointmentTitles, setAppointmentTitles] = useState([]);
  const [events, setEvents] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [webInfo, setWebInfo] = useState();
  const [webImages, setwebImages] = useState();

  const fetchDoctors = async () => {
    try {
      const doctorsSnapshot = await getDocs(collection(db, "doctors"));
      const doctor = doctorsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctors(doctor);
      localStorage.setItem("doctors", JSON.stringify(doctor));
    } catch (error) {
      console.error("Error fetching order list:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const servicesSnapshot = await getDocs(collection(db, "services"));
      const service = servicesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(service);
      localStorage.setItem("services", JSON.stringify(service));
    } catch (error) {
      console.error("Error fetching order list:", error);
    }
  };

  const fetchAppointTitle = async () => {
    try {
      const appointTitleSnapshot = await getDocs(collection(db, "appointTitle"));
      const appointTitle = appointTitleSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointmentTitles(appointTitle);
      localStorage.setItem("appointTitles", JSON.stringify(appointTitle));
    } catch (error) {
      console.error("Error fetching order list:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const eventsSnapshot = await getDocs(collection(db, "events"));
      const event = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(event);
      localStorage.setItem("events", JSON.stringify(event));
    } catch (error) {
      console.error("Error fetching order list:", error);
    }
  };

  const fetchFacilities = async () => {
    try {
      const facilitiesSnapshot = await getDocs(collection(db, "facilities"));
      const facility = facilitiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFacilities(facility);
      localStorage.setItem("facilities", JSON.stringify(facility));
    } catch (error) {
      console.error("Error fetching order list:", error);
    }
  };

  const fetchWebData = async () => {
    try {
      const webInfoDoc = await getDoc(doc(db, "webInfo", "data"));
      if (webInfoDoc.exists()) {
        setWebInfo(webInfoDoc.data());
        localStorage.setItem("webInfo", JSON.stringify(webInfoDoc.data()));
      } else {
        console.error("No such document for webInfo data!");
      }
    } catch (error) {
      console.error("Error fetching web data:", error);
    }
  };

  const fetchWebImages = async () => {
    try {
      const imagesDoc = await getDoc(doc(db, "webInfo", "images"));
      if (imagesDoc.exists()) {
        setwebImages(imagesDoc.data());
        localStorage.setItem("webImages", JSON.stringify(imagesDoc.data()));
      } else {
        console.error("No such document for webInfo images!");
      }
    } catch (error) {
      console.error("Error fetching web images:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchDoctors(),
        fetchServices(),
        fetchAppointTitle(),
        fetchEvents(),
        fetchFacilities(),
        fetchWebData(),
        fetchWebImages(),
      ]);
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        doctors,
        services,
        appointmentTitles,
        events,
        facilities,
        webInfo,
        webImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};