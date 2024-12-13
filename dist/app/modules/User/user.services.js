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
exports.UserServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createToken_1 = require("../../utils/createToken");
const user_model_1 = require("./user.model");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user exists
    const existedUser = yield user_model_1.User.findOne({ email: payload.email });
    if (existedUser) {
        throw new AppError_1.default(409, "User Already Exists");
    }
    else {
        const user = yield user_model_1.User.create(payload);
        const jwtPayload = {
            _id: user._id,
            name: user.name,
            photo: user.photo,
            email: user.email,
            role: user.role,
            completedLessons: user.completedLessons,
        };
        const accessToken = (0, createToken_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
        const refreshToken = (0, createToken_1.createToken)(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user exists
    const user = yield user_model_1.User.findOne({ email: payload.email });
    if (!user) {
        throw new AppError_1.default(404, "User Does Not Exists");
    }
    else {
        if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, user === null || user === void 0 ? void 0 : user.password)))
            throw new AppError_1.default(403, "Password do not matched");
        //create token and sent to the  client
        const jwtPayload = {
            _id: user._id,
            name: user.name,
            photo: user.photo,
            email: user.email,
            role: user.role,
        };
        const accessToken = (0, createToken_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
        const refreshToken = (0, createToken_1.createToken)(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_refresh_secret);
    const { email } = decoded;
    const user = yield user_model_1.User.findOne({ email });
    if (!user) {
        throw new AppError_1.default(404, "User not Found!");
    }
    const jwtPayload = {
        _id: user._id,
        name: user.name,
        photo: user.photo,
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, createToken_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    return {
        accessToken,
    };
});
const manageAdmin = (email, newRole) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ email }, { role: newRole }, { new: true });
    return result;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find().lean();
    return result;
});
const lessonComplete = (userId, lessonNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(userId, { $addToSet: { completedLessons: lessonNumber } }, { new: true });
    return result;
});
exports.UserServices = {
    login,
    createUser,
    refreshToken,
    manageAdmin,
    getAllUsers,
    lessonComplete,
};
