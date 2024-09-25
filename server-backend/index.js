import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

// mongoose.connect(URL).then(()=>{

//     console.log("DB connected successfully");

//     app.listen(PORT, ()=>{
//         console.log(`Server is running on port: ${PORT}`);
//     })

// }).catch(error => console.log(error));

// Local MongoDB URL with database name 'mydb'
const MONGO_URL = 'mongodb://localhost:27017/mernCrudApp';

// Connect to MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });


app.use("/api", route);