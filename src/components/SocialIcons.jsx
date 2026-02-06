import React from "react";
import PropTypes from "prop-types";
import IconLink from "./IconLink"
import styled from "styled-components";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

const socialIconsMap = {
  linkedin: <LinkedIn />,
  github: <GitHub />,
  instagram: <Instagram />,
};

const SocialIcons = ({ links }) => (
  <IconsContainer>
    {links.map(({ href, type }) => (
      <IconLink key={type} href={href} className={`i-${type}`}>
        {socialIconsMap[type]}
      </IconLink>
    ))}
  </IconsContainer>
);

const IconsContainer = styled.div`
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
`;

SocialIcons.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["linkedin", "github", "instagram"]).isRequired,
    })
  ).isRequired,
};

export default SocialIcons;
