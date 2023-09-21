import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

const app = express();
dotenv.config()

import postRoutes from "./routes/posts.js";

app.use(bodyParser.json({ limit: "30 mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes); // middleware
// const CONNECTION_URL =
//   "mongodb+srv://user-200:Bamboado.25eigsi@mongo.df6smj9.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)
