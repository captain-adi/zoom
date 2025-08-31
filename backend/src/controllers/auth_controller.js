import AsyncHandler from "../utils/AsyncHandler.js";

export const signUp = AsyncHandler(async (req, res, next) => {
  console.log("working fine");
});

export const login = AsyncHandler(async (req, res, next) => {
  console.log("login");
});
