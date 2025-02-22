import express from "express";
import "dotenv/config";
import client from "./db/db.js";

const app = express();
const PORT = process.env.PORT;

await client.connect();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
