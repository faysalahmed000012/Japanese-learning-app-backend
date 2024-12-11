import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { createToken } from "../../utils/createToken";
import IUser from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser) => {
  // check if user exists
  const existedUser = await User.findOne({ email: payload.email });
  if (existedUser) {
    throw new AppError(409, "User Already Exists");
  } else {
    const user = await User.create(payload);
    const jwtPayload = {
      email: user.email,
      role: user.role,
    };
    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string
    );

    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expires_in as string
    );

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
};

const login = async (payload: { email: string; password: string }) => {
  // check if user exists
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(404, "User Does Not Exists");
  } else {
    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
      throw new AppError(403, "Password do not matched");

    //create token and sent to the  client

    const jwtPayload = {
      email: user.email,
      role: user.role,
    };

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string
    );

    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expires_in as string
    );

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
};

const refreshToken = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string
  ) as JwtPayload;

  const { email } = decoded;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(404, "User not Found!");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};

const manageAdmin = async (email: string, newRole: "admin" | "user") => {
  const result = await User.findOneAndUpdate(
    { email },
    { role: newRole },
    { new: true }
  );
  return result;
};

const getAllUsers = async () => {
  const result = await User.find().lean();
  return result;
};

export const UserServices = {
  login,
  createUser,
  refreshToken,
  manageAdmin,
  getAllUsers,
};
