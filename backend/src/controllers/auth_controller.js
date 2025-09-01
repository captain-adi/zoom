import { User } from "../models/user_model.js";
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";

export const signUp = AsyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new ApiError("User already exists", 400);
  }
  const newUser = await User.create({
    username,
    email,
    password,
  });

  res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", { user: newUser }));
});

export const login = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError("user does not exis plz signUp first ", 401);
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if(!isPasswordCorrect){
      throw new ApiError("password is not correct" , 401)
  }
  const token = await user.generateAccessToken();
  const options = {
    httpOnly: true,
    secure: false,
  };
  return res
    .status(202)
    .cookie("accessToken", token, options)
    .json(
      new ApiResponse(200, "login successful", {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      })
    );
});


export const logout = AsyncHandler(async (req,res,next)=>{
    return res.clearCookie("accessToken").json(new ApiResponse(200,"logout successful"))
})