import React from "react";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import { MainLayout } from "../styled/Layouts.js";

const ResumePage = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  )
};

export default ResumePage;