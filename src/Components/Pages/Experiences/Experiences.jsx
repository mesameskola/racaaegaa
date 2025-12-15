import React from "react";
import Header from "../../Header/Header";
import ExperiencesWarmth from "../../Experiences/ExperiencesWarmth/ExperiencesWarmth";
import ExperienceEveryDay from "../../Experiences/ExperienceEveryDay/ExperienceEveryDay";
import ExperiencesSeasonal from "../../Experiences/ExperiencesSeasonal/ExperiencesSeasonal";
import ExperiencesPrivate from "../../Experiences/ExperiencesPrivate/ExperiencesPrivate";
import Footer from "../../Footer/Footer";
function Experiences() {
  return (
    <div className="max-w-[1280px] bg-[#EBC1AE] m-auto pl-[50px] pt-[20px] pr-[50px]">
      <Header />
      <ExperiencesWarmth />
      <ExperienceEveryDay />
      <ExperiencesSeasonal />
      <ExperiencesPrivate />
      <Footer />
    </div>
  );
}

export default Experiences;
