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
exports.LessonServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const lesson_model_1 = require("./lesson.model");
const createLesson = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const numberConflict = yield lesson_model_1.Lesson.findOne({
        lessonNumber: payload.lessonNumber,
    });
    if (numberConflict) {
        throw new AppError_1.default(409, "This Lesson Already Exists");
    }
    const response = yield lesson_model_1.Lesson.create(payload);
    return response;
});
const updateLesson = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lesson_model_1.Lesson.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const getAllLessons = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lesson_model_1.Lesson.find().lean();
    return result;
});
const getLessonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lesson_model_1.Lesson.findById(id);
    return result;
});
const deleteLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lesson_model_1.Lesson.deleteOne({ _id: id });
    return result;
});
exports.LessonServices = {
    createLesson,
    updateLesson,
    getAllLessons,
    getLessonById,
    deleteLesson,
};
