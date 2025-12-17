import React from "react";
import Buttons from "../../Buttons/Buttons";
import Schedule from "../../Schedule/Schedule";
import imgXl from "../../Img/imagehero.png";
import imgLg from "../../Img/heroLG.png";
function HomeCozy() {
  return (
    <>
      <div className=" gap-[20px] md:mt-[34px] mt-[50px] w-[100%] flex md:flex-row justify-center items-center flex-col text-center ">
        <div className="sm:w-[50%] w-full">
          <p className="text-[40px] mb-[90px]">
            Cozy meets refined on Balmain's waterfront.
          </p>
          <Buttons btn1="Book on Resy" btn2="Dining Experiences" />
        </div>
        <div className="sm:w-[50%] w-full">
          <hr className="w-[100%] mb-[30px]" />
          <Schedule />
        </div>
      </div>
      <img src={imgXl} alt="" className="mt-[30px] mb-[40px] md:block hidden" />
      <img src={imgLg} alt="" className="mt-[30px] mb-[40px] block md:hidden" />
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeCozy;
