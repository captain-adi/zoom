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

export interface ISuccessResponse {
    message: string;
    success: boolean;
    data?: {
        user: IUser ;
    };
}