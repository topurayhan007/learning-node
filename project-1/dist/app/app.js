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
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
/* app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
}); */
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
exports.default = app;
