import React from "react";
import { createContext, useMemo, type ReactNode } from "react";
import { io, Socket  } from "socket.io-client";

interface ISocketContextProvider{
    socket: Socket;
}


export const socketContext = createContext<ISocketContextProvider | null>(null);



export const SocketContextProvider = ({children}: {children: ReactNode})=>{

const socket = useMemo(() => io("http://localhost:5000"), []);

   return(
    <socketContext.Provider value={{socket}}>
      {children}
    </socketContext.Provider>
   )
}

export const useSocket = () => {
    const context =  React.useContext(socketContext);
    if(!context) throw new Error("useSocket must be used within a SocketContextProvider");
    return context;
}
