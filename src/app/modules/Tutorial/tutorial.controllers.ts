import catchAsync from "../../utils/catchAsync";
import { TutorialServices } from "./tutorial.services";

const addTutorial = catchAsync(async (req, res) => {
  const link = req.body.link;
  const result = await TutorialServices.addTutorial(link);

  res.status(201).json({
    success: true,
    message: "Tutorial Added Successfully",
    data: result,
  });
});
const updateTutorial = catchAsync(async (req, res) => {
  const link = req.body.link;
  const id = req.params.tutorialId;
  const result = await TutorialServices.updateTutorial(id, link);

  res.status(200).json({
    success: true,
    message: "Tutorial Added Successfully",
    data: result,
  });
});
const getAllTutorials = catchAsync(async (req, res) => {
  const result = await TutorialServices.getAllTutorials();

  res.status(200).json({
    success: true,
    message: "Tutorials Retrieved Successfully",
    data: result,
  });
});
const deleteTutorial = catchAsync(async (req, res) => {
  const id = req.params.tutorialId;
  const result = await TutorialServices.deleteTutorial(id);

  res.status(200).json({
    success: true,
    message: "Tutorial Deleted Successfully",
    data: result,
  });
});

export const TutorialControllers = {
  addTutorial,
  updateTutorial,
  getAllTutorials,
  deleteTutorial,
};
