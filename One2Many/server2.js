const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Un-comment to inject data
const injectData = require('./utils/data');
injectData();

//Un-comment to create tables
// const createTables = require('./utils/tables');
// createTables();

//Un-comment to create a database
// const createDB = require('./utils/db')
// createDB() 


app.listen(9002);