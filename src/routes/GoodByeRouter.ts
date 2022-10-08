import express, { Request, Response } from "express";
import { GoodByeController } from "../controller/GoodByeController";
import { LogInfo } from "../utils/logger";

// Get the date
let date: Date = new Date();

// Router from express
let goodByeRouter = express.Router();

// http://localhost:800/api/goodbye?name=Martín/
goodByeRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}, ${date}`);
        // Controller Instance to execute method
        const controller: GoodByeController = new GoodByeController();
        // Obtain response
        const response = await controller.getMessage(date, name);
        // Send to the client the response
        return res.send(response);
    });

// Export Goodbye Router
export default goodByeRouter;