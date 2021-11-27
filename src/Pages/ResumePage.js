import React, { Fragment } from "react";
import Skills from '../Components/Skills.js';
import Resume from '../Components/Resume.js';
import { MainLayout } from "../styled/Layouts.js";

const ResumePage = () => {
  return <Fragment>
    <MainLayout>
      <Skills></Skills>
      <Resume></Resume>
    </MainLayout>
  </Fragment>
};

export default ResumePage;