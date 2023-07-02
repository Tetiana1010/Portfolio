import React, { Fragment } from "react";
import styled from 'styled-components';
import photo from '../images/photo.jpg';
import PrimaryButton from './PrimaryButton.js';


const ImageSection = () => {
  return <Fragment>
    <ImageSectionStyled>
      <div className="left-content">
        <img src={photo} alt="My Portfolio Photo"/>
      </div>
      <div className="right-content">
        <h4>I'm <span>Tetiana</span> </h4>
        <p className="paragraph">
          As a front-end developer with a passion for clean and engaging web design, I bring expertise in HTML, CSS (leveraging Tailwind CSS), and
          JavaScript, along with proficiency in Figma for end to end design and implementation. Within my industry experience, I have worked on many features in several full-stack code bases, using Node.js for seamless server-side interactions as well as Vue.js and React for UI, making me a versatile asset ready to elevate any project.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name:</p>
            <p>Age:</p>
            <p>Languages:</p>
            <p>Location:</p>
          </div>
          <div className="info">
            <p>Tetiana Kobryn</p>
            <p>21</p>
            <p>En / Uk / Ru</p>
            <p>Lviv, Ukraine (+remote, relocate)</p>
          </div>
        </div>
        <PrimaryButton title={'Download Cv'} link="./data/Tetiana_Kobryn_Front-end_Developer.pdf"></PrimaryButton>
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
