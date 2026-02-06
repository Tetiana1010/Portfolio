import React from "react";
import styled from "styled-components";
import { MainLayout } from '../styled/Layouts.js';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyles>
        <Title title="About me" span="About me" />
        <ImageSection />
      </AboutStyles>
    </MainLayout>
  )
};

const AboutStyles = styled.section`
  @media screen and (max-width: 1000px){
    
  }
`;

export default AboutPage;
