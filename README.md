# Fullstack Code Along

This repo is designed to provide a base for the code along during a week 8 breakout lecture, though it is unlikely we will complete all of it in the breakout. It contains node modules and folders for databases, routes, api requests, react components, and redux actions and creators, but these need to be written as none have yet been written.

## In this readme

- [The idea](#the-idea)
  - [External API](#external-api)
  - [Wireframes](#wireframes)
  - [Redux store](#redux-store)
  - [Server-side Routes](#routes)
  - [Database design](#database-design)
- [User Stories](#user-stories)
  - [Home page](#home-page)
  - [Display a movie](#display-a-movie)
  - [Add a new movie](#add-a-new-movie)
  - [Mark as watched](#mark-as-watched)
  - [Remove movies](#remove-movies)
  - [More User Stories](#more-user-stories)

## Notes

A few notes to keep you out of trouble:
- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
- When running webpack, run `npm run webpack <extra commands>`, e.g. `npm run webpack`, rather than using `npx`

To get started:
```
npm install
git checkout -b <branchname>
npm run dev
```

## The Idea

This app is going to help us keep track of movies we want to watch, essentially a watchlist, but one not tied to a streaming service.

To help us source the information for these movies, we're going to use an [external api](#external-api) to provide us information and images for these movies.

We will be able to view a list of all the movies we wish to watch, look at one individual movie and see more info about it, and look up a new movie and add it to our watchlist. Once we have watched a movie we should then be able to mark a movie as watched or delete it if we no longer wish to watch it.

## External API

There is an unofficial [imdb api](https://imdb-api.com/) we will use to look up movies and get more information about them. It requires registering and being issued with an API key before you are able to use it.

It has a number off different routes we could use but the two most useful routes from their documentation are likely:

- [Search Movie](https://imdb-api.com/api/#SearchMovie-header)
- [Title](https://imdb-api.com/api/#Title-header)

Sign up to this API and experiment with using these two routes with Insomnia before using them in the project.

## Wireframes

Home page - `/`
![home](/.docs/images/home.png)

Display one movie - `/movie/:id`
![home](/.docs/images/display.png)

Add a new movie - `/add`
![home](/.docs/images/add.png)

## Redux store

To complete our MVP, we will need only one key within our Redux global state. This will store the movies that will form our list. This should be populated following a request to our server on load of our app, so should reflect the current state of our database table.

If we were to look at the Redux Dev Tools we should see the state contains the key for our movies, which will be equal to an array. :

```js
{
  movies: []
}
```

Once our request for our movies from the server side has completed, the array should be filled with movie objects:

```js
{
  movies: [
    { id: 1, title: 'The Batman', .....etc },
    { id: 2, title: 'Arrival', .....etc },
  ]
}
```

## Routes

| path | method | data | response |
|---|---|---|---|
| /api/v1/movies | GET | -- | Array of movie objects |
| /api/v1/movies | POST | New movie object | Object containing new id |
| /api/v1/movies/:id | PUT | Object with edited details | Movie object |
| /api/v1/movies/:id | DELETE | -- | -- |

## Database design


Movies table

| movies ||
|---|---|
| id | increments |
| title | str |
| img | str |
| imdb_id | str |
| watched | boolean (default to false) |

Example seed content: 
```js
[
  { 
    id: 1,
    title: 'The Batman',
    imdb_id: 'tt1877830',
    watched: false,
    img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg'
  },
  { 
    id: 2,
    title: 'Arrival',
    imdb_id: 'tt2543164',
    watched: false,
    img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg'
  },
]
```

## User Stories

This is the suggested order to complete features of our app, though you may choose to add these in a variety of different orders:

- [Home page](#home-page)
- [Display a movie](#display-a-movie)
- [Add a new movie](#add-a-new-movie)
- [Mark as watched](#mark-as-watched)
- [Remove movies](#remove-movies)
- [More User Stories](#more-user-stories)

## Home page

The home page is a great place to start building our app. It will display all the movies that we wish to watch currently held in our database. This will require setting up the back end to hold our data, the front end to display it, and a GET request from the front end to the back to connect the two.

<details>
<summary>Click for more details, if needed</summary>

### Back End

1.  Create the migration and the seed data
1.  Build a db function to select the information from the database table
1.  Build an API (back end route) to retrieve the information from your database
1.  Test your API with Insomnia

### Front End

1.  Build a React Component with some basic html
1.  Build Redux Reducer. Start with a hardcoded initial state, for example:
```js
const initialState = [
  { 
    id: 1,
    title: 'The Batman',
    imdb_id: 'tt1877830',
    watched: false,
    img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg'
  }
]
```
3.  Use `useSelector` in your Component to display the Redux state you hardcoded
1.  Build an API Client in the front end to make the request to your back end route
1.  Build a Redux Thunk to use the API Client and get the information before dispatching an action
1.  Build a Redux Action to save task data
1.  Use `useDispatch` and `useEffect` to dispatch the thunk when your app loads
</details>

## Display a movie

We should be able to click on one of our movies displayed on the home page and be taken to a new page. This page should use the imdb_id from the movie to request more information about the individual movie from the External API and then display it to us.

## Add a new movie

We should be able to access a third page containing a form to add a new movie to our watch list.

When you enter the name of a movie in this form, it should then make a request to the External API and receive back a array of all the movies matching a given title. 

Once the matching movies have been displayed we should be able to click on one of these movies to add it to our watch list. When this happens we will need to add it to our database table and update our Redux store.

## Mark as watched

When viewing an individual movie we should be able to mark a movie as watched. This should update the `watched` boolean of that movie to `true`.

On the home page we should indicate to the user whether a movie has been watched or not. This may be by showing some information on the movie tile, perhaps by having one section for watched movies and one for unwatched movies, or perhaps even a new page for those previously watched.

## Remove movies

If we later decide a movie should not be on this list, we should have a way to remove it.

## More User Stories

There are plenty more features we could add to this app, it's up to you what you would like to see in your site.

Some suggestions:

- Sort your movies

Arrange your home page by date added, alphabetically, or perhaps even by year released.

- Search your movies

In case the list gets too long and it's hard to find specific movies, add the ability to search within your home page.

- Ratings

Once a movie has been watched, add a rating from the user, perhaps even a review.

- Multiple users

Currently this site only works for one user. Adding authentication will enable a movie to be associated with a specific user, enabling individual watch lists.
