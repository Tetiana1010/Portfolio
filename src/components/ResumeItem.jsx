import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const ResumeItem = ({ title, startDate, endDate, institution, location, description }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{startDate} - <br /> {endDate}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5> 
        <h6>{institution} | {location}</h6>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </ResumeItemStyled>
  );
};

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    flex: 0 0 20%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      /* left: -10px; */
      left: -10px;
      top: 12px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
      padding-top: 8px;
    }
  }
  .right-content {
    flex: 1;
    padding-left: 3rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -4.2%;
      top: 22px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: .4rem;
    }
    h6 {
      padding-bottom: .6rem;
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export default ResumeItem;