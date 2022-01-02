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
              <SmallTitle icon={school} title={'Education and courses'}></SmallTitle>            
            </div>
            <div className="resume-content">
              <ResumeItem 
                title={'Bachelor in History'} 
                year={'2019 - 2022'} 
                subTitle={'Lviv University'}
                text={'During this program, I have mastered my research skills and became adept at critical thinking skills that can be applied to many other environments and professions'}>
              </ResumeItem>
              <ResumeItem 
                title={'WEB DESIGN'} 
                year={'2020 - 2020'} 
                subTitle={'SKVOT'}
                text={'On this course, I have learned the basic principles of web development and design. I was introduced how to create information architecture, build grids and develop adaptives'}>
              </ResumeItem>
              <ResumeItem 
                title={'JS Basics'} 
                year={'2020 - 2021'} 
                subTitle={'Mate Academy'}
                text={'On this course, I have mastered the basic JavaScript language syntax and concepts: variables, loops, functions, classes, logical operators and other basic JavaScript constructs.'}>
              </ResumeItem>
              <ResumeItem 
                title={'FRONT END PRO'} 
                year={'2020 - 2021'} 
                subTitle={'HILLEL IT school'}
                text={'On this course, I have learned how to interact with servers using JavaScript and Node.js, mastered the principles of OOP. And also I was studying the features of the React library'}>
              </ResumeItem>
              <ResumeItem 
                title={'Managing Big Data with MySQL'} 
                year={'2021 - 2022'} 
                subTitle={'Duke University (Coursera platform)'}
                text={"This current Coursera specialization, 'Managing Big Data with MySQL' is about how 'Big Data' interacts with business, and how to use data analytics to create value for businesses "}>
              </ResumeItem>
            </div>
            <div className="small-title u-small-title-margin">
              <SmallTitle icon={briefcase} title={'Working Expirience'}></SmallTitle>
            </div>
            {/* <div className="resume-content">
              <ResumeItem 
                title={'Master'} 
                year={'2022 - 2020'} 
                subTitle={''}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame tationem. Lorem ipsum dolor sit ame'}>
              </ResumeItem>
            </div> */}
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