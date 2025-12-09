import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import HomeCozy from "../../Home/Homecozy/HomeCozy";
import HomeLimitedMenu from "../../Home/HomeLimitedMenu/HomeLimitedMenu";
import HomeMenu from "../../Home/HomeMenu/HomeMenu";
import HomeToStart from "../../Home/HomeToStart/HomeToStart";
import HomeEntrees from "../../Home/HomeEntrees/HomeEntrees";
import HomeSharing from "../../Home/HomeSharing/HomeSharing";
import HomeExperience from "../../Home/HomeExperience/HomeExperience";

function Home() {
  return (
    <div className="max-w-[1280px] bg-[#EBC1AE] m-auto pl-[50px] pt-[20px] pr-[50px]">
      <Header />
      <HomeCozy />
      <HomeLimitedMenu />
      <HomeMenu />
      <HomeToStart />
      <HomeEntrees />
      <HomeSharing />
      <HomeExperience />
      <Footer />
    </div>
  );
}

export default Home;
