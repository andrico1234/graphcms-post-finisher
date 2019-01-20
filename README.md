# Easily Manage Content with the 3G Stack (Gatsby, GraphQL, GraphCMS)

## Todo Sections

- Images
- Replacing dummy data
- Past/Future

## What is the 3G stack? (Review)

Gatsby has been increasing in popularity over the last 18 months, in no small part to its ease-of-use in getting an optimised React app working. Initially,Gatsby's philosophy was to create blazing-fast, SEO-friendly static websites, but Gatsby has become much more than that. Lots of developers are now choosing to create their blogs and websites using Gatsby over other tools like Wordpress. When it comes to hadnling external data, the team at Gatsby has opted to use GraphQL, another popular technology taking over the dev world. GraphQL is an API query language that is used as an alternative to a traditional REST API. GraphQL allows developers to describe the shape of the data they want from an endpoint, which is a critical difference from a REST API whose endpoints returns all information. There are many other differnces between the two technologies, so please read the docs if you're unfamiliar, as this tutorial will touch lightly on GraphQL. 

## Why GraphCMS (Review)

GraphCMS makes the final peice of the 3G trifecta. It's a headless content managememt system, a CMS that exposes data via an API endpoint. It's easy to set-up and requires little overhead when integrating with a JavaScript application. There are other solutions we can use when it comes to handling content, like Wordpress and Contentful. Both GraphCMS and Contentful offer a similar functionality for use-cases relevant to me, but I prefer GraphCMS's UX. I feel there's less friction when using GraphCMS to get a site up and running. 

## What's a Garden Party? (Review)

Garden Party is a fictitious company that frequently hosts music concerts in a small garden stage. It's a good demo application that will get you used to consuming data from a GraphCMS endpoint. In a real-world application the GraphCMS content could be managed by a content team with you, the developer, hooking the website up to the endpoint, parsing the data, and displaying it. 


## Graph data model (Not Finished)

Great for many to many relationships.

- talk about the Graph data model.

edges and node terminology

With Gatsby using GraphQL as its default data fetching technology, it's only sensible to use a CMS that uses a graph data model.

How could a GraphData model relate to us? Recommendation systems.

Great for referencing other data models. (elaborate on this)

Out first step is to get our project set up on GraphCMS.

If at any point your stuck, you can take a look at the finished repo [here](https://github.com/andrico1234/graphcms-post-finisher) for some guidance. 

With that out of the way, let's get started.

## Creating a project in GraphCMS (Review)

Sign up and create a new project

choose a name, your region and plan (hint: choose the free plan)

The next step is creating the schema for our data. Schemas are a way for us to define the models and enumerations of the data set. A model is an object with one or more fields. For instance, a team member model describes the shape of data for each team member. Enumerations, or enums for short, can also be defined in GraphCMS. Enums are data types whose values must be one from a set of pre-defined values. Think of a team member's job role, as Garden Party's a small enterprise, there may only be 5 different job roles available. By defining what the values can be, we're reducing the capacity for human error when it comes to creating the team member data.

So before continuing, have another look at the Garden Party website and write down what you'd expect our event and team member data models will look like. You can have a look at the available data types [here.](https://docs.graphcms.com/developers/schema) Once you've given it a shot, continue the tutorial.

Here's the data modal for `event`:

```
{
  name: String,
  eventTime: DateTime,
  houseNumber: String,
  city: String,
  postCode: String,
  minimumAge: Integer,
  eventDescription: MultiLineText,
  bandDescription: MultiLineText,
  bandPicture: Asset,
}
```

And the data model for the `team member`:

```
{
  name: String,
  profilePicture: Asset,
  role: Enum,
  firstGardenPartyShow: Date,
}
```

And the enum `role` definition:

```
  {
    name: String,
    possibleValues: [String],
  }
```

One thing to note is that the enum needs to be defined in of itself. Everything also corresponds nicely with the information we've got defined in our `team.js` and `event.js` files.

So back in the GraphCMS developer view, click the schema panel in the sidebar and create your first data models for `event` and `team`. Follow the guidelines set above.

Now we need to populate our CMS with some dummy information. With the team members, let's create them exactly as we have them in the frontend. Input the information you as you find it in the `team.js` file. Do the same for the event listings; give a mixture of dates both future and in the past. Sside from that, go crazy qith the names, locations and descriptions. If you're stuck for musicians to create events for, you can find as list of 12 amazing artists (here)[https://open.spotify.com/user/1115584169/playlist/0AbqZRF9xxA1yOoVeUt2bd?si=wWxWLCBVQm-zNLQkf3BijQ]

Aim to have more than 3 events for both the past and the present.

## Adding GraphCMS into the mix (Review)

Before we can do anything with the data we just created in GraphCMS, we'll need to install the (gatsby-source-cms)[https://github.com/GraphCMS/gatsby-source-graphcms]. This plugin allows us to modify our `gatsby-config.js` file to pull in our CMS data at compile time, then we can run graphql queries against our compiled data on a per page basis. We won't have to worry about initialising the GraphCMS client either, we'll just add an object to the config file which takes in our endpoint, access token and the initial query. We'll run through getting this setup next.

From your command line, run the following: `yarn add gatsby-source-graphcms`

Move into your `gatsby-config.js` file and within the `plugins` array create a new object with the following information:

```
{
  resolve: 'gatsby-source-graphcms',
  options: {
    endpoint: process.env.GRAPH_CMS_ENDPOINT, 
    token: process.env.GRAPH_CMS_TOKEN,
    query: '',
  }
},
```

You'll see that we're importing a couple of environment variables, but we haven't set them up yet. We'll create a file for both the endpoint location and the access token, but we'll need to retreive them first. Back in GraphCMS, open the settings view and scroll to the bottom. There's a section called 'endpoints', copy the string to your clipboard. Back in your project, in the root of your directory, create a `.env` file and add the following code:

`GRAPH_CMS_ENDPOINT=${copy the endpoint here}`

Gatsby will now be able to access your endpoint when it compiles your code. We need to follow the same process to retrieve our access token. In GraphCMS, in the settings view, scroll up and find the 'Permanent Auth Tokens' and create a new one with whatever name and description you feel appropriate. The scope needs to be `QUERY` though. Copy the generated value into your `.env` and assign it to the `GRAPH_CMS_TOKEN` variable.

Next step is to create and import the initial query. This is where your prior knowledge of GraphQL comes in handy. When Gatsby compiles our site, it's going to pull in the information from the CMS endpoint and generate the pages based on how we define it in our `gatsby-node.js` file. The first step to achieve this is to create that graphql query that gets all of our data from GraphCMS. 

My favourite way to do this is to go on the GraphCMS website and navigate to the API explorer view. This allows you to query your dataset from within GraphCMS. This can be used to construct the query that we can copy and paste into our code. Have a play around with the explorer, using the DOCS panel on the end to return all of the relevant data. If you don't pull in the `id` field from GraphCMS, Gatsby will complain when trying to compile your code. Once you've felt that you've pulled in all of the relevant data, you can continue you below. Here's the query that I constructed, note that the names of my fields may differ from yours, depending on how you defined your schema:

```
module.exports = `{
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
```

Now that we've got our query constructed, we can copy it into our code and have Gatsby pull in the information during compilation. In the root of your project, create a new directory called `gatsby`, and inside of that create a file called `contentQuery.js`.

Export an object like so:

```
exports.default = `
  query ${your copied query}
`
```

Then import inside the query into your `gatsby-config.js` file and reference the export inside of the `query` field inside of the `graphcms` plugin options.

If you run `gatsby develop` in your CLI, the application should compile successfully, and be served on `localhost:8000`. 

## Leveraging your GraphCMS data

Before replace our dummy data with the content in our CMS, we'll need to create the `gatsby-node.js` file. The code in this file will be run during the code compilation, and will be used to generate all of the pages of the website based on the data we retreive from our endpoint. For instance, for each event we create in GraphCMS, an `event` page is created.

I've supplied all of the necessary code for the `gatsby-node.js` file in the repo, but have left it commented out. Uncomment the code, and you'll see that I've left descriptions explaining whats and whys of the file. In brief, we hook into one of Gatsby's lifecycle methods, createPages, to create an event page for each event that we retrieve from our CMS. We send off a query that retrieves every single event, we then iterate over the data, and create a page for each item.

If you can run `gatsby develop` without any problems, then it's time to move on. If you've received an error message in the console, then try your best to fix the errors, Gatsby's error messaging tends to be transparent, offering some clues about what's gone wrong.

The next thing to do is to replace all of our mock data with the real thing. 

