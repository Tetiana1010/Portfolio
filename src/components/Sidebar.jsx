import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Navigation />
    </SidebarStyled>
  );
}

Sidebar.propTypes = {
  navToggle: PropTypes.bool.isRequired,
};

const SidebarStyled = styled.div`
  width: 16rem;
  position: fixed;
  height: 100vh;
  overflow: hidden;
  background-color: var(--element-bg-color);
  z-index: 20;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;