import React, {Fragment} from "react";
import styled from "styled-components";
import Title from "./Title.js";
import {InnerLayout} from "../styled/Layouts.js";
import SmallTitle from './SmallTitle.js';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import School from '@material-ui/icons/School';

import ResumeItem from './ResumeItem.js'

const Resume = () => {
  const briefcase = <BusinessCenterIcon />;
  const school = <School />
  return <Fragment>
      <ResumePageStyled>
        <Title title={'Resume'} span={'Resume'}></Title>
          <InnerLayout>
            <div className="small-title">
              <SmallTitle icon={briefcase} title={'Working Expirience'}></SmallTitle>
            </div>
            <div className="resume-content">
              <ResumeItem 
                title={'Front-end developer'} 
                year={'April 2022 - Present'} 
                subTitle={'Sirwisa a.s., Prague'}
                text={`In charge of a complete design overhaul of the company's website (HTML5, CSS3, JS).
                • In charge of coming upw it ha new UI for the company's main app (Figma) and implementing it in a legacy code base (CSS3, HTML5, PHP). 
                • Implemented UI components forsibling-companyprojects (VueJS, Vite, HTML5, CSS3). 
                • Created an updated version of an internal docs page for the company with a fresh design and new funcionality (CSS3, Hugo Framework, Mermaid Diagrams).`}>
              </ResumeItem>
            </div>
            <div className="small-title u-small-title-margin">
              <SmallTitle icon={school} title={'Internship'}></SmallTitle>            
            </div>
            <div className="resume-content">
              <ResumeItem 
                title={'Full-stack intern developer'} 
                year={'December 2021 - April 2022'} 
                subTitle={'SoftServe, Lviv'}
                text={'Took part in a charity project developing a web app which assists users in locating the nearest available defibrillator unit, working on both the web based front-end (React, Redux, HTML5, CSS3) and the back-end (Node, mongoDB, Typescript).'}>
              </ResumeItem>
            </div>
            <div className="small-title u-small-title-margin">
              <SmallTitle icon={school} title={'Education'}></SmallTitle>            
            </div>
            <div className="resume-content">
              <ResumeItem 
                title={'Bachelor in History'} 
                year={'September 2019 - May 2023'} 
                subTitle={'Lviv University'}
                text={'During this program, I have mastered my research skills and became adept at critical thinking skills that can be applied to many other environments and professions'}>
              </ResumeItem>
            </div>
            <div className="small-title u-small-title-margin">
              <SmallTitle icon={school} title={'Courses'}></SmallTitle>            
            </div>
            <div className="resume-content">
              <ResumeItem 
                title={'WEB DESIGN'} 
                year={'June 2020 - September 2020'} 
                subTitle={'SKVOT'}
                text={'On this course, I have learned the basic principles of web development and design. I was introduced how to create information architecture, build grids and develop adaptives'}>
              </ResumeItem>
              <ResumeItem 
                title={'JS Basics'} 
                year={'September 2020 - October 2020'} 
                subTitle={'Mate Academy'}
                text={'On this course, I have mastered the basic JavaScript language syntax and concepts: variables, loops, functions, classes, logical operators and other basic JavaScript constructs.'}>
              </ResumeItem>
              <ResumeItem 
                title={'FRONT END PRO'} 
                year={'October 2020 - April 2021'} 
                subTitle={'HILLEL IT school'}
                text={'On this course, I have learned how to interact with servers using JavaScript and Node.js, mastered the principles of OOP. And also I was studying the features of the React library'}>
              </ResumeItem>
            </div>
          </InnerLayout>
      </ResumePageStyled>
  </Fragment>
};

const ResumePageStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
