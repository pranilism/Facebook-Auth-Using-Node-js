//Getting references of the required packages
const express = require('express'); //EXPRESS
const bodyParser = require('body-parser'); //BODY PARSER to parse the request
const cors = require('cors'); //CORS for cross site requesting
const dotenv = require('dotenv'); //DOTENV to set and access the process environment variables
const passportjs = require('passport'); //PASSPORT.JS for facebook authentication

//Passport middleware
const passport = require('./utils/passport.middlewares');

//creating the app from express
const app = express();

//Setting the config variables to the process environment
dotenv.config();

//initializing the passport service
app.use(passportjs.initialize());

//Setting the passport.js session dependancy on application level
app.use(passportjs.session());

//Serializing the passport js
passport.serialize();

//Deserializing the passport js
passport.deserialize();

//Initializing with the object (containing the information about your id)
passport.init({
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECREAT,
    callbackURL: process.env.FB_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'name', 'gender', 'profileUrl', 'emails', 'photos']
});

//Setting the CORS (Cross Origin Request site) Policies
app.use(cors());

//Serializing the req body to the json
app.use(bodyParser.json());

//Setting the flag for encoded url
app.use(bodyParser.urlencoded({ extended: false }));

//Reference of UserRoutes
const userRouter = require('./routes/user');

//Reference of Authentication Route
const authRouter = require('./routes/auth');

//Adding both routes to the app
app.use('/user', userRouter);
app.use('/auth', authRouter);

//Exporting the app so that it can be used in server js file
module.exports = app;