import React, { Fragment } from "react";
import styled from "styled-components";

const ServiceCard = ({image, title, paragraph}) => {
  return <Fragment>
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt=""/>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  </Fragment>
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-top: solid 8px var(--border-color);
  border-right: solid 1px var(--border-color);
  border-bottom: solid 1px var(--border-color);
  border-left: solid 1px var(--border-color);
  transition: all .4s ease-in-out;
  &:hover {
    border-top: solid 8px var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after{
        content: "";
        width: 2rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
  }
  p {
    padding: 0.8rem 0;
  }
`;

export default ServiceCard;