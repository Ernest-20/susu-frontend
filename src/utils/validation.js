import { z } from "zod";

export const registerSchema = z
.object({
    accountType: z.enum(["individual", "group"]),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    groupName: z.string().optional(),
    phone: z
      .string()
      .min(9, "Enter a valid phone number")
      .regex(/^\+?[0-9]+$/, "Phone number can only contain digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine(
    (data) => data.accountType !== "group" || (data.groupName && data.groupName.length > 1),
    {
      message: "Group name is required for group accounts",
      path: ["groupName"],
    }
  );

export const loginSchema = z.object({
    phone: z.string().min(9, "Enter a valid phone number"),
    password: z.string().min(1, "Password is required"),
});