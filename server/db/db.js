/*this code should be executed in strict mode, in strick mode you
cannot use undeclared variables - PA */
'use strict'
/*dotenv is a package dependency installed by using npm installed
--save dotenv. This package loads environment variables from the
.env file -PA */
require('dotenv').config();
//calls package mongoose to allow the use of its properties - PA
const mongoose = require('mongoose');
//sets a variable names url to the value of variable MONGO_URI in the .env file -PA
const url = process.env.MONGO_URI;
/*mongoose property mongoose.connect for the current versio needs
to pass the following calls in order for it to connet: - PA*/
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
//calls mongoose.connect to connect to database and pass the params -PA
mongoose.connect(url, connectionParams)
//if successful, print the following message on the CLI server - PA
    .then( () => {
        console.log('Connected to database ');
    })
//it not successful print an error message - PA
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
//export variable url allowing the file to be used inside of anothr file - PA
//Pseudo and file code by PA
module.exports = url;
