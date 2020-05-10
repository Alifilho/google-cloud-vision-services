import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "50mb", inflate: true }));
app.use(cors());
app.use(routes);

app.listen(1111);
