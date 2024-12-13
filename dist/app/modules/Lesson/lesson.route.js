"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_constants_1 = require("../User/user.constants");
const lesson_controllers_1 = require("./lesson.controllers");
const lesson_zod_validation_1 = require("./lesson.zod.validation");
const router = (0, express_1.Router)();
router.get("/", lesson_controllers_1.LessonControllers.getAllLessons);
router.post("/", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), (0, validateRequest_1.default)(lesson_zod_validation_1.lessonValidationSchema), lesson_controllers_1.LessonControllers.createLesson);
router.get("/:lessonId", lesson_controllers_1.LessonControllers.getLessonById);
router.put("/:lessonId", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), lesson_controllers_1.LessonControllers.updateLesson);
router.delete("/:lessonId", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), lesson_controllers_1.LessonControllers.deleteLesson);
exports.LessonRoutes = router;
