import { z } from "zod";

export const lessonValidationSchema = z.object({
  body: z.object({
    lessonName: z.string().trim().min(1, "Lesson name is required"),
    lessonNumber: z
      .number()
      .int()
      .positive()
      .min(1, "Lesson number must be positive"),
    vocabularyCount: z.number().optional(),
  }),
});
