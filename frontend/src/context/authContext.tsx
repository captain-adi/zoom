import { createContext, useContext, type ReactNode } from "react";
import { useState,useEffect } from "react";



interface IUser{
    _id : string;
    email : string;
    username : string;
}
interface IContext{
    user : IUser | undefined;
    setUser : (user: IUser | undefined) => void;
}


const authContext = createContext<IContext | undefined>(undefined);


export const AuthContextProvider = ({children} : {children: ReactNode})=>{
        const [user, setUser] = useState<IUser | undefined>(undefined);


    return (
        <authContext.Provider value={{user, setUser }}>
            {children} 
        </authContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};