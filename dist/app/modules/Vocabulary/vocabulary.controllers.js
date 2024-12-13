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
exports.VocabularyControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const vocabulary_services_1 = require("./vocabulary.services");
const createVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield vocabulary_services_1.VocabularyServices.createVocabulary(payload);
    res.status(201).json({
        success: true,
        message: "Vocabulary Created Successfully",
        data: result,
    });
}));
const updateVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.vocabularyId;
    const payload = req.body;
    const result = yield vocabulary_services_1.VocabularyServices.updateVocabulary(id, payload);
    res.status(200).json({
        success: true,
        message: "Vocabulary Updated Successfully",
        data: result,
    });
}));
const getVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield vocabulary_services_1.VocabularyServices.getVocabulary(query);
    res.status(200).json({
        success: true,
        message: "Vocabulary Retrieved Successfully",
        data: result,
    });
}));
const getVocabularyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.vocabularyId;
    const result = yield vocabulary_services_1.VocabularyServices.getVocabularyById(id);
    res.status(200).json({
        success: true,
        message: "Vocabulary Retrieved Successfully",
        data: result,
    });
}));
const deleteVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.vocabularyId;
    const result = yield vocabulary_services_1.VocabularyServices.deleteVocabulary(id);
    res.status(200).json({
        success: true,
        message: "Vocabulary Deleted Successfully",
        data: result,
    });
}));
exports.VocabularyControllers = {
    createVocabulary,
    updateVocabulary,
    getVocabulary,
    getVocabularyById,
    deleteVocabulary,
};
