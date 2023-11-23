"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require("express");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Course created successfully",
        data: user,
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// error handling
app.get("/", logger, (req, res, next) => {
    try {
        // res.send("Hello world!");
        res.send(something);
    }
    catch (error) {
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
app.get("/:userId/:subId", logger, (req, res) => {
    console.log(req.params);
    res.send("Hello world!");
});
// query
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello world!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully received data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// Global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;
