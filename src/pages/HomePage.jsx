import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../components/SocialIcons';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/tetiana-kobryn-9494451b8/', type: 'linkedin' },
  { href: 'https://github.com/Tetiana1010', type: 'github' },
  { href: 'https://instagram.com/tettttiana?utm_medium=copy_link', type: 'instagram' },
];

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>Hi, I'm <span>Tetiana</span></h1>
        <p>
          Motivated and skilled front-end developer. I bring strong
          communication abilities, a knack for creative problem-solving, and
          thrive under pressure. Eager to contribute to dynamic projects and gain
          valuable experience with your company.
        </p>
        <SocialIcons links={socialLinks} />
      </div>
    </HomePageStyled>
  );
};

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
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: 0.5rem;
        }
      }

      .i-instagram:hover {
        border-color: orange;
        color: orange;
      }

      .i-github:hover {
        border-color: rgb(36, 41, 47);
        color: rgb(36, 41, 47);
      }

      .i-linkedin:hover {
        border-color: #0077B5;
        color: #0077B5;
      }
    }
  }
`;

export default HomePage;
