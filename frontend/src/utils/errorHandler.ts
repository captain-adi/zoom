import type { IErrorResponse } from "@/type/types";
import type { AxiosError } from "axios";
import { toast } from "sonner";

const errorHandler = (error: unknown, fallback = "Something went wrong!") => {
    const err = error as AxiosError<IErrorResponse>;
  toast.error(err.response?.data.message || fallback);
};

export default errorHandler;
