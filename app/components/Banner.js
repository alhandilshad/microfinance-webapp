'use client';
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { auth } from "../utils/firebaseConfig";

export default function Banner() {
    const user= auth.currentUser;
    console.log(user, 'alhan');
    const router = useRouter();
  return (
      <div className="mx-auto py-20 relative container p-6 md:text-left text-center flex h-[78vh] justify-center ">
        <img className="absolute top-0 w-full h-full object-cover" src="https://www.khudii.com/wp-content/uploads/2024/01/2-9.png" alt="medical image"/>
        <div className="inset-0 bg-black opacity-20 absolute"></div>
        <div className="md:w-2/5 flex flex-col justify-center z-[5] h-full text-center">
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Saylani Microfinance WebApp</h1>
            <p className="mt-6 text-white text-lg">Saylani is a trust based hospital which is rendering its services for all kinds of illness and especially for eyes related problems. They provide the service of surgery as well. Treatment over there is satisfactory and highly appreciable.</p>
            <Button onClick={() => router.push('/Signup')} 
            className="mt-8 bg-green-800 hover:bg-green-900 text-white px-8 py-2 h-auto text-base" >Register
            </Button>
          </div>

        </div>
      </div>
  )
}
