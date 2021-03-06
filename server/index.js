//after installing express we need to require it ot use it
//calls express.js
const express = require('express');
// const path = require('path');
//calls mongoose package
const mongoose = require('mongoose');
//calls cors package
const cors = require('cors');
//calls the database.js file
const url = require('./db/db');
//calls body-parser package
const bodyParser = require('body-parser');
//PA

// import routes
const booksRoute = require('./routes/item-router');
const userRoute = require('./routes/user-router');
const newToken = require('./lib/newToken')
// const adminRoute = require('./server/routes/admin_route');
//import middleware files to handle errors
const errorMessages = require('./lib/errors');
const auth = require('./lib/auth');
//connect to mongoose by using database.js
mongoose.connect(url)

// mongoose.connect("mongodb://localhost:27017/books", {useCreateIndex})
// sets express to a variable called app
const app = express();
//create ports to be used, while developing, access the port at
//localhost:4741
const serverPort = 3000;

//assigns to variable app, app Init
//express uses the body-parser packahe the encode the url
app.use(bodyParser.urlencoded({
  extended: true
}));
//call variable app (express) and use package cors
app.use(cors());
app.options('*', cors())
//express uses the body-parser package and turns into json
app.use(bodyParser.json());
// Create a port assgining the port 4741
const port = process.env.PORT || serverPort;

app.use(auth)

//express uses method GET to set a success message on main page
//this is a test, can and should be removed in the future
app.get('/', (req, res) => {
  res.json({"message": "Success"})
})

app.use(newToken)
//API route - calls and uses file routes/book_route
app.use('/api', booksRoute);
app.use(userRoute);
// app.use(adminRoute);
//calls and uses file lib/errors.js
app.use(errorMessages);

//express listens to the value of variabble port and prints
//to the CLI server a success message
app.listen(port, () => {
  console.log("Port Connected to: " + port)
});
//exports allows the use of this file
//Pseudo and file code by PA
module.exports = app;
