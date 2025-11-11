import { get } from "./main.postgres.js";

export const findUserById = async (userId) => {
    const db = await get();

    const foundUser = await db.query(`SELECT * FROM User WHERE id = ?`, [userId]);

    return foundUser;
}