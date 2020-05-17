const express = require('express'); //Getting the reference of express
const router = express.Router(); //Getting the reference of express Router

//Basic route for getting (http://localhost:8080/user/)
router.get('/', (req, res, next) => {
    res.setHeader('Content-Type','text/html');
    res.end(`<h2>Welcome to the node js</h2>`)
});

//Exporting Router so that it can be used in app.js
module.exports = router;