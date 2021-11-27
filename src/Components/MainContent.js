import styled from "styled-components";
import React from "react";
import { Fragment } from "react";
import { Route, Switch as Switching } from "react-router";

import HomePage from '../Pages/HomePage.js';
import AboutPage from '../Pages/AboutPage.js';
import BlogsPage from '../Pages/BlogsPage.js';
import PortfolioPage from '../Pages/PortfoliosPage.js';
import ResumePage from '../Pages/ResumePage.js';
import ContactPage from '../Pages/ContactPage.js';


const MainContent = () => {
  return <Fragment>
    <MainContentStyled>
     <div className="lines">
       <div className="line-1"></div>
       <div className="line-2"></div>
       <div className="line-3"></div>
       <div className="line-4"></div>
     </div>

     <Switching>
       <Route path="/" exact>
          <HomePage />
       </Route>
       <Route path="/about" exact>
          <AboutPage />
       </Route> 
       <Route path="/blogs" exact>
          <BlogsPage />
       </Route>
       <Route path="/portfolio" exact>
          <PortfolioPage />
       </Route>
       <Route path="/resume" exact>
          <ResumePage />
       </Route>
       <Route path="/contact" exact>
          <ContactPage />
       </Route>
     </Switching>
    </MainContentStyled>
  </Fragment>
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px){
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: .4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default MainContent;