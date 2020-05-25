import { Router } from "express";

import upload from "./config/multer";

import Base64Controller from "./controllers/Base64Controller";
import ImageController from "./controllers/ImageController";

const routes = Router();

routes.post("/base64", Base64Controller.store);
routes.post("/image", upload.single("image"), ImageController.store);

export default routes;
