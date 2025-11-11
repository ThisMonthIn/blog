import { env } from '$env/dynamic/private';

import * as postgresAddon from "./db/postgresql.js";

console.log(env.POSTGRESQL_CONNECTION_STRING)

/**
 * @type {import('pg').PoolClient}
 */
let db;

export const connect = async () => {
    db = await postgresAddon.setup(env.POSTGRESQL_CONNECTION_STRING);

    return db;
}

export const get = async () => {
    if(db) return db;

    return await connect();
}