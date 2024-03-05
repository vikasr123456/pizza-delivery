import express from "express";
import {
  createNewPizza,
  deletePizza,
  getAllPizza,
  getPizzaById,
  getProducts,
  updatePizza,
} from "../controllers/pizzaControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route("/pizza").get(getProducts);
router
  .route("/admin/product/newPizza")
  .put(isAuthenticatedUser, authorizeRoles("admin"), createNewPizza);

router.route("/admin/pizza").get(getAllPizza);

router
  .route("/admin/product/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getPizzaById)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updatePizza)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deletePizza);

export default router;
