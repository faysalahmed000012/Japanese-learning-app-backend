import { model, Schema } from "mongoose";

interface ITutorial {
  link: string;
}

const TutorialSchema = new Schema<ITutorial>({
  link: {
    type: String,
    required: [true, "Link Is Required"],
  },
});

export const Tutorial = model<ITutorial>("Tutorial", TutorialSchema);
