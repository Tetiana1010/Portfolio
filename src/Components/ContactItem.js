import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ContactItem = ({ icon, title, type, contact1, contact2 }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">
        {icon}
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        {type ? (
          <>
            <a href={`${type}:${contact1}`}>{contact1}</a>
            <a href={`${type}:${contact2}`}>{contact2}</a>
          </>
        ) : (
          <>
            <address>{contact1}</address>
            <address>{contact2}</address>
          </>
        )}
      </div>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  contact1: PropTypes.string.isRequired,
  contact2: PropTypes.string.isRequired
};

const ContactItemStyled = styled.div`
  padding: 1.1rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    a,
    address {
      color: var(--font-light-color);
      display: block;
      font-size: 1rem;
      margin-top: 0.3rem;
      text-decoration: none;
      transition: color 0.3s ease;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

export default ContactItem;

