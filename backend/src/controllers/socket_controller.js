import { Server } from "socket.io"

const connectToSocket = (server)=>{
    const io = new Server(server,{
        cors : {
            origin : "http://localhost:5173",
            methods : ["GET" , "POST"]
        }
    });
     io.on("connection",(socket)=>{
        console.log("New client connected" , socket.id);
        socket.on("message", (data)=>{
            socket.emit("message" , `server says : ${data}`);
        });
     });
     return io;
}

export default connectToSocket;