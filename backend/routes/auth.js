import express from "express";
import {
  LoginUser,
  allUsers,
  deleteUser,
  forgotPassword,
  getUserDetails,
  getUserProfile,
  logoutUser,
  registerUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUser,
} from "../controllers/authControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles('admin'),allUsers)

router
  .route("/admin/users/:id")
  .get(isAuthenticatedUser,authorizeRoles("admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);


export default router;
