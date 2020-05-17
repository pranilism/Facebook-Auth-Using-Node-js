//Getting reference from the http module provided by the node js
const http = require('http');

//Reading the default port value form the environment
const PORT = process.env.PORT | 8080;

//Getting reference to the app (express)
const app = require('./app');

//creating the server and passing app to it to handle the requests coming on server
const server = http.createServer(app);

//Allowing server to listen on the specified port
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));