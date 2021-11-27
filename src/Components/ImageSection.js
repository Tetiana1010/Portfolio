import React, { Fragment } from "react";
import styled from 'styled-components';
import photo from '../images/photo.jpg';
import PrimaryButton from './PrimaryButton.js'

const ImageSection = () => {
  return <Fragment>
    <ImageSectionStyled>
      <div className="left-content">
        <img src={photo} alt=""/>
      </div>
      <div className="right-content">
        <h4>I am <span>Tetiana</span> </h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Atque nihil voluptates ea dolore vel repellat? 
          Quia tenetur non quam exercitationem.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Tetiana Kobryn</p>
            <p>: 21</p>
            <p>: Ukraine</p>
            <p>: English / Russian / Ukrainian</p>
            <p>: Lviv, Ukrain</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={'Download Cv'}></PrimaryButton>
      </div>
    </ImageSectionStyled>
  </Fragment>
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px){
    flex-direction: column;
    .left-content{
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;

    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title, .info {
        p {
          padding: .3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;