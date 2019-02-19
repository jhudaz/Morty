require('dotenv').config();
const specialties = require('./api/specialties');
const providers = require('./api/providers');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
//controllers
app.use('/specialties', specialties);
app.use('/providers', providers);

app.listen(port, () => console.log(`Morty app listening on port ${port}!`));
//for testing 
module.export = app
