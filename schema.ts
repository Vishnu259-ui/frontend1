import { z } from "zod";

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  userType: z.enum(["donor", "ngo"]),
});

export const insertMedicineSchema = z.object({
  name: z.string(),
  category: z.string(),
  quantity: z.number(),
  dosage: z.string().optional(),
  description: z.string().optional(),
  expiryDate: z.string(), // ISO date string
  manufactureDate: z.string(), // ISO date string
  status: z.enum(["available", "pending", "accepted", "delivered"]),
});

export const insertMessageSchema = z.object({
  receiverId: z.number(),
  message: z.string(),
});

export const insertNgoMedicineSchema = z.object({
  medicineId: z.number(),
  status: z.string(),
});
