import express, { NextFunction, Request, Response } from "express";
// const express = require("express");
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

/* app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
}); */

// params
app.get("/:userId/:subId", logger, (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello world!");
});

// query
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello world!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.json({
    message: "successfully received data",
  });
});

export default app;
