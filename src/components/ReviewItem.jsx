import React, { Fragment } from "react";
import styled from "styled-components";

const ReviewItem = ({text}) => {
  return <Fragment>
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  </Fragment>
};

const ReviewItemStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;
  width: 50%;
  &:not(:first-child){
    margin-left: 2rem;
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    border-width: 0.8rem;
    top: 100%;
    border-style:  solid;
    border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
  }
  p {
    padding: 1rem 0;
  }
`;

export default ReviewItem;