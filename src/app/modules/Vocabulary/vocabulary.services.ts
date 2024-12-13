import QueryBuilder from "../../../builder/queryBuilder";
import AppError from "../../errors/AppError";
import { Lesson } from "../Lesson/lesson.model";
import { IVocabularyPayload } from "./vocabulary.interface";
import { Vocabulary } from "./vocabulary.model";

const createVocabulary = async (payload: IVocabularyPayload) => {
  // find lesson
  const lesson = await Lesson.findOne({ lessonNumber: payload.lesson });
  if (!lesson) {
    throw new AppError(404, "Could Not Find Corresponding Lesson");
  }

  const newPayload = { ...payload, lesson: lesson._id };
  const result = await Vocabulary.create(newPayload);
  const updateLesson = await Lesson.findByIdAndUpdate(
    lesson._id,
    { $inc: { vocabularyCount: 1 } },
    { new: true }
  );
  return result;
};
const updateVocabulary = async (
  id: string,
  payload: Partial<IVocabularyPayload>
) => {
  // find lesson
  const lesson = await Lesson.findOne({ lessonNumber: payload.lesson });
  if (!lesson) {
    throw new AppError(404, "Could Not Find Corresponding Lesson");
  }

  const newPayload = { ...payload, lesson: lesson._id };

  const result = await Vocabulary.findByIdAndUpdate(id, newPayload, {
    new: true,
  });
  return result;
};
const getVocabulary = async (query: Record<string, unknown>) => {
  if (query && query.lessonNumber) {
    const lessonNumber = query.lessonNumber;

    const findLesson = await Lesson.findOne({ lessonNumber }).lean();
    if (!findLesson) {
      throw new AppError(404, "Could Not Find Corresponding Lesson");
    }
    const lesson = findLesson._id;

    const newQuery = { lesson: lesson };
    const vocabularyQuery = new QueryBuilder(
      Vocabulary.find().populate("lesson"),
      newQuery
    ).filter();

    const result = await vocabularyQuery.modelQuery;
    return result;
  } else {
    const result = await Vocabulary.find().populate("lesson").lean();
    return result;
  }
};
const getVocabularyById = async (id: string) => {
  const result = await Vocabulary.findById(id);
  return result;
};
const deleteVocabulary = async (id: string) => {
  const result = await Vocabulary.deleteOne({ _id: id });
  return result;
};

export const VocabularyServices = {
  createVocabulary,
  updateVocabulary,
  getVocabulary,
  getVocabularyById,
  deleteVocabulary,
};
