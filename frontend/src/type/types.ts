export interface IUser{
    username: string;
    email: string;
    password: string;
}


export interface IErrorResponse {
    message: string;
    success: boolean;
}