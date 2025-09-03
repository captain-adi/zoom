import express from "express"
import { signUp , login, logout , isAuthenticated} from "../controllers/auth_controller.js";
import { loginValidation, signUpValidation } from "../middlewares/schemaValidator.js";
import passport from "../middlewares/passport_middleware.js";
const router = express.Router();

router.route('/signup').post(signUpValidation, signUp)
router.route("/login").post(loginValidation, login)
router.route("/logout").post(passport.authenticate("jwt",{session : false}),logout)
router.route("/is-auth").get(passport.authenticate("jwt",{session : false}),isAuthenticated)


export default router ;