import express from "express";
import userController from "../controller/user.contoller.js";

const router = express.Router();

router.post('/signin',userController.SignIn)
router.post('/signup',userController.SignUp)

export default router;