import React, { Fragment } from "react";
import styled from 'styled-components';


const SmallTitle = ({icon, title}) => {
  return <Fragment>
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  </Fragment>
};

const SmallTitleStyled = styled.div`
  display: flex;
  &:not(:last-child){
    align-items: center;
  }
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size:  2rem;
  }
`;

export default SmallTitle;
