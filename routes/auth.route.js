import express from 'express'
import AuthController from '../controllers/auth.controller.js';
const {registerUser} = new AuthController();

const authRouter =express.Router();

authRouter.post("/register",registerUser);

export default authRouter;