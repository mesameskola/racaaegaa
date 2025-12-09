import React from "react";

function HomeToStart() {
  return (
    <>
      <div className="flex">
        <p className="text-[20px] font-bold text-[#030303] w-[50%]">To Start</p>
        <div className="w-[50%]">
          <div className="  flex justify-between">
            <p className="text-[20px]">Oysters Mignonette</p>
            <p className="text-[20px]">half-dozen for $12</p>
          </div>
          <p className="text-[20px] text-end mt-[30px] mb-[90px]">
            dozen for $28
          </p>
        </div>
      </div>
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeToStart;
