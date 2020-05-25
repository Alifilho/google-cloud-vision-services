import { Request, Response } from "express";

import clientInit from "../services/api";

export default {
  async store(req: Request, res: Response) {
    const { key, email } = req.body;
    const { type } = req.headers;

    const client = await clientInit(key, email);

    if (type === "TEXT_DETECTION") {
      const [result] = await client.textDetection(req.file.buffer);

      res.json({ detections: result.textAnnotations }).status(200);
    }

    if (type === "FACE_DETECTION") {
      const [result] = await client.faceDetection(req.file.buffer);

      res.json({ detections: result.textAnnotations }).status(200);
    }

    if (type === "IMAGE_PROPERTIES") {
      const [result] = await client.imageProperties(req.file.buffer);

      res
        .json({
          detections: result.imagePropertiesAnnotation?.dominantColors?.colors,
        })
        .status(200);
    }

    if (type === "LABEL_DETECTION") {
      const [result] = await client.labelDetection(req.file.buffer);

      res.json({ detections: result.labelAnnotations }).status(200);
    }

    if (type === "LANDMARK_DETECTION") {
      const [result] = await client.landmarkDetection(req.file.buffer);

      res.json({ detections: result.landmarkAnnotations }).status(200);
    }

    if (type === "LOGO_DETECTION") {
      const [result] = await client.logoDetection(req.file.buffer);

      res.json({ detections: result.logoAnnotations }).status(200);
    }

    /*if (type === "OBJECT_LOCATION") {
      const [result] = await client.objectLocalization(req.file.buffer);

      res.json({ detections: result.localizedObjectAnnotations }).status(200);
    }*/

    if (type === "SAFE_SEARCH_DETECTION") {
      const [result] = await client.safeSearchDetection(req.file.buffer);

      res.json({ detections: result.safeSearchAnnotation }).status(200);
    }

    if (type === "WEB_DETECTION") {
      const [result] = await client.webDetection(req.file.buffer);

      res.json({ detections: result.webDetection }).status(200);
    }
  },
};
