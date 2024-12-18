import mongoose from "mongoose";
import User from "../models/user.model.js";

export default class AuthService{
    async registerUser(userData){
       console.log(userData);

        const user = await User.create(userData)
    }
}

