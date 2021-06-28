import { Pool } from 'pg';

const DEV_DB_URL = `postgresql://rumor-admin:asdfasdf@localhost/rumordb`;

const pool = new Pool({
    connectionString: DEV_DB_URL,
});

console.log('hi');