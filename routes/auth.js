const express = require('express'); //Getting the reference of express
const router = express.Router(); //Getting the reference of express Router

const passport = require('passport'); //Getting the reference of passport js

//Basic route for getting (http://localhost:8080/auth/)
router.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>Welcome to the node js Auth</h2>`)
});

//Route for handling the facebook OAuth (http://localhost:8080/auth/facebook)
router.get("/facebook", passport.authenticate("facebook"));

//Route for handling the callback of facebook OAuth (http://localhost:8080/auth/success)
router.get('/success', passport.authenticate("facebook", {
    successRedirect: "/auth/done",
    failureRedirect: "/auth/fail"
}));

//Route for handling the failure of facebook OAuth (http://localhost:8080/auth/fail)
router.get('/fail', (req, res) => {
    res.send("Failed attempt");
});

//Route for handling the success of facebook OAuth authentication (http://localhost:8080/auth/done)
router.get('/done', (req, res) => {
    res.send('success ' + req.user);
});

//Exporting so that it can be passed to the auth route in app.js
module.exports = router;