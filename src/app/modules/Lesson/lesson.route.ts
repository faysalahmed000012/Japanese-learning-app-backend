import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constants";
import { LessonControllers } from "./lesson.controllers";

const router = Router();

router.get("/", LessonControllers.getAllLessons);
router.post("/", auth(USER_ROLE.admin), LessonControllers.createLesson);
router.get("/:lessonId", LessonControllers.getLessonById);
router.put("/:lessonId", auth(USER_ROLE.admin), LessonControllers.updateLesson);
router.delete(
  "/:lessonId",
  auth(USER_ROLE.admin),
  LessonControllers.deleteLesson
);

export const LessonRoutes = router;
