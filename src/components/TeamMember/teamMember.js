import React from 'react'
import styled from 'styled-components'

const TeamMember = ({ data }) => {
  const { name, gardenPartyHistory, profilePic, role } = data

  return (
    <MemberContent>
      <ContentWrapper>
        <Image src={profilePic} />
        <Description>
          <h3>{name}</h3>
          <p>{role}</p>
          <p>Been part of the team for {gardenPartyHistory}</p>
        </Description>
      </ContentWrapper>
    </MemberContent>
  )
}

export default TeamMember

const MemberContent = styled.div`
  margin: 0 auto;
  width: 350px;
`

const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 200px;
`

const Image = styled.img`
  transition: all 0.2s linear;
  width: 200px;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    opacity: 0.3;

    & + div {
      z-index: 1;
    }
  }
`

const Description = styled.div`
  color: white;
  left: 0;
  padding-left: 8px;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: -1;

  $:hover {
    z-index: 1;
  }
`
