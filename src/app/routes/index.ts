import { Router } from "express";
import { LessonRoutes } from "../modules/Lesson/lesson.route";
import { UserRoutes } from "../modules/User/user.route";
import { VocabularyRoutes } from "../modules/Vocabulary/vocabulary.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/lessons",
    route: LessonRoutes,
  },
  {
    path: "/vocabulary",
    route: VocabularyRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
