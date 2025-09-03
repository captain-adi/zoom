import { Router } from "express"
import passport from "../middlewares/passport_middleware.js";
import { getUserData } from "../controllers/user_controller.js";
const router = Router();

router.route("/me").get(passport.authenticate("jwt", { session: false }), getUserData);

export default router;
