import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout/layout'
import Heading from '../components/Heading/heading'
import EventListing from '../components/EventListing/eventListing'
import GardenImage from '../images/garden.jpg'

const IndexPage = ({ data }) => {
  const { edges } = data.allEvent

  return (
    <Layout>
      <Image src={GardenImage} alt="Photo by Scott Webb on Unsplash" />
      <Heading title="Garden Party" />
      <EventListing data={edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allEvent {
      edges {
        node {
          id
          name
          eventTime(formatString:"ddd DD MMM YY")
          eventTimeDifferenceFromPresent:eventTime(difference:"miliseconds")
        }
      }
    }
  }
`

const Image = styled.img`
  position: absolute;
  top: 42px;
  width: 100%;
  z-index: -1;
`
