import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const PageStarter = ({ pageTitle, desc }) => {
  return (
    <div className="md:px-24 px-8 py-6 flex md:flex-row flex-col justify-between items-center bg-gray-50">
      <div>
        <h1 className="text-4xl md:text-5xl md:text-left text-center text-[#00563B] font-[SairaSemibold]">
          {pageTitle}
        </h1>

        <h1 className="pt-2 md:text-left text-center text-slate-600">{desc}</h1>
      </div>
      <div className="flex items-center gap-1 text-slate-600 mt-5 md:mt-0">
        <Home className="h-4 w-4" />
        <h1 className="text-sm">
          <Link href={"/"}>Home</Link>|{" "}
          <span className="text-[#8dc63f]">{pageTitle}</span>
        </h1>
      </div>
    </div>
  );
};

export default PageStarter;
