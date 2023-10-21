```SQL

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID)
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES (1, 'HR');
INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (1, 'Tyler', 1);
INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (2, 'Kristen', 1);
INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (3, 'Jack', 1);
INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES (4, 'Jill', 1);

/* Selecting all the employees by name from the employees table that are in the "HR" department (DepartmentID 1) */
SELECT employees.EmployeeName
FROM employees
WHERE employees.DepartmentID = 1

/* Does the same as above but shows the department name each employee belongs to */
/* We select what we want from each table (the names), then we join the tables by the departments PK (DepartmentID) then finally specify which department we want to display using the ID integer/number */
SELECT employees.EmployeeName, departments.DepartmentName
FROM employees
INNER JOIN Departments on Employees.DepartmentID = Departments.DepartmentID
WHERE employees.DepartmentID = 1

```