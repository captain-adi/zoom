export interface IUser{
    _id?: string ;
    username: string;
    email: string;
    password?: string;
}


export interface IErrorResponse {
    message: string;
    success: boolean;
}

export interface ISuccessResponse<T = any> {
    message: string;
    success: boolean;
    data?: T;
}