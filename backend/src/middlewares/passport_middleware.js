import passport from "passport"
import  {ExtractJwt,Strategy as JwtStrategy} from "passport-jwt"
import { User } from "../models/user_model.js"
const options = {
     jwtFromRequest: ExtractJwt.fromExtractors([
        (req)=>{
           return req.cookies?.accessToken || null;
        }
     ]),
     secretOrKey: "mysecretkey"
}
const verifyJwt = async( payload,done)=>{
 try {
    const user = await User.findById(payload._id)
    if(!user) return done(null,false)
    done(null,user)
 } catch (error) {
   done(error,null)
 }
}


passport.use( new JwtStrategy(options,verifyJwt))

export default passport 