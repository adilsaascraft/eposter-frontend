import { z } from "zod";
import { SUBMISSION_FILE_CONFIG } from "./submission.constants";

const requiredString = (message: string, maxLength: number) =>
  z.string().trim().min(1, message).max(maxLength, `Maximum ${maxLength} characters allowed`);

export const submissionSchema = z.object({
  presenterName: requiredString("Presenter name is required", 150),
  email: z.string().trim().min(1, "Email address is required").email("Please enter a valid email address").max(254, "Email address is too long"),
  mobile: requiredString("Mobile number is required", 20),
  coAuthor: z.string().trim().max(500, "Co-author information cannot exceed 500 characters"),
  abstractNumber: z.string().trim().min(3, "Abstract number must be at least 3 characters").max(100, "Abstract number cannot exceed 100 characters"),
  posterType: requiredString("Please select a category", 100),
  posterTitle: requiredString("Title is required", 500),
  uploadPoster: z.custom<File>(
    (file) => typeof File !== "undefined" && file instanceof File,
    "Please select a PowerPoint file",
  )
    .refine((file) => file.size > 0, "Please select a valid PowerPoint file")
    .refine((file) => file.size <= SUBMISSION_FILE_CONFIG.maxSize, "File size must not exceed 10 MB")
    .refine(
      (file) => SUBMISSION_FILE_CONFIG.allowedExtensions.includes(
        `.${file.name.split(".").pop()?.toLowerCase()}` as (typeof SUBMISSION_FILE_CONFIG.allowedExtensions)[number],
      ),
      "Only PPT and PPTX files are allowed",
    )
    .refine(
      (file) => !file.type || SUBMISSION_FILE_CONFIG.allowedMimeTypes.includes(
        file.type as (typeof SUBMISSION_FILE_CONFIG.allowedMimeTypes)[number],
      ),
      "Invalid PowerPoint file format",
    ),
});

export type SubmissionSchemaValues = z.infer<typeof submissionSchema>;
