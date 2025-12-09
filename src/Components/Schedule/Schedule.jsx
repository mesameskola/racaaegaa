import React from "react";
const shcedule = [
  {
    day: "Monday :",
    time: "5pm – 8pm",
  },
  {
    day: "Tuesday :",
    time: "5pm – 8pm",
  },
  {
    day: "Wednesday :",
    time: "5pm – 8pm",
  },
  {
    day: "Thursday :",
    time: "5pm – 10pm",
  },
  {
    day: "Friday :",
    time: "5pm – Late",
  },
  {
    day: "Saturday :",
    time: "5pm – Late",
  },
  {
    day: "Sunday :",
    time: "Closed",
  },
];
function Schedule() {
  return (
    <div className="flex justify-between">
      <div className="w-[240px] text-[16px] italic text-[#222222] ">
        <p>
          24 Darling St <br /> Balmain
        </p>
      </div>
      <div className="w-[270px] flex">
        <nav className="">
          <ul className="">
            {shcedule.map((Links, index) => (
              <li
                className="Scheduleli text-[16px]/[30px] italic"
                style={{ lineHeight: "35px" }}
                key={Links}
              >
                {Links.day} {Links.time}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Schedule;
