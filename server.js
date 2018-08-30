// Specifying all the packages we need and PORT setup.
// ===================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const keys = require('./config/keys');
const cookieSession = require('cookie-session'); 
const passportSetup = require('./config/passport-setup'); 
const app = express();
const routes = require("./routes");

// Using body-parser.
// ===================
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Serve up static assets (usually on Heroku.)
// =============================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Using routes
// =============
app.use(routes);

// app.use(express.static(__dirname + '/'));
// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, "./client/src/index.js"))
// });

app.use(cookieSession({
maxAge: 24 * 50 *60 * 1000, 
keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passportSetup.initialize());
app.use(passportSetup.session());

// Requiring our item and user schema for mongo/mongoose.
// ======================================================
const db = require("./models/index");

// Using morgan for logger.
// ========================
app.use(logger("dev"));


// Connecting to the weirdbd database via mongoose.
// =================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weirddb");

//connect to mongodb - originally from Passport Documentation
// mongoose.connect(keys.mongodb.dbURI, () => {
//   console.log("connected to mongodb");
//   });

app.get("/", function(req, res) {
  console.log("Server Is here!")
})
// Setting out server to run and listen on the specific port.
// ===========================================================
app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
