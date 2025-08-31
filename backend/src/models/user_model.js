import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.comparePassword = async function (password) {
  bcrypt.compare(password, this.password);
};


userSchema.methods.generateAccessToken = async function () {
    jwt.sign({
        _id : this._id,
        username : this.username,
        email : this.email  
    }, process.env.JWT_SECRET , {
        expiresIn : process.env.JWT_EXPIRATION
    })
}

export const User = mongoose.model("User", userSchema);
