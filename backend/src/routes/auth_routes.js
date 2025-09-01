import express from "express"
import { signUp , login, logout } from "../controllers/auth_controller.js";
import { loginValidation, signUpValidation } from "../middlewares/schemaValidator.js";
const router = express.Router();

router.route('/signup').post(signUpValidation, signUp)
router.route("/login").post(loginValidation, login)
router.route("/logout").post(logout)


export default router ;