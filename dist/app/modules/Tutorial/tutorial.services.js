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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialServices = void 0;
const tutorial_model_1 = require("./tutorial.model");
const addTutorial = (link) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_model_1.Tutorial.create({ link });
    return result;
});
const updateTutorial = (id, link) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_model_1.Tutorial.findByIdAndUpdate(id, { link }, { new: true });
    return result;
});
const getAllTutorials = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_model_1.Tutorial.find().lean();
    return result;
});
const deleteTutorial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_model_1.Tutorial.deleteOne({ _id: id });
    return result;
});
exports.TutorialServices = {
    addTutorial,
    updateTutorial,
    getAllTutorials,
    deleteTutorial,
};
