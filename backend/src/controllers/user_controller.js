import { User } from "../models/user_model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


export const getUserData = AsyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (!user) {
    return next(new ApiError("User not found", 404));
  }
  res.status(200).json(new ApiResponse(200, "User data retrieved successfully", { user }));
});