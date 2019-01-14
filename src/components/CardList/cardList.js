import React from 'react'
import styled from 'styled-components'

import Card from './Card/card';

const CardList = ({ cardData = [1, 2, 3, 4] }) => {
  return (
    <StyledCardList>
      {cardData.map(item => (
        <Card key={item} data={item} />
      ))}
    </StyledCardList>
  )
}

export default CardList

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 33.33%);
  margin: 16px auto;
  width: 80%;
`