import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout/layout'
import Heading from '../components/Heading/heading';
import EventListing from '../components/EventListing/eventListing'
import SEO from '../components/Seo/seo'
import GardenImage from '../images/garden.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Image src={GardenImage} alt="Photo by Scott Webb on Unsplash"/>
    <Heading title="Garden Party" />
    <EventListing />
  </Layout>
)

export default IndexPage

const Image = styled.img`
  position: absolute;
  top: 42px;
  width: 100%;
  z-index: -1;
`
