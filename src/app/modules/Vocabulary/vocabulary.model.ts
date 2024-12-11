import { model, Schema } from "mongoose";
import { IVocabulary } from "./vocabulary.interface";

const VocabularySchema = new Schema<IVocabulary>(
  {
    word: {
      type: String,
      required: [true, "Word is Required"],
    },
    pronunciation: {
      type: String,
      required: [true, "Pronunciation is Required"],
    },
    meaning: {
      type: String,
      required: [true, "Meaning is Required"],
    },
    whenToSay: {
      type: String,
      required: [true, "Description of When to use is Required"],
    },
    lesson: {
      type: String,
      ref: "Lesson",
      required: [true, "Associated Lesson is Required"],
    },
    adminEmail: {
      type: String,
      required: [true, "Admin Email is Required"],
    },
  },
  { timestamps: true }
);

export const Vocabulary = model<IVocabulary>("Vocabulary", VocabularySchema);
