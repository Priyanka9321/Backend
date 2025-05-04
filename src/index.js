// require('dotenv').config({path: "./env"});
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/db.js";
import app from "./app.js"
const PORT = process.env.PORT || 3030;

// Handle unexpected app-level errors
app.on("error", (error) => {
  console.log("App Error !!: ", error);
  process.exit(1);
});

// Connect to DB and start server
connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is runing at ${PORT}.`);
    })
  )
  .catch((error) => {
    console.error("MongoDB connection failed!!", error);
  });

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
