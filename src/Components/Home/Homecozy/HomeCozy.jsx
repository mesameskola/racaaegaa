import React from "react";
import Buttons from "../../Buttons/Buttons";
import Schedule from "../../Schedule/Schedule";
import img from "../../Img/imagehero.png";
function HomeCozy() {
  return (
    <>
      <div className="flex items-start gap-[20px] mt-[34px]">
        <div className="w-[580px]">
          <p className="text-[40px] mb-[90px]">
            Cozy meets refined on Balmain's waterfront.
          </p>
          <Buttons btn1="Book on Resy" btn2="Dining Experiences" />
        </div>
        <div>
          {" "}
          <hr className="w-[580px] mb-[30px]" />
          <Schedule />
        </div>
      </div>
      <img src={img} alt="" className="mt-[30px] mb-[40px]" />
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeCozy;
