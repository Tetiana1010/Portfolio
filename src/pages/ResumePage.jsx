import React, { Fragment } from "react";
import { MainLayout } from "../styled/Layouts.js";
import Skills from '../components/Skills';
import Resume from '../components/Resume';

const ResumePage = () => {
  return <Fragment>
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  </Fragment>
};

export default ResumePage;