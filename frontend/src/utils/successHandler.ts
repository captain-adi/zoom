import { toast } from "sonner";

const successHandler = (message: string) => {
  toast.success(message);
};
export default successHandler;
