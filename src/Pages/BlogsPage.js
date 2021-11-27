import React, { Fragment } from "react";
import styled from "styled-components";
import Title from "../Components/Title.js";
import blogs from "../data/blogs.js";
import { MainLayout, InnerLayout } from "../styled/Layouts.js";

const BlogsPage = () => {
  return <Fragment>
    <MainLayout>
      <BlogsStyled>
        <Title title={'Blogs'} span={'Blogs'}/>
        <InnerLayout className={'blog'}>
          {
            blogs.map(blog => {
              return <div key={blog.id} className={'blog-item'}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>
                    {blog.title}
                  </a>
                </div>
              </div>
            })
          }
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  </Fragment>
};

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px){
      grid-template-columns: repeat(1, 1fr);
    };
    .blog-item {
      padding: 1rem 1rem;
      background-color: var(--background-dark-grey);
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: .5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all .4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }
    .title {
      a {
        font-size: 1.1rem;
        color: var(--white-color);
        cursor: pointer;
        transition: all .4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage; 