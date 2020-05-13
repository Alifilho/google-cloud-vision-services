import { Request, Response } from "express";
import { ImageAnnotatorClient } from "@google-cloud/vision";

import sendImage from "../services/api";

export default {
  async store(req: Request, res: Response) {
    const { key, email } = req.body;
    const { type } = req.headers;
    const client = new ImageAnnotatorClient({
      credentials: {
        private_key: key,
        client_email: email,
      },
    });
    console.log(type);
    res.json({ message: "OK" });
  },
};
