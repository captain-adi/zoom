import { Server } from "socket.io"

const connectToSocket = (server)=>{
    const io = new Server(server);
     io.on("connection",(socket)=>{
         socket.on("join-room",(roomId,userId)=>{
             socket.join(roomId);
             socket.to(roomId).emit("user-joined",userId);
         });

         socket.on("signal",(data)=>{
             socket.to(data.roomId).emit("signal",data);
         });
     });
     return io;
}

export default connectToSocket;