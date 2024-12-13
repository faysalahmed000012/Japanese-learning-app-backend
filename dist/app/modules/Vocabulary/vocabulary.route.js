"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabularyRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_constants_1 = require("../User/user.constants");
const vocabulary_controllers_1 = require("./vocabulary.controllers");
const vocabulary_zod_validation_1 = require("./vocabulary.zod.validation");
const router = (0, express_1.Router)();
router.get("/", vocabulary_controllers_1.VocabularyControllers.getVocabulary);
router.get("/:vocabularyId", vocabulary_controllers_1.VocabularyControllers.getVocabularyById);
router.post("/", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(vocabulary_zod_validation_1.vocabularyValidationSchema), vocabulary_controllers_1.VocabularyControllers.createVocabulary);
router.put("/:vocabularyId", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), vocabulary_controllers_1.VocabularyControllers.updateVocabulary);
router.delete("/:vocabularyId", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), vocabulary_controllers_1.VocabularyControllers.deleteVocabulary);
exports.VocabularyRoutes = router;
