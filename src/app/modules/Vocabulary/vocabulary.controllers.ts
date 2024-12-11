import catchAsync from "../../utils/catchAsync";
import { VocabularyServices } from "./vocabulary.services";

const createVocabulary = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await VocabularyServices.createVocabulary(payload);

  res.status(201).json({
    success: true,
    message: "Vocabulary Created Successfully",
    data: result,
  });
});
const updateVocabulary = catchAsync(async (req, res) => {
  const id = req.params.vocabularyId;
  const payload = req.body;

  const result = await VocabularyServices.updateVocabulary(id, payload);

  res.status(200).json({
    success: true,
    message: "Vocabulary Updated Successfully",
    data: result,
  });
});
const getVocabularyByLesson = catchAsync(async (req, res) => {
  const lessonNumber = req.body.lessonNumber;

  const result = await VocabularyServices.getVocabularyByLesson(lessonNumber);

  res.status(200).json({
    success: true,
    message: "Vocabulary Retrieved Successfully",
    data: result,
  });
});
const getVocabularyById = catchAsync(async (req, res) => {
  const id = req.params.vocabularyId;

  const result = await VocabularyServices.getVocabularyById(id);

  res.status(200).json({
    success: true,
    message: "Vocabulary Retrieved Successfully",
    data: result,
  });
});
const deleteVocabulary = catchAsync(async (req, res) => {
  const id = req.params.vocabularyId;

  const result = await VocabularyServices.deleteVocabulary(id);

  res.status(200).json({
    success: true,
    message: "Vocabulary Deleted Successfully",
    data: result,
  });
});

export const VocabularyControllers = {
  createVocabulary,
  updateVocabulary,
  getVocabularyByLesson,
  getVocabularyById,
  deleteVocabulary,
};
