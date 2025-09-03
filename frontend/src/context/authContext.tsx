import axios from "@/api/apiconfig";
import type { ISuccessResponse } from "@/type/types";
import { createContext, useContext, type ReactNode } from "react";
import { useState,useEffect } from "react";



interface IUserResponse{
    _id : string;
    email : string;
    username : string;
}
interface IContext{
    user : IUserResponse | undefined;
    setUser : (user: IUserResponse | undefined) => void;
    isLoggedin : boolean;
    setIsLoggedin : (isLoggedin : boolean) => void;
}


const authContext = createContext<IContext | undefined>(undefined);


export const AuthContextProvider = ({children} : {children: ReactNode})=>{
        const [user, setUser] = useState<IUserResponse | undefined>(undefined);
        const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
        
        const checkIsLoggedIn = async ()=>{
          const res = await axios.get<ISuccessResponse<{ user: IUserResponse}>>("/auth/is-auth");
          console.log("auth check", res);
          if (res.status === 200) {
            setIsLoggedin(true);
            setUser(res.data.data?.user);
          }
        } 

        useEffect(()=>{
          checkIsLoggedIn();
         
        },[])


    return (
        <authContext.Provider value={{user, setUser , isLoggedin, setIsLoggedin}}>
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