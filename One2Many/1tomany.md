```SQL

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
)

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VAR CHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID)
)

```