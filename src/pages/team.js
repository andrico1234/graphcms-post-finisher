import React from 'react'
import styled from 'styled-components'
import {
  David,
  Eva,
  Jacks,
  Jaime,
  Kirstie,
  Paul,
  Sonja,
} from '../images/profile-pictures'
import TeamMember from '../components/TeamMember/teamMember'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo/seo'

const data = [
  {
    name: 'David',
    profilePic: David,
    role: 'Organiser',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Eva',
    role: 'Project manager',
    profilePic: Eva,
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Jacks',
    profilePic: Jacks,
    role: 'Co-founder',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Jaime',
    profilePic: Jaime,
    role: 'MC',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Kirstie',
    profilePic: Kirstie,
    role: 'Project Manager',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Paul',
    profilePic: Paul,
    role: 'Social media manager',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Sonja',
    profilePic: Sonja,
    role: 'Co-founder',
    gardenPartyHistory: '12 Months',
  },
]

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="Meet the team" />
      <StyledHeader>Meet the team</StyledHeader>
      <MemberContainer>
        {data.map(person => (
          <TeamMember data={person} />
        ))}
      </MemberContainer>
    </Layout>
  )
}

export default TeamPage

const StyledHeader = styled.h1`
  color: white;
  padding-left: 16px;
`

const MemberContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-content: space-around;
`

