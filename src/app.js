const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1/rest-api')
.then(db => console.log('db is connected'))
.catch(err => console.log(err));

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/users',usersRoutes);

// Error handling middleware should be loaded after the loading the routes

// Static Files

// Start The Server
app.listen(app.get('port'),()=>{
    console.log('Server on port ' + app.get('port'));
}); 