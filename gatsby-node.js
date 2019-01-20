const _ = require('lodash')
const path = require('path')
const slash = require('slash')

// Gatsby has several lifecycle functions that we can our own logic into. createPages is one of them.
// We want to create a series of pages based on the data for each event.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // When running `gatsby develop` from the command line, you can can go localhost:8000/___graphql
  // And test your queries if you're ever unsure about the shape of your data.

  // replace lines 14 - 25 with your query, if it differs from mine.
  return graphql(`
    {
      allEvent {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // We fetch the template for our event page.
    const eventTemplate = path.resolve('./src/pages/event.js')

    _.each(result.data.allEvent.edges, edge => {
      // for each edge of the node, we'll create a page
      // for the url of each event to be unique, we'll pass the id to the path

      // we're going to want to populate each event page with the event data,
      // to do that we'll have to make a graphql at the component level.
      // To query only the data for a given event, the component will need the respective 'id'.
      // We can give the component access to the id via the context option.
      createPage({
        path: `/event/${edge.node.id}/`,
        component: slash(eventTemplate),
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}
