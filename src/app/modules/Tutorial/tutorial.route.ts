import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../User/user.constants";
import { TutorialControllers } from "./tutorial.controllers";
import { tutorialValidationSchema } from "./tutorial.zod.validation";

const router = Router();

router.get("/", TutorialControllers.getAllTutorials);
router.post(
  "/",
  auth(USER_ROLE.admin),
  validateRequest(tutorialValidationSchema),
  TutorialControllers.addTutorial
);
router.put(
  "/:tutorialId",
  auth(USER_ROLE.admin),
  TutorialControllers.updateTutorial
);
router.delete(
  "/:tutorialId",
  auth(USER_ROLE.admin),
  TutorialControllers.deleteTutorial
);

export const TutorialRoutes = router;
