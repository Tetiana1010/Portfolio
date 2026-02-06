import React from "react";
import { MainLayout } from "../styled/Layouts.js";
import Skills from '../components/Skills';
import Resume from '../components/Resume';

const ResumePage = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  )
};

export default ResumePage;