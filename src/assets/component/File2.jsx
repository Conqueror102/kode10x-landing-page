import React from "react";
// import logo from "../../../public/react.svg";
import Button from "../Button";
import PropsTypes from "prop-types";

const File2 = ({ companyName, price, color, title, logo }) => {
  console.log(companyName);
  return (
    <div className="border-2 max-w-[350px] rounded-md p-5">
      <div className="flex justify-between items-center mb-4 ">
        <div className="leading-7">
          <div className="text-[#932626] font-semibold text-sm w-full h-16">
            {companyName}
          </div>
          <div className="font-bold text-main-Clamp">Product Designer</div>
        </div>
        <div className="size-16">
          <img
            className="object-contain size-full"
            src={logo}
            alt="company logo"
          />
        </div>
      </div>
      <div className="text-secondary font-bold text-[1.2rem] mb-4">{price}</div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus amet
        expedita, nostrum quisquam numquam exercitationem esse, reiciendis quos
        fugit molestiae quas doloribus modi distinctio iste! Officia reiciendis
        perferendis vitae esse.
      </div>
      <div className="mt-4 flex justify-between items-center font-semibold ">
        <Button color={color} title={title} />
        <div>Lagos, Nigeria</div>
      </div>
    </div>
  );
};

export default File2;

File2.propsTypes = {
  companyName: PropsTypes.string,
  price: PropsTypes.string,
  color: PropsTypes.string,
  title: PropsTypes.string,
};
