// require('dotenv').config({path: "./env"});
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/db.js";
connectDB()


/* import express from "express";
conimport { dotenv } from 'dot';
st app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`server listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
})(); */
