import React, { Fragment } from 'react';
import styled from 'styled-components'
import { InnerLayout} from '../styled/Layouts';
import Title from './Title';
import ProgressBar from '../Components/ProgressBar.js';
const Skills = () => {
  return <Fragment>
    <SkillsStyled>
        <Title title={'My Skills'} span={'My Skills'}></Title>
        <InnerLayout>
          <div className="skills">
            <ProgressBar title={'HTMP5'} width={'70%'} text={'70%'}></ProgressBar>
            <ProgressBar title={'CSS3'} width={'90%'} text={'90%'}></ProgressBar>
            <ProgressBar title={'JavaSript'} width={'80%'} text={'80%'}></ProgressBar>
            <ProgressBar title={'React'} width={'65%'} text={'65%'}></ProgressBar>
          </div>
        </InnerLayout>
    </SkillsStyled>
  </Fragment>
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap:  2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px){
      grid-template-columns: repeat(1,2fr);
    }
  }
`

export default Skills;