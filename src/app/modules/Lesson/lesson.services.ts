import AppError from "../../errors/AppError";
import { ILesson } from "./lesson.interface";
import { Lesson } from "./lesson.model";

const createLesson = async (payload: ILesson) => {
  const numberConflict = await Lesson.findOne({
    lessonNumber: payload.lessonNumber,
  });

  if (numberConflict) {
    throw new AppError(409, "This Lesson Already Exists");
  }

  const response = await Lesson.create(payload);
  return response;
};
const updateLesson = async (id: string, payload: Partial<ILesson>) => {
  const result = await Lesson.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const getAllLessons = async () => {
  const result = await Lesson.find().lean();
  return result;
};
const getLessonById = async (id: string) => {
  const result = await Lesson.findById(id);
  return result;
};
const deleteLesson = async (id: string) => {
  const result = await Lesson.deleteOne({ _id: id });
  return result;
};

export const LessonServices = {
  createLesson,
  updateLesson,
  getAllLessons,
  getLessonById,
  deleteLesson,
};
