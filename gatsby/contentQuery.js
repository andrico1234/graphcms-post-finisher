module.exports =`{
  events {
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
    artists {
      name
    }
    eventThumbnail {
      id
      url
    }
  }
  
  teamMembers {
    id
    profilePicture {
      id
      url
    }
    name
    role
    firstGardenPartyShow
  }
}`