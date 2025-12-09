import React from "react";
const bill = [
  {
    title:
      "Warm house-baked sourdough with whipped truffle butter & Maldon sea salt",
    money: "$18",
  },
  {
    title:
      "Hummus, whipped feta, and roasted red pepper dip with grilled pita & crostini",
    money: "$18",
  },
  {
    title:
      "Creamy burrata, basil oil, balsamic glaze, cherry tomatoes, & toasted sourdough",
    money: "$18",
  },
  {
    title: "Baby arugula, mission figs, goat cheese, Marcona almonds",
    money: "$18",
  },
];
function HomeSharing() {
  return (
    <>
      <div className="flex mb-[120px]">
        <p className="text-[20px] font-bold text-[#030303] w-[50%]">Entrees</p>
        <nav className="w-[50%]">
          <ul className="flex flex-col gap-[30px]">
            {bill.map((text, index) => (
              <li key={text} className="text-[20px] ">
                <span key={text}>{text.title}</span>
                <span key={text}>{text.money}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeSharing;
