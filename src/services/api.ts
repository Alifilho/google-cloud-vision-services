import { ImageAnnotatorClient } from "@google-cloud/vision";

export default async function clientInit(
  privateKey: string,
  clientEmail: string
) {
  const client = new ImageAnnotatorClient({
    credentials: {
      private_key: privateKey,
      client_email: clientEmail,
    },
  });

  return client;
}
