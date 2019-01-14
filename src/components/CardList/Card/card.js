import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Paulette from '../../../images/paulette.jpg';

const Card = () => {
  return (
    <StyledLink to="/event">
      <StyledCard>
        <CardImage src={Paulette} />
        <div>
          <Paragraph>Paulette</Paragraph>
          <Paragraph>Friday, 6pm</Paragraph>
        </div>
      </StyledCard>
    </StyledLink>
  )
}

export default Card

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const StyledCard = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
  height: 240px;
  margin: 8px auto;
  transition: all 0.2s linear;
  width: 90%;

  &:hover {
    transform: scale(1.1);
  }
`

const CardImage = styled.img`
  height: 160px;
  width: 100%;
`;

const Paragraph = styled.p`
  margin: 12px 4px;
`
