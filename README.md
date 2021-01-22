# Login and SignUp System using React and Nodejs\ Backend.

This project contains login and Signup authenticated System, which is done by Nodejs backend and the frontend components are rendered using React.

# API End Points:

The Endpoint to signup:

    /users/signup

The Endpoint to login

    /users/login

# Main Component in Backend:

The Main Component is responsible for starting the Node Express Server on Localhost at the Port number 5000.\
The other function of the Main Component is to redirect any request on "/" to the Routes Component.

# Routes Component in Backend:

The Routes Component is used to process any request received on "/".\
Depending on the request route(path) & the http request type, the router will redirect the process to it's equivalent Controllers.

# Main Component in Frontend:

The Main Component is responsible for running the react project on Localhost at the Port number 3000.

# Routes Component in Frontend:

The Routes Component will display the content which is there in "/" endpoint.\
Depending on the request route(path), the router will redirect the process to it's equivalent Routes.

# Components in Frontend:

There are Navigation and Footer Components which display the header and footer component respectively.\
The header and footer Components are displayed on all the pages.

- # Pages:

  This will display all the page modules present in this folder.
  It contains Home page, Login Page ,Sign up page and Dashboard

- # Routers:
  This file contains all the routes. The routes are given to the component,based on the which the page will be displayed according to the endpoint.

# To run the Project:

- ## For Frontend:

  Navigate into Frontend folder.\
  Then run this command only once:

      npm install

  To install all the dependencies.

  Then run the command:

      npm run start

  To start the React Server whenever you need to see the Webpage.

- ## For Backend:

  Navigate into Backend folder.\
  Then run this command only once:

      npm install

  To install all the dependencies.

  Then run the command:

      npm run start

  To start the Backend Server whenever you need to send a get api request to the Server.

  Or the Backend is also hosted on Heroku.\
  This link can also be used to send a get api request.\
  [Link for Backend](https://login-app-auth-mongoose-nodejs.herokuapp.com/)

  The Project is hosted on Vercel

  [Hosted Link]()
