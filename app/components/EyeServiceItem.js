import React from "react";

const EyeServiceItem = ({ icon: Icon, title }) => {
  return (
    <div className="h-44 w-full md:w-[235px] border-b sm:border-b-0 sm:border-r last:border-r-0 flex flex-col items-center justify-center gap-7">
      <Icon className="text-[#8dc63f] w-10 h-10" />
      <h1 className="font-bold text-[#00563B] hover:text-[#8dc63f] duration-300 cursor-pointer text-center px-2">
        {title}
      </h1>
    </div>
  );
};

export default EyeServiceItem;
