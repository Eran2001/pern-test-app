import express from "express";
import "dotenv/config";
import client from "./db/db.js";

const app = express();
const PORT = process.env.PORT;

console.clear();

app.use(express.json());

client
  .connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
