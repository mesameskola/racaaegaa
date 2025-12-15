import React from "react";
import img from "../../Img/imageherrro.png";
function ExperiencesWarmth() {
  return (
    <div>
      <p className=" text-[40px] font-[EB_Garamond] mb-[80px] ">
        Experience the warmth of Balmain's <br /> waterfront at Rose. Where the
        everyday <br /> is elevated to the extraordinary.
      </p>
      <img src={img} alt="" className="mb-[40px]" />
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </div>
  );
}

export default ExperiencesWarmth;
