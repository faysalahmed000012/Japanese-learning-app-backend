import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constants";
import { VocabularyControllers } from "./vocabulary.controllers";

const router = Router();

router.get("/", VocabularyControllers.getVocabulary);
router.get("/:vocabularyId", VocabularyControllers.getVocabularyById);
router.post("/", auth(USER_ROLE.admin), VocabularyControllers.createVocabulary);
router.put(
  "/:vocabularyId",
  auth(USER_ROLE.admin),
  VocabularyControllers.updateVocabulary
);
router.delete(
  "/:vocabularyId",
  auth(USER_ROLE.admin),
  VocabularyControllers.deleteVocabulary
);

export const VocabularyRoutes = router;
