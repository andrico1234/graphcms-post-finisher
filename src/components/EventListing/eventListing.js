import React from 'react'

import CardList from '../CardList/cardList'
import SplitButton from '../SplitButton/splitButton'

const EventListing = ({ data }) => {
  return (
    <>
      <SplitButton />
      <CardList data={data} />
    </>
  )
}

export default EventListing
