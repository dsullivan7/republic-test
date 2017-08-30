# Spitfire Frontend Coding Challenge

Another year passes, and so does another season of Game of Thrones. Unforuntately, not all of our beloved characters make it through each season.
Your task is to create an application to search and display Game of Throne's characters, and show whether they are (still) alive or dead.

## The exercise

The application should be created using *React* and *Redux*. How you choose to handle side-affects (anything asynchronous, i.e. API calls), is up to you, but it is *highly favourable and recommended* to use a library like [redux-saga](https://github.com/redux-saga/redux-saga). A freshly initialized [Create React App](https://github.com/facebookincubator/create-react-app) has been provided for you, including Redux (but no thunks or sagas) and a basic reducer.

The interface should consist of:

* A text search field to enter a character's name
* A button to submit the query
* A list (or grid) view of the characters
* Each character retrieved should display their:
    * Name
    * Title (the first one if multiple are returned)
    * Culture (if applicable)
    * Whether they are alive or dead
    * The name of which house(s) they represent (if applicable)

### Bonus

* The query is initiated as the user types in the text search field
* A user can 'save' or 'bookmark' a character, placing them in a seperate list/grid
* Some style 😎
* A profile image of each character
    * Don't kill yourself over this -- some potential ways however:
        * [Yahoo Image API](https://developer.yahoo.com/boss/search/boss_api_guide/image.html)
        * [Bing Image Search API](https://azure.microsoft.com/en-au/services/cognitive-services/bing-image-search-api/)
        * [Flickr](https://www.flickr.com/services/api/)
        * [Qwant (Unofficial) Image API](https://api.qwant.com/api/search/images?count=10&offset=1&q=jon+snow) (links to) `https://api.qwant.com/api/search/images?count=10&offset=1&q=cars`


## An API of ❄️ <span style="color: blue">Ice</span> ❄️ and 🔥 <span style="color: red">Fire</span> 🔥

To search and retrieve information about all the characters, you are going to use the [API of Ice and Fire](https://anapioficeandfire.com/).

You will use the following endpoints in your endevour:

* [Characters Endpoint](https://anapioficeandfire.com/Documentation#characters)
* [Houses Endpoint](https://anapioficeandfire.com/Documentation#houses)

Searching and filtering is done by query string, and characters' houses are listed under the property `allegiances` from the character endpoint response.

Character response example:

```
{
    "url": "https://www.anapioficeandfire.com/api/characters/823",
    "name": "Petyr Baelish",
    "culture": "Valemen",
    "titles": [
        "Master of coin (formerly)",
        "Lord Paramount of the Trident",
        "Lord of Harrenhal",
        "Lord Protector of the Vale"
    ],
    "died": "",
    ...
    "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/10",
        "https://www.anapioficeandfire.com/api/houses/11"
    ],
    ...
}
```

Houses response example:

```
{
    "name": "House Algood",
    ...
  },
```

## What we're assessing

* How you structure and handle consuming an API
    * Promises, async/await, Fetch API, etc.
    * Side affect handling (thunks, sagas, etc.)
    * Coordination of dependent asynchronous tasks
    * Giving feedback to the user as soon as possible (perceived performance)

* How you structure a React/Redux application
    * Container and presentational components
    * Local and global state management
    * Component composition
    * Folder structure and modularization
        * Feel free (and please do) re-organise folder structure as you best see fit, do not feel like you need to be constrained by the one provided for you

* Knowledge and mastery of Javascript
    * ES6 features and syntax
    * Class-based architecture, dependency injection
    * Testability (writing tests isn't required but should be a forethought)
