"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vocabularyValidationSchema = void 0;
const zod_1 = require("zod");
exports.vocabularyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        word: zod_1.z.string().min(1, "Word is required"),
        pronunciation: zod_1.z.string().min(1, "Pronunciation is required"),
        meaning: zod_1.z.string().min(1, "Meaning is required"),
        whenToSay: zod_1.z
            .string()
            .min(1, "Description of when to use the word is required"),
        lesson: zod_1.z.number(),
        adminEmail: zod_1.z.string().email(),
    }),
});
