import { Router } from "express";

import { Request, Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default routes;
