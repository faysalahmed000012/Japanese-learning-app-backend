import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const response = await UserServices.createUser(payload);
  const { refreshToken } = response;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV !== "development",
    httpOnly: true,
  });

  res.status(201).json({
    success: true,
    message: "User Created Successfully",
    data: response,
  });
});

const login = catchAsync(async (req, res) => {
  const payload = req.body;
  const response = await UserServices.login(payload);
  const { refreshToken } = response;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV !== "development",
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User Logged In Successfully",
    data: response,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  const response = await UserServices.refreshToken(refreshToken);

  res.status(200).json({
    success: true,
    message: "AccessToken Generated Successfully",
    data: response,
  });
});

const manageAdmin = catchAsync(async (req, res) => {
  const { email, newRole } = req.body;
  const response = await UserServices.manageAdmin(email, newRole);

  res.status(200).json({
    success: true,
    message: "User Role Changed Successfully",
    data: response,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const response = await UserServices.getAllUsers();

  res.status(200).json({
    success: true,
    message: "Users Retrieved Successfully",
    data: response,
  });
});

export const UserControllers = {
  createUser,
  login,
  refreshToken,
  manageAdmin,
  getAllUsers,
};
