"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const lesson_services_1 = require("./lesson.services");
const createLesson = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield lesson_services_1.LessonServices.createLesson(payload);
    res.status(201).json({
        success: true,
        message: "Lesson Created Successfully",
        data: result,
    });
}));
const updateLesson = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.lessonId;
    const payload = req.body;
    const result = yield lesson_services_1.LessonServices.updateLesson(id, payload);
    res.status(200).json({
        success: true,
        message: "Lesson Updated Successfully",
        data: result,
    });
}));
const getAllLessons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lesson_services_1.LessonServices.getAllLessons();
    res.status(200).json({
        success: true,
        message: "All Lessons Retrieved Successfully",
        data: result,
    });
}));
const getLessonById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.lessonId;
    const result = yield lesson_services_1.LessonServices.getLessonById(id);
    res.status(200).json({
        success: true,
        message: "Lesson Retrieved Successfully",
        data: result,
    });
}));
const deleteLesson = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.lessonId;
    const result = yield lesson_services_1.LessonServices.deleteLesson(id);
    res.status(200).json({
        success: true,
        message: "Lesson Deleted Successfully",
        data: result,
    });
}));
exports.LessonControllers = {
    createLesson,
    updateLesson,
    getAllLessons,
    getLessonById,
    deleteLesson,
};
