import React from "react";
import { Link } from "react-router-dom";

function Routeing() {
  return (
    <div className="flex justify-between">
      <h1 className="Rose text-[150px] font-[East Sea Dokdo] ">
        <Link to="/"> Rose </Link>
      </h1>
      <nav className="ml-[480px]">
        <ul className="text-[34px] flex gap-[4px]  font-[EB Garamond] ">
          <li>
            <Link to="/About"> About,</Link>
          </li>

          <li>Experiences,</li>
          <li>Email</li>
        </ul>
      </nav>
    </div>
  );
}

export default Routeing;
