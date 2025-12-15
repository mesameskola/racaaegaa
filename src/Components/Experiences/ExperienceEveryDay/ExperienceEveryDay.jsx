import React from "react";
import Buttons from "../../Buttons/Buttons";
import img from "../../Img/imagee.png";
function ExperienceEveryDay() {
  return (
    <>
      <div className="flex gap-[50px] mb-[40px]">
        <div className="w-[50%]">
          <h1 className="text-[40px] italic font-[EB_Garamond] mb-[50px] ">
            Everyday Dining
          </h1>
          <p className="text-[20px] font-[EB_Garamond] mb-[76px] ">
            Drop in for dinner. Our daily menu offers a delightful selection of
            seasonal dishes, perfect for any occasion.
          </p>
          <Buttons btn1={"Book on Resy"} btn2={"Contact Us"} />
        </div>
        <img src={img} alt="" />
      </div>
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default ExperienceEveryDay;
