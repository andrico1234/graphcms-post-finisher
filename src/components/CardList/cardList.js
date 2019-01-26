import React from 'react'
import styled from 'styled-components'

import { FilterConsumer } from '../../context/index'
import Card from './Card/card'

const CardList = ({ data }) => {
  return (
    <FilterConsumer>
      {value => {
        return (
          <StyledCardList>
            {data.map(({ node }) => {
              if (value === 'past') {
                return (
                  node.eventTimeDifferenceFromPresent < 0 && (
                    <Card key={node.id} data={node} />
                  )
                )
              } else if (value === 'future') {
                return (
                  node.eventTimeDifferenceFromPresent >= 0 && (
                    <Card key={node.id} data={node} />
                  )
                )
              }
              return <Card key={node.id} data={node} />
            })}
          </StyledCardList>
        )
      }}
    </FilterConsumer>
  )
}

export default CardList

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 33.33%);
  margin: 16px auto;
  width: 80%;
`