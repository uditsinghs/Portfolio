import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";

// create instance of express
const app = express();

// configuration
dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// middlewares - built-in
app.use(express.json());
app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "DELETE", "PUT", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// connect to the database
connectDb();

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
