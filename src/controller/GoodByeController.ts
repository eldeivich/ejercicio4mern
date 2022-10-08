import { GoodByeResponse } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodByeController implements IGoodByeController {

    public async getMessage(date: Date, name?: string | undefined): Promise<GoodByeResponse> {
        LogSuccess('[/api/goodbye] Get Request')

        return {
            message: `Goodbye ${name || "World"}`,
            date
        }
    }

}