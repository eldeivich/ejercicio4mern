import { kataEntity } from "../entities/Kata.entity";
import { LogSuccess, LogError } from "../../utils/logger";

// CRUD

/**
 * Method to obtain all Katas from Collection "Katas" in Mongo Server
 */
export const GetAllKatas = async (): Promise<any[] | undefined> => {
    try {
        let kataModel = kataEntity()

        // Search all katas
        return await kataModel.find({ isDelete: false });

    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}