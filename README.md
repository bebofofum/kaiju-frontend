Project Name:
Titan Tracker

Project Description:
A SPA (single page app) that imagines the user as an employee of a ficional agency for monitoring giant monsters known as Titan (or kaiju). The employee interace allows for the creation of Titans instances including descriptions then adding Sighting locations of that titan. Each successsfully created Titan and/or Sighting will be persisted to a backend database and served back to the frontend via AJAX requests.

Project Install Instructions:
Clone the repos. BackedEnd and FrontEnd are in separate repos.

In terminal, shift to the backend/kaiju-api app directory by typing cd 'backend/kaiju-api'.

Run 'bundle install' to ensure all dependencies are installed.

Run 'rake db:migrate' in Terminal to run migrations for creating the Titan, and Sighting database tables.

In terminal start the rails server by typing 'rails s'.

In terminal navigate to the app Frontend directory but typing cd .. then type cd ../frontend. In the frontend directory type 'open index.html'. In your browser open a new window and enter 'localhost:' followed by the server address shown by the rails server, the last 4 digits after the colon. (For example 'Listening on 127.0.0.1:3000' would use 3000, as in localhost:3000)

Project Contributors:
Project License:
MIT License

Specifications for the JS Assessment

Specs:

[X] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format. --> [Used Rails as the API creating models and controllers to persist instances and respond to HTTP requests with JSON. HTML to display the app to the user. CSS to provide styling and provide identifiers to JS for manipulating the DOM. Fetch is used for all server requests thus using AJAX] 
[X] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior. --> [Titan and Sighting JS classes are used and provided resources to render js objects.]
[X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments. --> [Sighting belongs_to Titan and Titan has_many Sightings] 
[X] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions. --> [Rails API has RESTful CRUD functions to respond to the Fetch specific requests. The fetch default GET HTTP verb requests retrieve JSON from titan#index to display all titans. Fetch POST sends JSON stringified objects to the titan#create action to persist titan instances to the database. Same for fetch Sighting POST requests. App contains 2 READ, 2 CREATE and 1 DESTROY requests and has 5 AJAX calls.] 
