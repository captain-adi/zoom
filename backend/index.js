import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import connection from "./src/db/db.js";
import {createServer} from 'http'
import connectToSocket from "./src/controllers/socket_controller.js";
import cookieParser from "cookie-parser";
configDotenv();
const app = express();

const PORT = process.env.PORT || 8080;

const server = createServer(app);
const io = connectToSocket(server)


connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

 app.use(cookieParser())
  app.use(cors({
    origin  : "http://localhost:5173",
    credentials : true 
  }));
  app.use(passport.initialize())
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
 
//route imports
import authRoutes from "./src/routes/auth_routes.js"
import userRoutes from "./src/routes/user_routes.js"
import passport from "passport";



  app.use('/api/auth' , authRoutes)
  app.use('/api/user', userRoutes);


  app.use((err,req,res,next)=>{
    const {statusCode = 500 , message } = err ;
       res.status(statusCode).json({
        message : message ,
        success : false
       })
  })


