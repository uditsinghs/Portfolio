import express from "express";
import {
  login,
  logout,
  register,
  updateUser,
  getUser,
  updatePassword,
  getuserPortfolio,
  forgotPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logout);
router.put("/update/me", isAuthenticated, updateUser);
router.put("/update/password", isAuthenticated, updatePassword);
router.get("/me/portfolio", getuserPortfolio);
router.post("/password/forgot", isAuthenticated, forgotPassword);
router.put("/password/reset/:token", isAuthenticated, resetPassword);
export default router;
