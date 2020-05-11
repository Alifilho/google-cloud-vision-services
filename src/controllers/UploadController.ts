import { Request, Response } from "express";

import sendImage from "../services/api";

export default {
  async store(req: Request, res: Response) {
    const detections = await sendImage(req.body.base64);
    res.json(detections);
  },
};
