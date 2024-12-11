import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "./user.constants";
import { UserControllers } from "./user.controllers";
import { userValidationSchema } from "./user.zod.validation";

const router = Router();

router.get("/", UserControllers.getAllUsers);
router.post(
  "/register",
  validateRequest(userValidationSchema),
  UserControllers.createUser
);
router.post("/login", UserControllers.login);
router.post("/refresh-token", UserControllers.refreshToken);
router.post(
  "/manage-admin",
  auth(USER_ROLE.admin),
  UserControllers.manageAdmin
);

export const UserRoutes = router;
