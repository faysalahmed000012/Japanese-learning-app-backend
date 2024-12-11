import { model, Schema } from "mongoose";

const TutorialSchema = new Schema({
  link: {
    type: String,
    required: [true, "Link Is Required"],
  },
});

export const Tutorial = model("Tutorial", TutorialSchema);
