"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
const mongoose_1 = require("mongoose");
const LessonSchema = new mongoose_1.Schema({
    lessonName: {
        type: String,
        required: [true, "Lesson Name is Required"],
        trim: true,
    },
    lessonNumber: {
        type: Number,
        required: [true, "Lesson Number is required"],
        unique: true,
    },
    vocabularyCount: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
exports.Lesson = (0, mongoose_1.model)("Lesson", LessonSchema);
