import React, { Fragment } from "react";
import styled from 'styled-components';
import GitHub from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const Menu = ({menuItem}) => {
  return <Fragment>
    <MenuStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-iframe">
                <iframe src={item.iframe} title={item.title}/>
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub></GitHub>
                    </a>
                  </li>
                  <li>
                    <a href={item.github}>
                      <OpenInBrowserIcon></OpenInBrowserIcon>
                    </a>
                  </li>
                </ul>
              </div>
              <h6>
                {item.title}
                <p>{item.text}</p>
              </h6>
            </div>
          </div>
        )
      })}
    </MenuStyled>
  </Fragment>
};

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width:  920px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width:  670px){
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      iframe {
        width: 90%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        transform: translateY(-600px);
        transition: all .4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 .5rem;
          transition: all 0.4 ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .4 ease-in-out;
          }
        }
      }

      .portfolio-iframe {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-iframe:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .4s ease-in-out;
          opacity: 1;

          li {
            transition: all .4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all .4s ease-in-out;
            }
          } 
          li:hover {
            svg {
              color: var(--white-color);
            }
            svg {
              font-size: 2rem
            }
          }

        } &::before {
          height: 56%;
          width: 86%;
          background-color: white;
          opacity: 0.9;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
  
`;

export default Menu;
