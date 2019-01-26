import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import TeamMember from '../components/TeamMember/teamMember'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo/seo'

const TeamPage = ({ data }) => {
  const { edges } = data.allTeamMember

  return (
    <Layout>
      <SEO title="Meet the team" />
      <StyledHeader>Meet the team</StyledHeader>
      <MemberContainer>
        {edges.map(({ node }) => (
          <TeamMember key={node.id} data={node} />
        ))}
      </MemberContainer>
    </Layout>
  )
}

export default TeamPage

export const query = graphql`
  {
    allTeamMember {
      edges {
        node {
          id
          role
          name
          profilePicture {
            url
          }
        }
      }
    }
  }
`

const StyledHeader = styled.h1`
  color: white;
  padding-left: 16px;
`

const MemberContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-content: space-around;
`
