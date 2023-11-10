// **********************************************
// COMMENTS

// I could've just made this in the GUI but I wanted to try my own way (I also can't at the moment do this via the terminal I need to fix it)
// 1. I took "database:" out of the pool.js
// 2. I created this db.js file to create the database
// 3. I did npm start to run the code and created the database
// 4. I commented this file out and also the lines of code in server.js (L8-9) that runs this files code on 'npm start'
// 5. I added database back into the pool.js now that the database was created

// **********************************************

// const pool = require('./pool')

// const createDB = async () => {
//     try {
//         await pool.query(`
//         CREATE DATABASE one_to_one
//         `);
//     } catch (error) {
//         console.error(error, 'Error creating database')
//     }

// }
// module.exports = createDB