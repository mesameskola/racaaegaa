import React from "react";

function Buttons({ btn1, btn2 }) {
  return (
    <div className=" flex gap-[10px]">
      <button className=" w-[134px] h-[58px] bg-[#000000] rounded-[2px] text-[#EBC1AE]  text-[16px] italic">
        {btn1}
      </button>
      <button className="btn2 w-[170px] h-[58px] bg-[#000000] rounded-[2px] text-[#EBC1AE] text-[16px] italic">
        {btn2}
      </button>
    </div>
  );
}

export default Buttons;
