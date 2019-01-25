import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import BandImage from '../images/band-image.jpg'
import Button from '../components/Button/button'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo/seo'
import realFakeText from '../components/RealFakeText/realFakeText'

const Event = ({ data: { event } }) => {
  console.log('event', event);
  return (
    <Layout>
      <SEO title="event" tags={['music', 'event', 'paulette']} />
      <Background />
      <EventDescription>
        <h1>Paulette</h1>
        <List>
          <li>February 23rd</li>
          <li>Garden Party</li>
          <li>London, United Kingdom</li>
          <li>16+</li>
        </List>
        <Button>Buy Tickets</Button>
      </EventDescription>
      <BandDescription>
        <Paragraph>{realFakeText}</Paragraph>
        <br />
        <Paragraph>{realFakeText}</Paragraph>
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
      eventTime
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