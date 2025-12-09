import React from "react";
import img from "../../Img/imageheadshot.png";
const AboutTheChef = () => {
  return (
    <>
      <div className="flex">
        <p className="w-[50%] text-[20px]">The Chef</p>
        <div>
          <div className=" ">
            <img className="" src={img} alt="" />
            <h1 className="text-[30px] italic mb-[40px] mt-[70px]">
              Chef Julianne Coulter
            </h1>
            <p className="text-[20px] w-[580px] mb-[60px]">
              Our kitchen is led by a talented team of women, dedicated to
              creating dishes that honor both tradition and contemporary
              culinary artistry. With every bite, you’re experiencing the heart
              of Scandinavia — crafted with care, passion, and a commitment to
              sustainability and community. Welcome to a new chapter of Nordic
              dining.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
};

export default AboutTheChef;
