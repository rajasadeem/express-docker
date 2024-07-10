import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (_, res) => {
  return res.send("server is running");
});

mongoose.connect("mongodb://db:27017/express-docker");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB", err);
});

app.listen(3000, () => console.log("Server is running"));
