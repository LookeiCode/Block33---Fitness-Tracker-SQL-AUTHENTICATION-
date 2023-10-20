const pool = require('./pool')

const createTables = async () => {
    try {
        await pool.query(`
        CREATE TABLE Users (
            UserID INT PRIMARY KEY,
            Username VARCHAR(50)
        )
        `);

        await pool.query(`
        CREATE TABLE UserProfiles (
            ProfileID INT PRIMARY KEY,
            UserID INT UNIQUE,
            FullName VARCHAR(100),
            FOREIGN KEY (UserID) REFERENCES Users(UserID)
        )
        `);
        console.log('Tables created successfully');
    } catch (error) {
        console.error(error, 'Error creating tables:');
    }
};

module.exports = createTables;