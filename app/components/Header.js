"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = usePathname();
  const pathname = router ? router : 'Home';

  const [activeMenu, setActiveMenu] = useState('Home');

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Application", link: "/IUserApplication" },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };


  return (
    <>
      {/* New header */}
      <div className="flex justify-center items-center">
        <div className="container md:mx-20 mx-auto bg-[#00563B] text-white rounded-bl-md rounded-br-md flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center ml-4 mb-2 sm:mb-0">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">17 LOCATIONS ACROSS PAKISTAN</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/mmtrust/"
                target="blank"
                className="hover:bg-[#8dc63f] border rounded-full border-white p-1 duration-300 hover:border-[#8dc63f]"
              >
                <Facebook className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.instagram.com/mmteyehospital/"
                target="blank"
                className="hover:bg-[#8dc63f] border rounded-full border-white p-1 duration-300 hover:border-[#8dc63f]"
              >
                <Instagram className="w-3 h-3" />
              </Link>
              <Link
                href="#"
                target="blank"
                className="hover:bg-[#8dc63f] border rounded-full border-white p-1 duration-300 hover:border-[#8dc63f]"
              >
                <Linkedin className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=EvBXRIs5Hj0"
                target="blank"
                className="hover:bg-[#8dc63f] border rounded-full border-white p-1 transition-all duration-300 hover:border-[#8dc63f]"
              >
                <Youtube className="w-3 h-3" />
              </Link>
            </div>
            <Link
              href="/Donate-now"
              className="bg-[#8dc63f] px-6 py-2 md:rounded-br-md hover:bg-transparent duration-300 border-l border-[#8dc63f] hover:border-[#FFF]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md py-1 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-12 flex flex-wrap items-center justify-between">
          <button
            className="sm:hidden text-[#00563B] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://saylaniwelfareusa.com/static/media/logo_saylaniwelfareusa.22bf709605809177256c.png"
              alt="Hashmanis Logo"
              className="sm:h-[50px] w-auto"
            />
          </Link>

          <ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } sm:flex absolute sm:relative top-full left-0 w-full sm:w-auto bg-[#00563B] sm:bg-transparent text-white sm:text-black`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="sm:inline-block">
                <Link
                  href={item.link}
                  onClick={() => {
                    handleMenuClick(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 md:rounded-3xl hover:bg-[#8dc63f] hover:text-white duration-300 ${
                    activeMenu === item.name
                      ? "bg-[#8dc63f] md:bg-[#8dc63f] md:text-white text-white sm:text-[#8dc63f]"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* <ul className={`${isMobileMenuOpen ? "block" : "hidden"} sm:flex absolute sm:relative top-full left-0 w-full sm:w-auto bg-[#00563B] sm:bg-transparent text-white sm:text-black`}>
      {menuItems.map((item, index) => (
        <li key={index} className="sm:inline-block">
          <Link
            href={item.link}
            onClick={() => handleMenuClick(item.name)}
            className={`block px-4 py-2 md:rounded-3xl hover:bg-[#8dc63f] hover:text-white duration-300 ${
              pathname === item.link
                ? "bg-[#8dc63f] md:bg-[#8dc63f] md:text-white text-white sm:text-[#8dc63f]"
                : ""
            }`}
          >
            {item.name}
          </Link>
            
        </li>
      ))}
    </ul> */}

          <div className="flex flex-col items-center sm:items-end">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-gray-100 mr-2">
                <Phone className="w-5 h-5 text-[#8dc63f]" />
              </div>
              <div>
                <h3 className="text-[#00563B] font-bold text-sm sm:text-base">
                  CALL NOW FOR HELP
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  (123456789)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Old Header */}
      {/* <div className="bg-[#00563B] text-white py-2">
        <div className="container mx-auto px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-2 sm:mb-0">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">17 LOCATIONS ACROSS PAKISTAN</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-blue-700">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="/mmt-logo.png"
              alt="Hashmanis Logo"
              className="h-[100px] w-auto"
            />
          </Link>
          <div className="text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-end">
              <Phone className="w-5 h-5 text-[#8dc63f] mr-2" />
              <div>
                <h3 className="text-[#00563B] font-bold">CALL NOW FOR HELP</h3>
                <p className="text-gray-600">111-1-ICARE</p>
                <p className="text-gray-600">(021-111-142-273)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#00563B] text-white sticky top-0 w-full z-10">
        <div className="container mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center">
            <button
              className="sm:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu /> }
            </button>
            <ul className={`flex flex-col sm:flex-row gap-[2px] font-semibold ${isMobileMenuOpen ? 'block' : 'hidden'} sm:flex absolute sm:relative top-full left-0 w-full sm:w-auto bg-[#00563B] sm:bg-transparent`}>
              {menuItems.map((item, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={item.link}
                    onClick={() => {
                      handleMenuClick(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`inline-block px-4 py-4 relative z-10 font-[SairaSemibold] w-full sm:w-auto ${activeMenu === item.name ? 'bg-[#8dc63f]' : ''}`}
                  >
                    {item.name}
                  </Link>
                  <span className="absolute left-0 bottom-0 h-full w-0 bg-[#8dc63f] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            <Link href='/Donate-now' className='bg-[#8dc63f] px-6 py-[6px] rounded-[20px]'>Donate Now</Link>
          </div>
        </div>
      </nav> */}
    </>
  );
}
