import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import BandImage from '../images/band-image.jpg'
import Button from '../components/Button/button'
import Layout from '../components/Layout/layout'

const Event = ({ data: { event } }) => {
  return (
    <Layout>
      <Background />
      <EventDescription>
        <h1>{event.name}</h1>
        <List>
          <li>{event.eventTime}</li>
          <li>Garden Party</li>
          <li>{event.postCode}</li>
          <li>{event.minimumAge}</li>
        </List>
        <Button>Buy Tickets</Button>
      </EventDescription>
      <BandDescription>
        <Paragraph>{event.eventDescription}</Paragraph>
        <br />
        <Paragraph>{event.bandDescription}</Paragraph>
      </BandDescription>
    </Layout>
  )
}

export default Event

export const query = graphql`
  query($id: String!) {
    event(id: { eq: $id }) {
      id
      name
      eventTime(formatString:"ddd DD MMM YY")
      postCode
      eventDescription
      minimumAge
      bandDescription
      bandPicture {
        id
        url
      }
    } 
  }
`

const Background = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${BandImage});
  background-size: cover;
  background-position: center;
`

const EventDescription = styled.div`
  color: white;
  font-size: 18px;
  margin: 32px 16px;
  text-align: center;
`

const List = styled.ul`
  font-size: 22px;
  list-style-type: none;
  padding: 0;
`

const BandDescription = styled.div`
  background: white;
  padding: 32px 20%;
`

const Paragraph = styled.p`
  font-size: 18px;
`