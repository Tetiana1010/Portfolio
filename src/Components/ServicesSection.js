import React, { Fragment } from "react";
import styled from "styled-components";
import { InnerLayout } from '../styled/Layouts.js';
import Title from "./Title.js";
import ServiceCard from '../Components/ServiceCard.js';
//import food from '../images/food.jpg';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg';
import gamedev from '../images/game-dev.svg';

const ServicesSection = () => {
  return <Fragment>
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Services'} span={'services'}></Title>
        <div className="services">
          <ServiceCard 
            image={design} 
            title={'Web development'} 
            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
          />
          <div className="mid-card">
            <ServiceCard 
              image={intelligence} 
              title={'Web development'} 
              paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
            />
          </div>
          <ServiceCard 
            image={gamedev} 
            title={'Web development'} 
            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  </Fragment>
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px){
      flex-direction: column;
    }
    @media screen and (max-width:950px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:650px){
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default ServicesSection;