"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonValidationSchema = void 0;
const zod_1 = require("zod");
exports.lessonValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        lessonName: zod_1.z.string().trim().min(1, "Lesson name is required"),
        lessonNumber: zod_1.z
            .number()
            .int()
            .positive()
            .min(1, "Lesson number must be positive"),
        vocabularyCount: zod_1.z.number().optional(),
    }),
});
