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
exports.UserControllers = void 0;
const config_1 = __importDefault(require("../../config"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_services_1 = require("./user.services");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const response = yield user_services_1.UserServices.createUser(payload);
    const { refreshToken } = response;
    res.cookie("refreshToken", refreshToken, {
        secure: config_1.default.NODE_ENV !== "development",
        httpOnly: true,
    });
    res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: response,
    });
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const response = yield user_services_1.UserServices.login(payload);
    const { refreshToken } = response;
    res.cookie("refreshToken", refreshToken, {
        secure: config_1.default.NODE_ENV !== "development",
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "User Logged In Successfully",
        data: response,
    });
}));
const refreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    const response = yield user_services_1.UserServices.refreshToken(refreshToken);
    res.status(200).json({
        success: true,
        message: "AccessToken Generated Successfully",
        data: response,
    });
}));
const manageAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, newRole } = req.body;
    const response = yield user_services_1.UserServices.manageAdmin(email, newRole);
    res.status(200).json({
        success: true,
        message: "User Role Changed Successfully",
        data: response,
    });
}));
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield user_services_1.UserServices.getAllUsers();
    res.status(200).json({
        success: true,
        message: "Users Retrieved Successfully",
        data: response,
    });
}));
const lessonComplete = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lessonNumber, userId } = req.body;
    const response = yield user_services_1.UserServices.lessonComplete(userId, lessonNumber);
    res.status(200).json({
        success: true,
        message: "Lesson Completed Successfully",
        data: response,
    });
}));
exports.UserControllers = {
    createUser,
    login,
    refreshToken,
    manageAdmin,
    getAllUsers,
    lessonComplete,
};
