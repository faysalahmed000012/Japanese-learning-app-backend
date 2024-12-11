import { Router } from "express";
import { TutorialControllers } from "./tutorial.controllers";

const router = Router();

router.get("/", TutorialControllers.getAllTutorials);
router.post("/", TutorialControllers.addTutorial);
router.put("/:tutorialId", TutorialControllers.updateTutorial);
router.delete("/:tutorialId", TutorialControllers.deleteTutorial);

export const TutorialRoutes = router;
