const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:$hadow10510@localhost:8008/fitness-dev?schemapublic"

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;
