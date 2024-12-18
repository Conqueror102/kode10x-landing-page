import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full p-6 px-20 flex bg-[#2C1958] justify-between font-semibold text-lg "  >
        <div className="w-[140px]  h-50px">
          
        </div>

        <div className="flex gap-4 items-center hover-black">
          <nav className="cursor-pointer hover:text-[#F56F46] transition-all duration-400 ease-in-out text-white">
            About Us
          </nav>
          <button className="py-1 px-10 rounded-md bg-[#F56F46] text-white">
            Sign up
          </button>
          <button className="py-1 px-10 rounded-md border-[1px] border-[#F56F46] text-[#F56F46]">
            login
          </button>
        </div>
      </div>
      <div className="h-[85vh] bg-[#2C1958] w-[ful]  ">
        <div className="h-[400px] w-full flex flex-col justify-center">
          <p className="text-[#ef6f48] text-center font-semibold text-lg ">Hi! We’re Airlift.</p>
          <h1 className="text-white font-bold text-[3.5rem] text-center  w-full  mt-28">We’re dedicated to making <br/>
          Ultrafast WordPress sites</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
