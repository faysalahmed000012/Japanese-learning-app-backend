"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialValidationSchema = void 0;
const zod_1 = require("zod");
exports.tutorialValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        link: zod_1.z.string({ required_error: "link is required" }),
    }),
});
