import { z } from "zod";

export const tutorialValidationSchema = z.object({
  body: z.object({
    link: z.string({ required_error: "link is required" }),
  }),
});
