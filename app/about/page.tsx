import AboutUs from "@/components/(user)/aboutdetail";
import TrainingEventButtons from "@/components/(user)/eventhandeller";
import HeroSection from "@/components/(user)/herosection";

import YouTubeRow from "@/components/(user)/media";
import React from "react";

const about = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <YouTubeRow />
      <TrainingEventButtons />
    </div>
  );
};

export default about;
