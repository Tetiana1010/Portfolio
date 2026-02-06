import React from "react";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import { MainLayout } from "../styled/Layouts.js";

const AboutPage = () => {
  return (
    <MainLayout>
      <Title title="About me" span="About me" />
      <ImageSection />
    </MainLayout>
  )
};

export default AboutPage;
