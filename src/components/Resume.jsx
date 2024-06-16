import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styled/Layouts";
import Title from "./Title";
import SmallTitle from './SmallTitle';
import ResumeItem from './ResumeItem';
import resumeData from '../data/resume'

const Resume = () => {
  return (
    <ResumePageStyled>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        {resumeData.map((section, index) => (
          <div key={index}>
            <div className="small-title">
              <SmallTitle icon={section.icon} title={section.category} />
            </div>
            <div className="resume-content">
              {section.items.map((item, itemIndex) => (
                <ResumeItem
                  key={itemIndex}
                  category={section.category}
                  title={item.title}
                  institution={item.institution}     
                  location={item.location}       
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        ))} 
      </InnerLayout>
    </ResumePageStyled>
  );
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
    padding-left: 1rem;
    margin-bottom: 2rem;
  }
`;

export default Resume;
