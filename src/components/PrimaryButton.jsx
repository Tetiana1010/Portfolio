import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PrimaryButton = ({ title, link }) => (
  <PrimaButtonStyled href={link} download>
    {title}
  </PrimaButtonStyled>
);

const PrimaButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  position: relative;
  transition: all 0.4s ease-in-out;
  text-align: center;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    left: 0;
    bottom: 0;
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
  
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PrimaryButton;
