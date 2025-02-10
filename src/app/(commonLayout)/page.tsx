import About from "@/src/components/homeView/about";
import Banner from "@/src/components/homeView/banner";
import MyEducation from "@/src/components/homeView/education";
import Services from "@/src/components/homeView/services";
import MySkills from "@/src/components/homeView/skills";
import React from "react";

const HomePage = () => {
  return (
    <div className=" mx-20">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <MySkills></MySkills>
      <MyEducation></MyEducation>
    </div>
  );
};

export default HomePage;
