import { Tutorial } from "./tutorial.model";

const addTutorial = async (link: string) => {
  const result = await Tutorial.create({ link });
  return result;
};
const updateTutorial = async (id: string, link: string) => {
  const result = await Tutorial.findByIdAndUpdate(id, { link }, { new: true });
  return result;
};
const getAllTutorials = async () => {
  const result = await Tutorial.find().lean();
  return result;
};
const deleteTutorial = async (id: string) => {
  const result = await Tutorial.deleteOne({ _id: id });
  return result;
};

export const TutorialServices = {
  addTutorial,
  updateTutorial,
  getAllTutorials,
  deleteTutorial,
};
