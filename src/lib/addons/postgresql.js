import { Pool } from 'pg'

export const setup = async (connectionString) => {
    const pool = new Pool({
        connectionString
    });

    await pool.connect();

    return pool;
}