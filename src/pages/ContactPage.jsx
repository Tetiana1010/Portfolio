import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import ContactItem from "../components/ContactItem";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { InnerLayout, MainLayout } from "../styled/Layouts.js";

const ContactPage = () => {
  const phone = <Phone />
  const email = <Email />
  const location = <LocationOn />
  
  return (
      <MainLayout>
        <Title title="Contact" span="Contact" />
        <ContactPageStyled>
          <InnerLayout className="contact-secton">
            <div className="right-content">
              <ContactItem icon={phone} title="Phone" contact1="+380631973846" type="tel"/>
              <ContactItem icon={email} title="Email" contact1="t.kobrin10@gmail.com" type="mailto"/>
              <ContactItem icon={location} title="Address" contact1="Lviv, Ukraine" />
            </div>
          </InnerLayout>
        </ContactPageStyled>
      </MainLayout>
  )
};

const ContactPageStyled = styled.section`
  .contact-secton {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 978px){
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .contact-title {
      h4{
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;

      @media screen and (max-width: 502px){
        width: 70%;
      }

      .form-fied {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -21px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 .5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit; 
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: .8rem 1rem;
        }
      }
      .f-button {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default ContactPage;
