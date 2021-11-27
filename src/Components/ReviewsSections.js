import React from "react";
import styled from "styled-components";
import {InnerLayout} from '../styled/Layouts';
import Title from "./Title";
import ReviewItem from './ReviewItem.js'

const ReviewsSection = () => {
  return (
    <ReviewsStyled>
      <Title title={'Reviews'} span={'Reviews'}/>
      <InnerLayout>
        <div className="rewiews">
          <ReviewItem 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <ReviewItem 
            text="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  )
}

const ReviewsStyled = styled.section`
  .rewiews{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px){
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSection;