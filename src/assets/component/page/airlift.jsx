import React from "react";
// import linear from "../assets/images/linear"
// import { Link } from "react-router-dom";
// import {images} from "../../../assets/images/02.png"
const Airlift = () => {
  return (
    <div className="w-[full]  ">
      
      <div className="w-full h-[87vh] flex bg-cover bg-white bg-[url('/linear.png')]">
      
        <div className="w-[70%] px-20 mt-10">
          <p className="mb-5  text-[55px] font-extrabold leading-[63px] text-[#000000]">
            {" "}
            Ultra Fast with the Click of a Button
            <span className="text-[#512DA8]  rounded-md  ">
              WordPress Sites
            </span>{" "}
          </p>
          <p className="text-[1.5rem]  leading-[26px] text-[#8C8D81] mb-5">
            Airlift will instantly speed up your WordPress site and boost your
            Google Core Web Vitals scores. It is a complete performance solution
            for your website including caching, CDN, image optimization, css
            improvements and more.
          </p>
          <button className="px-10 py-3 bg-[#512DA8]  text-white rounded-md font-medium">
            Get Started Now
          </button>
        </div>
        <div className="w-[35%] h-full">
          <img
            className="w-full h-full  object-contain"
            src="https://airlift.net/wp-content/uploads/2023/07/airlift-hero-ig.svg"
            alt=""
          />
        </div>
      </div>

      <div className="px-20">
        <div className="w-[full] h-[600px] bg-black">video</div>
      </div>
      <div></div>
    </div>
  );
};

export default Airlift;
