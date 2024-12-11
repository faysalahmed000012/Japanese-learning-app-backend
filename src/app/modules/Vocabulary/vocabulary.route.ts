import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../User/user.constants";
import { VocabularyControllers } from "./vocabulary.controllers";
import { vocabularyValidationSchema } from "./vocabulary.zod.validation";

const router = Router();

router.get("/", VocabularyControllers.getVocabulary);
router.get("/:vocabularyId", VocabularyControllers.getVocabularyById);
router.post(
  "/",
  auth(USER_ROLE.admin),
  validateRequest(vocabularyValidationSchema),
  VocabularyControllers.createVocabulary
);
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
