const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    database: 'one_to_one',
    password: '$hadow10510',
    port: 8008
});

module.exports = pool;