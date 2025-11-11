import { mainDbInstance } from "$lib/db";


export const load = async () => {
    const userProfile = await mainDbInstance.findUserById("pepito");

    return {
        userProfile
    }
}