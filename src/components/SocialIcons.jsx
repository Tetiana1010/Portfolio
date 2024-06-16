import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GitHub as GithubIcon, Instagram as InstagramIcon, LinkedIn as LinkedinIcon } from '@material-ui/icons';
import IconLink from './IconLink'

const socialIconsMap = {
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
  instagram: <InstagramIcon />,
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

SocialIcons.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['linkedin', 'github', 'instagram']).isRequired,
    })
  ).isRequired,
};

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

export default SocialIcons;
