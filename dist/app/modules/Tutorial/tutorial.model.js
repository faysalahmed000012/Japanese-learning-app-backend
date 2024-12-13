"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tutorial = void 0;
const mongoose_1 = require("mongoose");
const TutorialSchema = new mongoose_1.Schema({
    link: {
        type: String,
        required: [true, "Link Is Required"],
    },
});
exports.Tutorial = (0, mongoose_1.model)("Tutorial", TutorialSchema);
