import { z } from "zod";

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").trim(),
    email: z.string().email().trim().toLowerCase(),
    password: z.string(),
    photo: z.string().optional(),
    role: z.enum(["user", "admin"]).default("user"),
    completedLessons: z.array(z.number()).default([]),
  }),
});
