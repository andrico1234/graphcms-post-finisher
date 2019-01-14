import React from 'react'
import styled from 'styled-components';

const Heading = ({ title }) => {
  return (
    <HeadingContainer>
      <HeadingBackground>
        <StyledHeading>
          {title}
        </StyledHeading>
      </HeadingBackground>
    </HeadingContainer>
  )
}

export default Heading

const HeadingContainer = styled.div`
  width: 100%;
`

const HeadingBackground = styled.div`
  background-color: #4e825a99;
  margin: 0 auto;
  text-align: center;
  width: 400px;
`

const StyledHeading = styled.h1`
  color: white;
  font-size: 52px;
  font-family: Brush Script MT, Brush Script Std, cursive;
  padding: 8px;
`