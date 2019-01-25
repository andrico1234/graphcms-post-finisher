import React from 'react'
import styled from 'styled-components'

import Card from './Card/card';

const CardList = ({ data }) => {
  return (
    <StyledCardList>
      {data.map(({ node }) => (
        <Card key={node.id} data={node} />
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