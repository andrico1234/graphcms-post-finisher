# Easily Manage Content with the 3G Stack (Gatsby, GraphQL, GraphCMS)

## Todo Sections

- Images
- Pull in information
- Past/Future
- Add your own, expand the application to...

## What is the 3G stack? (Not Finished)

Gatsby has been increasing in popularity over the last 18 months, in no small party to its ease-of-use in getting an optimised React app working. Initially,Gatsby's philosophy was to create blazing-fast, SEO-friendly static websites, but since then it has become much more than that. As Gatsby's popularity, so has the amount of developers opting to create their blogs, shops and web applications using Gatsby as opposed to other choices, such as Wordpress. When it comes to hadnling external data, the team at Gatsby has opted to use GraphQL, another popular technology taking the dev world by storm. GraphQL is an alternative to the traditional REST API which allow developers to describe the shape of the data they want from an endpoint. This differs from a traditional REST API whose endpoint returns all information associated with that particular endpoint.

## Why GraphCMS (Not Finished)

There are other solutions we can use when it comes to creating a site that pulls in data from an external source, (alternatives include Contentful, Data in the codebase)

GraphCMS is a headless CMS. (what does this mean, how does this differ from a regular ol' cms). Specifically desinged to be used with graphQL. Which makes it a good choice to use with Gatsby.

## Graph data model (Not Finished)

Great for many to many relationships.

- talk about the Graph data model.

With Gatsby using GraphQL as its default data fetching technology, it's only sensible to use a CMS that uses a graph data model.

How could a GraphData model relate to us? Recommendation systems.

Great for referencing other data models. (elaborate on this)

## What's a Garden Party? (Not Finished)

This isn't an introduction to Gatsby or GraphQL, so I'm assuming a little knowledge of both. This is a tutorial that'll get you understnading the whys and the hows of getting the demo application hooked up to your GraphCMS endpoint.

Before we go and create a schema in GraphCMS, we need to work out exactly how our data looks. When we add a new entry to our team or band list, we're going to want the information to be consistent so our application doesn't come across any unexpected issues.

## Creating a project in GraphCMS (Not Finished)

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
}
```

And the data model for the `team member`:

```
{
  name: String,
  profilePicture: Asset,
  role: Enum,
  gardenPartyHistory: Date,
}
```

And the enum `role` definition:

```
  {
    id: String
    displayName: String,
    description: String,
    possibleValues: [String],
  }
```

One thing to note is that the enum needs to be defined in of itself. Everything also corresponds nicely with the information we've got defined in our `team.js` and `event.js` files.

So back in the GraphCMS developer view, click the schema panel in the sidebar and create your first data models for `event` and `team`. Follow the guidelines set above.

Assets are served via CDN.

(why do I need an API ID?)

## Adding GraphCMS into the mix (Not Finished)

(gatsby-source-cms)[https://github.com/GraphCMS/gatsby-source-graphcms]

Where are we going to get mock data from?

`yarn add gatsby-source-graphcms`

create a `.env` file.

in the `gatsby-config.js` file we need to add en entry in the plugins to add hook up our newly connected endpoint.

x
