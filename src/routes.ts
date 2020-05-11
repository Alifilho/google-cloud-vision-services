import { Router } from "express";

import UploadController from "./controllers/UploadController";

const routes = Router();

routes.post("/upload", UploadController.store);

export default routes;
