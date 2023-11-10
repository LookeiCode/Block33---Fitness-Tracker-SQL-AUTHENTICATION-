// const pool = require('./pool')

// const createTables = async () => {
//     try {
//         await pool.query(`
//         CREATE TABLE Departments (
//             DepartmentID INT PRIMARY KEY,
//             DepartmentName VARCHAR(50)
//         )
//         `);

//         await pool.query(`
//         CREATE TABLE Employees (
//             EmployeeID INT PRIMARY KEY,
//             EmployeeName VARCHAR(100),
//             DepartmentID INT,
//             FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID)
//         )
//         `);
//         console.log('Tables created successfully');
//     } catch (error) {
//         console.error(error, 'Error creating tables:');
//     }
// };

// module.exports = createTables;