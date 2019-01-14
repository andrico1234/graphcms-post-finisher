import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

const Header = () => (
  <StyledHeader>
    <DefaultHeading>
      <StyledLink to="/">Home</StyledLink>
    </DefaultHeading>
    <MeetHeading>
      <StyledLink to="/team">Meet the team</StyledLink>
    </MeetHeading>
  </StyledHeader>
)

export default Header

const StyledHeader = styled.div`
  background: white;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
  color: #4e825a;
  display: flex;
  width: 100%;
`

const DefaultHeading = styled.h2`
  margin: 0;
  padding: 8px 16px;
`

const MeetHeading = styled(DefaultHeading)`
  margin-left: auto;
`

const StyledLink = styled(Link)`
  color: #4e825a;
  text-decoration: none;
`
