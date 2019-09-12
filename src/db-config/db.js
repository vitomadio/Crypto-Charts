const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

let pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: false
});
if (process.env.NODE_ENV) {
    return pool = new Pool({ connectionString: process.env.DATABASE_URL })
}

module.exports = pool;