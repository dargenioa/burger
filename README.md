# burger ![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)

  ## Table of Contents
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [License](#license)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)

  ## Description

  The burger application is a web application that logs burgers user MySQL, Node, Express and ORM.  This application follows an MVC pattern and uses Node and MySQL toe query and route the data in the application.  It is deployed on Heroku linking the database to JAWSDB_URL.

  ## Video Demo

  ![](./public/assets/images/Eat-Da-Burger.gif)

  [Deply](https://unlimiedburgers2.herokuapp.com/)

  ## Installation

  To install this application the user must have node.js installed.  The node depencies that are required are MySQL and Express as well as the JAWSDB_URL add on in Heroku.
  
  <img src="./public/assets/images/node-dependencies.png" alt="node-dependencies">

  ## Usage

  To get started with the application, run ```node server.js``` or ```npm start``` in the terminal.  The application is one page and easy to navigate.  Any burgers that are waiting to be devoured or deleted will be rendered to the page.  To add a new burger, simply type in the burger name in the input field and hit submit.  Once submitted, the burger will be added to the devoured list.  To devour a burger, simply click on the devour button next to the burger to move it to the waiting to be deleted section.  When the user is ready, they will be able to delete the burger.  The burgers are tracked by an incremental ID in MySQL.
  
  <img src="./public/assets/images/burger-homepage.png" alt="burger-homepage">

  ## License

  [The Unlicense](http://unlicense.org/)

  This project is licensed under [The Unlicense](http://unlicense.org/).  Please visit the link for more details.


  ## Contributing

  There were no contributors on this project, but collaboration is welcome.  Please feel free to reach out to me regarding changes to the application by creating an issue in Github or contacting me through email.

  ## Tests

  The burgers are tracked by the incremented ID.  This iD is used to delete a burger entirely or to update the status of the burger from devour to delete.  This application has a server, connection to MySQL, an ORM file, a model, a controller and a client side JavaScript file to create ajax calls for the GET, POST, PUT and DELETE requests.  The results are logged to the console and the page will automatically reload using ```location.reload();```.
  
  ## Questions

  **Github:** [dargenioa](http://github.com/dargenioa)

  **Email:** [dargenioa14@gmail.com](dargenioa14@gmail.com)

  For additional questions please feel free to contact me.


