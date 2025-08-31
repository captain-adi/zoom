import express from "express";
import { configDotenv } from "dotenv";
import connection from "./src/db/db.js";
configDotenv();
const app = express();

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
