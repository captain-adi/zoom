import { useMutation } from "@tanstack/react-query"
import axios from "@/api/apiconfig";
import type { ISuccessResponse, IUser } from "@/type/types";
import successHandler from "@/utils/successHandler";
import errorHandler from "@/utils/errorHandler";
import { useAuth } from "@/context/authContext";
export const useSignup = ()=>{
    return useMutation({
        mutationKey: ["signup"],
        mutationFn: async (data: IUser) => {
            const response = await axios.post("/auth/signup", data);
            return response.data;
        },
        onSuccess: (response) => {
            successHandler(response.message);
        },
        onError: (error)=>{
            errorHandler(error)
        }
    })
}

export const useLogin = ()=>{
    const {setUser,setIsLoggedin} = useAuth()
    return useMutation({
        mutationKey : ["login"],
        mutationFn : async (data : {email:string,password:string})=>{
            const response = await axios.post("/auth/login", data);
            return response.data;
        },
        onSuccess: (response: ISuccessResponse) => {
            setUser(response.data?.user);
            setIsLoggedin(true);
            successHandler(response.message);
        },
        onError: (error)=>{
            errorHandler(error)
        }
    })
}


export const useLogout = ()=>{
    const {setUser,setIsLoggedin} = useAuth()
    return useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            const response = await axios.post("/auth/logout");
            return response.data;
        },
        onSuccess: (response) => {
            successHandler(response.message);
            setUser(undefined);
            setIsLoggedin(false);
        },
        onError: (error)=>{
            errorHandler(error)
        }
    })
}