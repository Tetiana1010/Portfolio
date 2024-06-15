import React from "react";
import styled from "styled-components";
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>Hi, I'm <span>Tetiana</span></h1>
        <p>
          A front-end developer specializing in clean and engaging web design. I have expertise in HTML, CSS (including Tailwind CSS), and JavaScript, and I'm proficient in Figma for design and implementation. I also have experience working with Node.js, Vue.js, and React in full-stack development.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/tetiana-kobryn-9494451b8/" className="icon i-linkedin" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/Tetiana1010" className="icon i-github" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href="https://instagram.com/tettttiana?utm_medium=copy_link" className="icon i-instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div> 
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    h1 {
      font-size: 3.5rem;
      color: var(--white-color);
      span {
        color: var(--primary-color);
      }
    }

    p {
      color: var(--white-color);
      font-size: 1.6rem;
      margin-top: 1rem;
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 2rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: .5rem;
        }
      }

      .i-instagram {
        &:hover {
          border: 2px solid orange;
          color: orange;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid rgb(36, 41, 47);
          color: rgb(36, 41, 47);
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid #0077B5;
          color: #0077B5;
        }
      }
    }
  }
`;

export default HomePage;
