import catchAsync from "../../utils/catchAsync";
import { LessonServices } from "./lesson.services";

const createLesson = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await LessonServices.createLesson(payload);

  res.status(201).json({
    success: true,
    message: "Lesson Created Successfully",
    data: result,
  });
});
const updateLesson = catchAsync(async (req, res) => {
  const id = req.params.lessonId;
  const payload = req.body;

  const result = await LessonServices.updateLesson(id, payload);

  res.status(200).json({
    success: true,
    message: "Lesson Updated Successfully",
    data: result,
  });
});
const getAllLessons = catchAsync(async (req, res) => {
  const result = await LessonServices.getAllLessons();

  res.status(200).json({
    success: true,
    message: "All Lessons Retrieved Successfully",
    data: result,
  });
});
const getLessonById = catchAsync(async (req, res) => {
  const id = req.params.lessonId;
  const result = await LessonServices.getLessonById(id);

  res.status(200).json({
    success: true,
    message: "Lesson Retrieved Successfully",
    data: result,
  });
});
const deleteLesson = catchAsync(async (req, res) => {
  const id = req.params.lessonId;
  const result = await LessonServices.deleteLesson(id);

  res.status(200).json({
    success: true,
    message: "Lesson Deleted Successfully",
    data: result,
  });
});

export const LessonControllers = {
  createLesson,
  updateLesson,
  getAllLessons,
  getLessonById,
  deleteLesson,
};
