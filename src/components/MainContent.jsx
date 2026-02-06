import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogsPage from '../pages/BlogsPage';
import PortfolioPage from '../pages/PortfoliosPage';
import ResumePage from '../pages/ResumePage';
import ContactPage from '../pages/ContactPage';

const MainContent = () => {
  return (
    <MainContentStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>

      <Switch>
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
      </Switch>
    </MainContentStyled>
  );
};

// No PropTypes needed for MainContent since it doesn't receive props directly

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;

    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default MainContent;