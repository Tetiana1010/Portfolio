import React, { Fragment } from "react";
import styled from "styled-components";

const ContactItem = ({icon, title, contact1, contact2}) => {
  return <Fragment>
    <ContactItemSyuled>
      <div className="left-content">
        {icon}
      </div>
      <div className="right-content">
          <h6>{title}</h6>
          <p>{contact1}</p>
          <p>{contact2}</p>
      </div>
    </ContactItemSyuled>
  </Fragment>
};

const ContactItemSyuled = styled.div`
  padding: 1.1rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  &:not(:last-child){
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
  .right-content{
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: .6rem;

    }
    p {
      padding: .1rem 0;
    }
  }
`;


export default ContactItem;

