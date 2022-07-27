// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
// Start up an instance of app
const express = require('express');
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
// and Cors for cross origin allowance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3300;
const server = app.listen( port, listening);
function listening(){
  console.log('Server is listening on port: ' + port)
}
// POST route setup
app.post('/postURL', saveData);

function saveData(req, res){
    let appData = req.body;     
        projectData.date = appData.newDate;
        projectData.temp = appData.temp;
        projectData.feelings = appData.feelings;

        console.log('projectData received')
        res.end();
    }

// GET route setup
app.get('/getURL', getData);

function getData(req, res){
    res.send(projectData);
    console.log('projectData sent')
}