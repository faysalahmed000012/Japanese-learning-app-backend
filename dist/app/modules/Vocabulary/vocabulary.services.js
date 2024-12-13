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
exports.VocabularyServices = void 0;
const queryBuilder_1 = __importDefault(require("../../../builder/queryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const lesson_model_1 = require("../Lesson/lesson.model");
const vocabulary_model_1 = require("./vocabulary.model");
const createVocabulary = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // find lesson
    const lesson = yield lesson_model_1.Lesson.findOne({ lessonNumber: payload.lesson });
    if (!lesson) {
        throw new AppError_1.default(404, "Could Not Find Corresponding Lesson");
    }
    const newPayload = Object.assign(Object.assign({}, payload), { lesson: lesson._id });
    const result = yield vocabulary_model_1.Vocabulary.create(newPayload);
    const updateLesson = yield lesson_model_1.Lesson.findByIdAndUpdate(lesson._id, { $inc: { vocabularyCount: 1 } }, { new: true });
    return result;
});
const updateVocabulary = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // find lesson
    const lesson = yield lesson_model_1.Lesson.findOne({ lessonNumber: payload.lesson });
    if (!lesson) {
        throw new AppError_1.default(404, "Could Not Find Corresponding Lesson");
    }
    const newPayload = Object.assign(Object.assign({}, payload), { lesson: lesson._id });
    const result = yield vocabulary_model_1.Vocabulary.findByIdAndUpdate(id, newPayload, {
        new: true,
    });
    return result;
});
const getVocabulary = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (query && query.lessonNumber) {
        const lessonNumber = query.lessonNumber;
        const findLesson = yield lesson_model_1.Lesson.findOne({ lessonNumber }).lean();
        if (!findLesson) {
            throw new AppError_1.default(404, "Could Not Find Corresponding Lesson");
        }
        const lesson = findLesson._id;
        const newQuery = { lesson: lesson };
        const vocabularyQuery = new queryBuilder_1.default(vocabulary_model_1.Vocabulary.find().populate("lesson"), newQuery).filter();
        const result = yield vocabularyQuery.modelQuery;
        return result;
    }
    else {
        const result = yield vocabulary_model_1.Vocabulary.find().populate("lesson").lean();
        return result;
    }
});
const getVocabularyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.findById(id);
    return result;
});
const deleteVocabulary = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.deleteOne({ _id: id });
    return result;
});
exports.VocabularyServices = {
    createVocabulary,
    updateVocabulary,
    getVocabulary,
    getVocabularyById,
    deleteVocabulary,
};
