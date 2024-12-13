"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_constants_1 = require("../User/user.constants");
const tutorial_controllers_1 = require("./tutorial.controllers");
const tutorial_zod_validation_1 = require("./tutorial.zod.validation");
const router = (0, express_1.Router)();
router.get("/", tutorial_controllers_1.TutorialControllers.getAllTutorials);
router.post("/", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(tutorial_zod_validation_1.tutorialValidationSchema), tutorial_controllers_1.TutorialControllers.addTutorial);
router.put("/:tutorialId", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), tutorial_controllers_1.TutorialControllers.updateTutorial);
router.delete("/:tutorialId", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), tutorial_controllers_1.TutorialControllers.deleteTutorial);
exports.TutorialRoutes = router;
