import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import photo from '../images/photo.jpg';

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={photo} alt=""/>
      </div>
      <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active-class">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active-class">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" activeClassName="active-class">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
          </li>
      </ul>
      <footer className="footer">
        <p>@2021 <b>My Portfolio Website</b></p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: block;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  background-color: var(--background-dark-grey);

  .avatar {
    width: 100%; 
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    } 
  }

  .nav-items{
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all .4 ease-in-out;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, .95);
          opacity: 0.21;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  };
  
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
`;

export default Navigation;