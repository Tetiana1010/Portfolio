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
                title={'Master of ...'} 
                year={'2015 -2020'} 
                subTitle={'University'}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame'}>
              </ResumeItem>
              <ResumeItem 
                title={'Master of ...'} 
                year={'2015 -2020'} 
                subTitle={'University'}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame'}>
              </ResumeItem>
              <ResumeItem 
                title={'Master of ...'} 
                year={'2015 -2020'} 
                subTitle={'University'}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame'}>
              </ResumeItem>
            </div>
            <div className="small-title u-small-title-margin">
              <SmallTitle icon={school} title={'Educational Qualifications'}></SmallTitle>            
            </div>
            <div className="resume-content">
              <ResumeItem 
                title={'Master of ...'} 
                year={'2015 -2020'} 
                subTitle={'University'}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame'}>
              </ResumeItem>
              <ResumeItem 
                title={'Master of ...'} 
                year={'2015 -2020'} 
                subTitle={' University'}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame'}>
              </ResumeItem>
              <ResumeItem 
                title={'Master of ... '} 
                year={'2015 -2020'} 
                subTitle={'University'}
                text={'Lorem ipsum dolor. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit ame'}>
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