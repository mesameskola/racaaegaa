import React from "react";
import Buttons from "../../Buttons/Buttons";
import img from "../../Img/imageSteak.png";
const ExperiencesSeasonal = () => {
  return (
    <>
      <div className="flex gap-[50px] mb-[40px]">
        <div className="w-[50%]">
          <h1 className="text-[40px] italic font-[EB_Garamond] mb-[50px] ">
            Seasonal Tasting Menu
          </h1>
          <p className="text-[20px] font-[EB_Garamond] mb-[50px] ">
            Discover the chef's vision. Our seasonal tasting menu is a creative
            expression of local ingredients and classic bistro inspiration.
          </p>
          <Buttons btn1={"Book on Resy"} btn2={"Contact Us"} />
        </div>
        <img src={img} alt="" />
      </div>
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
};

export default ExperiencesSeasonal;
