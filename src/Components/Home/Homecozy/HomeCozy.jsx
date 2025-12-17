import React from "react";
import Buttons from "../../Buttons/Buttons";
import Schedule from "../../Schedule/Schedule";
import img from "../../Img/imagehero.png";
function HomeCozy() {
  return (
    <>
      <div className=" items-start gap-[20px] mt-[34px] w-[100%]  md:flex text-center  md:text-start  ">
        <div className="w-[50%] ">
          <p className="text-[40px] mb-[90px]">
            Cozy meets refined on Balmain's waterfront.
          </p>
          <Buttons btn1="Book on Resy" btn2="Dining Experiences" />
        </div>
        <div className="w-[50%]">
          <hr className="w-[100%] mb-[30px]" />
          <Schedule />
        </div>
      </div>
      <img src={img} alt="" className="mt-[30px] mb-[40px]" />
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeCozy;
