import { Router } from "express";
import * as userController from "../controllers/userController.js"


const userRouter = Router();
userRouter.post("/", userController.signIn);
userRouter.post("/signup", userController.signUp);


export default userRouter;
