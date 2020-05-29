import { Router } from "express";
import { celebrate } from "celebrate";

import upload from "./config/multer";

import base64Schema from "./validators/base64Validator";
import imageSchema from "./validators/imageValidator";

import Base64Controller from "./controllers/Base64Controller";
import ImageController from "./controllers/ImageController";

const routes = Router();

routes.post("/base64", celebrate(base64Schema), Base64Controller.store);
routes.post(
  "/image",
  upload.single("image"),
  celebrate(imageSchema),
  ImageController.store
);

export default routes;
