import { model, Schema } from "mongoose";
import { ILesson } from "./lesson.interface";

const LessonSchema = new Schema<ILesson>(
  {
    lessonName: {
      type: String,
      required: [true, "Lesson Name is Required"],
      trim: true,
    },
    lessonNumber: {
      type: Number,
      required: [true, "Lesson Number is required"],
      unique: true,
    },
    vocabularyCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Lesson = model<ILesson>("Lesson", LessonSchema);
