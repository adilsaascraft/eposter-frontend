
import { z } from "zod";

import { EPOSTER_FILE_CONFIG } from "./eposter.constants";

const requiredString = (message: string, maxLength: number) =>
  z
    .string()
    .trim()
    .min(1, message)
    .max(maxLength, `Maximum ${maxLength} characters allowed`);

export const eposterSchema = z.object({
  presenterName: requiredString("Presenter name is required", 150),

  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(254, "Email address is too long"),

  mobile: requiredString("Mobile number is required", 20),

  coAuthor: z
    .string()
    .trim()
    .max(500, "Co-author information cannot exceed 500 characters"),

  abstractNumber: z
    .string()
    .trim()
    .min(3, "Abstract number must be at least 3 characters")
    .max(100, "Abstract number cannot exceed 100 characters"),

  posterType: requiredString("Please select a poster type", 100),

  posterTitle: requiredString("Poster title is required", 500),

  uploadPoster: z
    .custom<File>(
      (file) =>
        typeof File !== "undefined" && file instanceof File,
      "Please upload your E-Poster"
    )
    .refine(
      (file) => file.size > 0,
      "Please select a valid PowerPoint file"
    )
    .refine(
      (file) => file.size <= EPOSTER_FILE_CONFIG.maxSize,
      "File size must not exceed 10 MB"
    )
    .refine(
      (file) =>
        EPOSTER_FILE_CONFIG.allowedExtensions.includes(
          `.${file.name.split(".").pop()?.toLowerCase()}` as
            (typeof EPOSTER_FILE_CONFIG.allowedExtensions)[number]
        ),
      "Only PPT and PPTX files are allowed"
    )
    .refine(
      (file) =>
        EPOSTER_FILE_CONFIG.allowedMimeTypes.includes(
          file.type as
            (typeof EPOSTER_FILE_CONFIG.allowedMimeTypes)[number]
        ),
      "Invalid PowerPoint file format"
    ),
});

export type EposterSchemaValues = z.infer<typeof eposterSchema>;
