const pool = require('./pool')
const createTables = require('./tables');

const injectData = async () => {
    try {
        await pool.query(`
            INSERT INTO Users
            (UserID, Username) VALUES (1, 'JohnWick');
            INSERT INTO UserProfiles
            (ProfileID, UserID, FullName) VALUES (1, 1, 'JohnnyWicker');
        `);
        console.log('Data injected successfully');
    } catch (error) {
        console.error(error, 'Error injecting data');
    }
};

module.exports = injectData;