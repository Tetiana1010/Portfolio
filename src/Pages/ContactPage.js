import React, { Fragment } from "react";
import styled from "styled-components";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title.js";
import { InnerLayout, MainLayout } from "../styled/Layouts.js";

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from "../Components/ContactItem.js";

const ContactPage = () => {
  const phone = <PhoneIcon />
  const email = <EmailIcon />
  const location = <LocationOnIcon />
  return <Fragment>
      <MainLayout>
        <Title title="Contact" span="Contact"></Title>
        <ContactPageStyled>
          <InnerLayout className={'contact-secton'}>
            <div className="left-content">
              <div className="contact-title">
                <h4>Get in touch</h4>
              </div>
              <form className="form">
                <div className="form-fied">
                  <label htmlFor="name">Enter your name</label>
                  <input id="name" type="text"></input>
                </div>
                <div className="form-fied">
                  <label htmlFor="email">Enter your email</label>
                  <input id="email" type="email"></input>
                </div>
                <div className="form-fied">
                  <label htmlFor="subject">Enter your subject</label>
                  <input id="subject" type="subject"></input>
                </div>
                <div className="form-fied">
                  <label htmlFor="text-area">Enter your message</label>
                  <textarea name="textarea" id="text" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field f-button">
                  <PrimaryButton title="Send email"/>
                </div>
              </form>
            </div>
            <div className="right-content">
              <ContactItem icon={phone} title="Phone" contact1={'+380631973846'}></ContactItem>
              <ContactItem icon={email} title="Email" contact1={'t.kobrin10@gmail.com'} ></ContactItem>
              <ContactItem icon={location} title="Address" contact1={'Lviv, Ukraine'}></ContactItem>
            </div>
          </InnerLayout>
        </ContactPageStyled>
      </MainLayout>
  </Fragment>
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