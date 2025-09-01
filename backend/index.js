import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
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

 app.use(cookieParser())
  app.use(cors({
    origin  : "*",
    credentials : true 
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
 
//route imports
import authRoutes from "./src/routes/auth_routes.js"
import cookieParser from "cookie-parser";

  app.use('/api/auth' , authRoutes)


  app.use((err,req,res,next)=>{
    const {statusCode , message} = err ;
       res.status(statusCode).json({
        message : message ,
        success : false
       })
  })


