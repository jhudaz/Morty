require('dotenv').config();
const specialties = require('./api/specialties');
const providers = require('./api/providers');
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan('combined'));
//controllers
app.use('/specialties', specialties);
app.use('/providers', providers);

app.listen(port, () => console.log(`Morty app listening on port ${port}!`));
//for testing 
module.exports = app;
