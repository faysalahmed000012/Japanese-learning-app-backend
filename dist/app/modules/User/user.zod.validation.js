"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3, "Name must be at least 3 characters long").trim(),
        email: zod_1.z.string().email().trim().toLowerCase(),
        password: zod_1.z.string(),
        photo: zod_1.z.string().optional(),
        role: zod_1.z.enum(["user", "admin"]).default("user"),
        completedLessons: zod_1.z.array(zod_1.z.number()).default([]),
    }),
});
