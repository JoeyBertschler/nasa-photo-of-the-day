//npm install --save styled-components
import styled from 'styled-components'
import React from 'react'
export default StyledTitle

const StyledTitle = () =>{
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 6.9em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4.69em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const render = 
  <Wrapper>
    <Title>
      This is doge, chewking in.
    </Title>
  </Wrapper>}