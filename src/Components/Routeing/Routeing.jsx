import React from "react";
import { Link } from "react-router-dom";

function Routeing() {
  return (
    <div className=" w-[100%] justify-between text-center md:flex">
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
    </div>
  );
}

export default Routeing;
