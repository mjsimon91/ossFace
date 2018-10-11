const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require( "axios")
require('dotenv').load();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

// Setting a variable for which will store the bearer token
var bearer = ''

// Make the API call to get the bearer token
axios({
  url: 'https://io.cvent.com/onsite/v1/auth',
  method: 'GET',
  headers:{
    apikey: process.env.API_KEY,
    secret: process.env.SECRET
  }
})
.then(res => {
  bearer = res.data.accessToken
})

