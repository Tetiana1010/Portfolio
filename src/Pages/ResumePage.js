import React, { Fragment } from "react";
import { MainLayout } from "../styled/Layouts.js";
import Skills from '../Components/Skills.js';
import Resume from '../Components/Resume.js';

const ResumePage = () => {
  return <Fragment>
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  </Fragment>
};

export default ResumePage;