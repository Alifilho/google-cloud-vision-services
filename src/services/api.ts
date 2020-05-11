import { ImageAnnotatorClient } from "@google-cloud/vision";

export default async function sendImage(base64: string) {
  const client = new ImageAnnotatorClient({
    keyFilename: "src/services/gpc-key.json",
  });

  const [result] = await client.textDetection({
    image: {
      content: base64,
    },
  });

  const detections = result.textAnnotations;
  return detections;
}
