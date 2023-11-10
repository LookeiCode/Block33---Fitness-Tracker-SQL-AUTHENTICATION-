const pool = require('./pool')
const createTables = require('./tables');

const injectData = async () => {
    try {
        await pool.query(`
        INSERT INTO Departments (DepartmentID, DepartmentName) VALUES (1, 'HR');
        
        INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (1, 'Tyler', 1);
        INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (2, 'Kristen', 1);
        INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (3, 'Jack', 1);
        INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (4, 'Jill', 1);
        `);
        console.log('Data injected successfully');
    } catch (error) {
        console.error(error, 'Error injecting data');
    }
};

module.exports = injectData;