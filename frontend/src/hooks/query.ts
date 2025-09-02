import { useMutation } from "@tanstack/react-query"
import api from "@/api/apiconfig";
import type { IUser } from "@/type/types";
import successHandler from "@/utils/successHandler";
import errorHandler from "@/utils/errorHandler";
export const useSignup = ()=>{
    return useMutation({
        mutationKey: ["signup"],
        mutationFn: async (data: IUser) => {
            const response = await api.post("/auth/signup", data);
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