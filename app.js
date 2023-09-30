const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const validator = require("validator");
const connectDB = require("./config/db");

dotenv.config();

//mongodb connection
connectDB();

const app = express();
// Set up middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().none());
app.use(cors());
app.use(expressMongoSanitize());
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  })
);
app.use(helmet());
app.use(hpp());

// Routes
const apiRouter = require("./src/routes/api");
app.use("/api", apiRouter);

// Undefined route
app.all("*", (req, res) => {
  res.status(404).json({ status: "error", message: "Not found" });
});

module.exports = app;
