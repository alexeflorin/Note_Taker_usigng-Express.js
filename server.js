const express = require ('express');
// Imports the Express.js module into the code.

const path = require ('path');
// Imports the 'path' module that provides utilities for working with file paths and directories.
// It`s a built-in Node module.

const fs = require ('fs');
// Imports the 'fs' module into the project that allow us to interact with the file system operations
// (read, write, create, check).

const app = express ();
// We using this function to create a new Express application object and to use different methods and 
// Middleware to create HTML and API routs, handle and response. Initialize an instance for Express.js.
// Instance of Express.

const PORT = process.env.PORT || 3001;
// Specify on which port the Express.js will run.
// ' process.env.PORT || ' the port is coming from the enviroment, if it exist.
// The port in which the application is listening to it has to come from the environment for Heroku.


const api_routes=require('./routes/apiRoutes')
const html_routes=require('./routes/htmlRoutes')
// Constances for routes.


app.use(express.urlencoded({ extended: true}));
// Middleware to parse incoming urlencoded from data.

app.use(express.json());
// Middleware to parse incoming json data.

app.use(express.static('public'));
// Static middleware pointing to the public folder.


app.use(api_routes)
app.use(html_routes)
// Use the function 'use' to define a set of routes.
// Sets up the Express app to handle data parsing






app.listen(PORT, () =>
console.log(`Note_Taker app listening at  http://localhost:${PORT}`)
);
// listen() method is responsible for listening for incoming connections on the specified port.
