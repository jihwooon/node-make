import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import user from './routers/user'
import healthcheck from './routers/healthcheck'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.sendStatus(500);
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }
  ));

app.use(healthcheck)
app.use(user)

export { app };
