const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Un-comment to inject data
// const injectData = require('./utils/data');
// injectData();

//Un-comment to create tables
// const createTables = require('./utils/tables');
// createTables();

//Un-comment to create a database
// const createDB = require('./utils/db')
// createDB() 




//******************//
// NOTES
//******************//

// ISUD - Same as CRUD but for SQL
// I - Insert
// S - Select
// U - Update
// D - Delete

// *********************************************************************************************************

  // PRIMARY KEYS (PK)

  // A primary key is a unique value used to identify/represent a table
  // If you want to update or delete something but don't identify the primary key properly, you won't be able to do anything to it (such as update/delete)
  // Primary keys MUST contain unique values
  // Primary keys can NEVER be NULL values
  // A table can only have ONE primary key

// Example: You have 2 tables one is a city table, one is a village table
// Each table has row for their id (city_id and village_id) these rows can represent the primary key for each table
// Essentially you just make a row and name it whatever to represent that table as a primary key (whether it be a word, or an integer (id) or whatever; as long as it's a unique value)

// *********************************************************************************************************

  // FOREIGN KEYS (FK)

  // Foreign keys are used to link two tables together in a relational database
  // A foreign key is a column in a Table that references a primary key from another table

  // Example: You have two tables, one is employee, one is department
  // In the employee table you have a bunch of info about the employee (name, hire date, id, etc)
  // But you also have the departmentId in the employee table - this would be the foreign key (FK) because it references the primary key (PK) of the department table (departmentId)

// *********************************************************************************************************

 // JUNCTION TABLES

 // (18:10 - 10-16-23 SQL) <-- Watch video timestamp

 // *********************************************************************************************************

 app.listen(9001);