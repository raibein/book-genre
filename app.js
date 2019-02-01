const express = require('express');
const mongoose = require('mongoose');

const home = require('./models/home');
const genre = require('./models/genre');
// const book = require('./models/book');

const app = express();


// Connect to mongoose database
mongoose
    .connect('mongodb://localhost/books', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// const db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
// app.use('/', home); // Load Home Page
app.use('/api/genres', genre);
app.use('/api/books', genre);

// Listen Port No and run on that port
app.listen(3000);
console.log('Running app');