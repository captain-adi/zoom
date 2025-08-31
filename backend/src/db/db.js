import mongoose from "mongoose"


const connection = async () =>{
    try {
        const connection = await mongoose.connect(process.env.DB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

export default connection;  