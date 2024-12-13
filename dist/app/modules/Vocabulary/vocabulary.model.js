"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vocabulary = void 0;
const mongoose_1 = require("mongoose");
const VocabularySchema = new mongoose_1.Schema({
    word: {
        type: String,
        required: [true, "Word is Required"],
    },
    pronunciation: {
        type: String,
        required: [true, "Pronunciation is Required"],
    },
    meaning: {
        type: String,
        required: [true, "Meaning is Required"],
    },
    whenToSay: {
        type: String,
        required: [true, "Description of When to use is Required"],
    },
    lesson: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Lesson",
        required: [true, "Associated Lesson is Required"],
    },
    adminEmail: {
        type: String,
        required: [true, "Admin Email is Required"],
    },
}, { timestamps: true });
exports.Vocabulary = (0, mongoose_1.model)("Vocabulary", VocabularySchema);
