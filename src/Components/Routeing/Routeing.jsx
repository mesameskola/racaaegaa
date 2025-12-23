import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Routeing() {
  return (
    <div className=" w-[100%] flex flex-col justify-between  sm:flex-row sm:items-start items-center ">
      <h1 className="Rose text-[150px] font-[East_Sea_Dokdo] ">
        <Link to="/"> Rose </Link>
      </h1>

      <ul className="text-[34px]  gap-[4px] flex text-center    ">
        <li className="font-[EB_Garamond] ">
          <Link to="/About"> About,</Link>
        </li>

        <li className="font-[EB_Garamond] ">
          <Link to="/Experiences"> Experiences, </Link>
        </li>
        <li className="font-[EB_Garamond] ">Email</li>
      </ul>
      <hr className="w-full h-[2px] bg-red-500 sm:hidden block mt-[20px]" />
    </div>
  );
}

export default Routeing;
