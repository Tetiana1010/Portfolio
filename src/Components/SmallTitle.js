import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SmallTitle = ({ icon, title }) => {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
};

SmallTitle.propTypes = {
  icon: PropTypes.node.isRequired, // Assuming icon is a React node (could be an SVG or other JSX)
  title: PropTypes.string.isRequired,
};

const SmallTitleStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    align-items: center;
  }
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;
  }
`;

export default SmallTitle;
