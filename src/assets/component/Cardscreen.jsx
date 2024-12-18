import React from "react";
import PropsCard from "./PropsCard";

const Cardscreen = () => {
  return (
  <div className="flex gap-5 p-4">
      <PropsCard
      logo="../public/s10.png"
      theH3="Marketing and comunication"
      Spantext="Fast System Consultant"
      address="Ajegunle"
      course="Accountancy"
      job="Freelance"
      time="1m ago"
    />
    
    <PropsCard
    logo="../public/s1.png"
    theH3="Web developer"
    Spantext="Pendragon Green Ltd"
    address="Canyon Village, Ramon"
    course="IT & Telecoms"
    job="Part-Time"
    time="3D ago"
  />
  </div>
  );
};

export default Cardscreen;
