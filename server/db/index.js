const mongoose = require('mongoose');

const url = process.env.MONGO_URI;


mongoose
    .connect(url, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;