import { Model } from "mongoose";

export default interface IUser {
  name: string;
  email: string;
  password: string;
  photo?: string;
  role: "user" | "admin";
  completedLessons: Array<number>;
}

export interface UserModel extends Model<IUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
