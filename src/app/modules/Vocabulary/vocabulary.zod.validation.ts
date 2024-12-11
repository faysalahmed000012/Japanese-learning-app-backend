import { z } from "zod";

export const vocabularyValidationSchema = z.object({
  body: z.object({
    word: z.string().min(1, "Word is required"),
    pronunciation: z.string().min(1, "Pronunciation is required"),
    meaning: z.string().min(1, "Meaning is required"),
    whenToSay: z
      .string()
      .min(1, "Description of when to use the word is required"),
    lesson: z.number(),
    adminEmail: z.string().email(),
  }),
});
