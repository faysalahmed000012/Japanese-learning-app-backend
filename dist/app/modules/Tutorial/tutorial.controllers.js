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
exports.TutorialControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const tutorial_services_1 = require("./tutorial.services");
const addTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const result = yield tutorial_services_1.TutorialServices.addTutorial(link);
    res.status(201).json({
        success: true,
        message: "Tutorial Added Successfully",
        data: result,
    });
}));
const updateTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const id = req.params.tutorialId;
    const result = yield tutorial_services_1.TutorialServices.updateTutorial(id, link);
    res.status(200).json({
        success: true,
        message: "Tutorial Added Successfully",
        data: result,
    });
}));
const getAllTutorials = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_services_1.TutorialServices.getAllTutorials();
    res.status(200).json({
        success: true,
        message: "Tutorials Retrieved Successfully",
        data: result,
    });
}));
const deleteTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.tutorialId;
    const result = yield tutorial_services_1.TutorialServices.deleteTutorial(id);
    res.status(200).json({
        success: true,
        message: "Tutorial Deleted Successfully",
        data: result,
    });
}));
exports.TutorialControllers = {
    addTutorial,
    updateTutorial,
    getAllTutorials,
    deleteTutorial,
};
