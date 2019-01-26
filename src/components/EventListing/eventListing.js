import React from 'react'

import { FilterProvider } from '../../context'
import CardList from '../CardList/cardList'
import SplitButton from '../SplitButton/splitButton'

class EventListing extends React.Component {
  state = {
    activeItem: 'right',
  }

  handleClick = buttonSide => {
    this.setState({
      activeItem: buttonSide,
    })
  }

  render() {
    const { activeItem } = this.state 
    const { data } = this.props

    return (
      <FilterProvider value={activeItem}>
        <SplitButton activeItem={activeItem} handleClick={this.handleClick} />
        <CardList data={data} />
      </FilterProvider>
    )
  }
}

export default EventListing
