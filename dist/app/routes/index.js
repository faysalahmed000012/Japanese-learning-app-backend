"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lesson_route_1 = require("../modules/Lesson/lesson.route");
const tutorial_route_1 = require("../modules/Tutorial/tutorial.route");
const user_route_1 = require("../modules/User/user.route");
const vocabulary_route_1 = require("../modules/Vocabulary/vocabulary.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/lessons",
        route: lesson_route_1.LessonRoutes,
    },
    {
        path: "/vocabulary",
        route: vocabulary_route_1.VocabularyRoutes,
    },
    {
        path: "/tutorial",
        route: tutorial_route_1.TutorialRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
