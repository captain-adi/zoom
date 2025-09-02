import api from "@/api/apiconfig";
import { createContext, type ReactNode } from "react";
import { useState } from "react";


interface IContext{
    user : string ;
    setUser : (user: string) => void;
    handleSignup : () => void;  
}


const authContext = createContext<IContext | undefined>(undefined);


export const AuthContextProvider = ({children} : {children: ReactNode})=>{
    const [user, setUser] = useState<string>("");

    const handleSignup = ()=>{
        api.post("/auth/signup", { user })
            .then(response => {
                setUser(response.data.user);
            })
            .catch(error => {
                console.error("Error signing up:", error);
            });
    }

    return (
        <authContext.Provider value={{user, setUser , handleSignup}}>
            {children} 
        </authContext.Provider>
    )
}