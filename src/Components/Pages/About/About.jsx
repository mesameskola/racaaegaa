import React from "react";
import Header from "../../Header/Header";
import AboutVegitableImg from "../../About/AboutVegitableImg/AboutVegitableImg";
import AboutSecretEscape from "../../About/AboutSecretEscape/AboutSecretEscape";
import AboutTeam from "../../About/AboutTeam/AboutTeam";
import AboutTheChef from "../../About/AboutTheChef/AboutTheChef";

function About() {
  return (
    <div className="max-w-[1280px] bg-[#EBC1AE] m-auto pl-[50px] pt-[20px] pr-[50px]">
      <Header />
      <AboutVegitableImg />
      <AboutSecretEscape />
      <AboutTeam />
      <AboutTheChef />
    </div>
  );
}

export default About;
