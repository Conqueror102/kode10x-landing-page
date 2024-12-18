import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="w-full p-6 px-20 flex bg-white justify-between font-semibold text-lg">
    <div className="w-[140px]  h-50px ">
      <img className="w-full h-full object-cover"
        src="../../../public/airliftlogo.svg"
        alt=""
      />
    </div>

    <div className="flex gap-4 items-center hover-black">
        
      <Link  to="/AboutUs" className="cursor-pointer hover:text-[#512DA8] transition-all duration-400 ease-in-out">
About Us
      </Link>
      <button className="py-1 px-10 rounded-md bg-[#512DA8] text-white">
        Sign up
      </button>
      <button className="py-1 px-10 rounded-md border-[1px] border-[#000000] text-black">
        login
      </button>
    </div>
  </div>
  )
}

export default Header