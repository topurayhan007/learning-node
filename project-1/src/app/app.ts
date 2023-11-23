import express, { NextFunction, Request, Response } from "express";
// const express = require("express");
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// Router
const userRouter = express.Router();
const courseRouter = express.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "Course created successfully",
    data: user,
  });
});

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

// error handling
app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    // res.send("Hello world!");
    res.send(something);
  } catch (error) {
    console.log(error);

    /* res.status(400).json({
      success: false,
      message: "failed",
    }); */

    // global error
    next(error);
  }
});

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

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

// Global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;
