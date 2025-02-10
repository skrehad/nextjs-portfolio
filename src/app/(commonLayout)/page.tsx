import About from "@/src/components/homeView/about";
import Banner from "@/src/components/homeView/banner";
import MyEducation from "@/src/components/homeView/education";
import Project from "@/src/components/homeView/project";
import Services from "@/src/components/homeView/services";
import MySkills from "@/src/components/homeView/skills";
import React from "react";

const HomePage = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-24">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Project></Project>
      <MySkills></MySkills>
      <MyEducation></MyEducation>
    </div>
  );
};

export default HomePage;
