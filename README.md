# Carousel-Node-CRUD-MySql-React

## installation
npm:

```
npm install 

```
 
## Usage:
```

 run script:

 'start_client_and_server'

```

## Task Requirements:

Design Desktop: https://xd.adobe.com/view/3dd424c7-1fb4-4e3f-a195-4ccf3ace41ef-6887/

Design Mobile: https://xd.adobe.com/view/1ef3dc2f-1d67-4e81-8353-984f92103645-4ba0/specs/

## Client Side 1:

The test is to create a React component (Using Next JS framework server) called Writers Team which contains 10 images of writers that embedded inside a carousel.
The carousel will show 5 items in Desktop screens and 2.5 in mobile, the visual design for this component will be derived from the
attached file as well as the writer's images.
The carousel itself should give the client the option to scroll to the next item upon clicking the next/prev buttons (they are not in the design so add them yourself), the scrolling should be nicely animated, the mobile version scrolling will be based upon finger swipe.

## Client Side 2:

Create another HTML page (Using the same Next JS server) that contain a form which allows the user to add new writers to the carousel and to modify their data by this 3 fields: Image Url, Writer's name and additional text. Do some basic validations on the form. The form data will be submitted using an Ajax request to the Node JS server.
For this page, use whatever design you feel appropriate.

## Server Side:

The component data will be fetched from another Node JS server as a JSON object before rendering the carousel.
The JSON will contain (at least) this 3 fields:
- The URL of the image
- The writer's name
- The additional text

* The server will store all the data within a MySQL DB and will use a layer of GraphQL as an API between the client and the server.
  Do some validations on the data that is receiving from the client.
* Add some unit tests (2-3) for the server. More Demands:
* You can use any additional open source JS / CSS library.
* CSS should be written in SASS framework
* Design should be pixel perfect (!).
* Add Readme.md file with all needed explanations about how to run the project.
* The project should be uploaded to a github repository from which we will clone it. - The project should be wrapped in a Docker environment.
* Use as many ES06 typology Code Emphasis:
* Clean code, without unnecessary empty lines / spaces. - Good English without typos.
* Use meaningful variables names.
* Document your code

- note - the design text is in Hebrew, you can use English.
