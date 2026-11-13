export const SUBMISSION_FILE_CONFIG = {
  maxSize: 10 * 1024 * 1024,
  maxSizeLabel: "10 MB",
  allowedExtensions: [".ppt", ".pptx"],
  allowedMimeTypes: [
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  accept:
    ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
} as const;

export const SUBMISSION_FORM_DEFAULT_VALUES = {
  presenterName: "",
  email: "",
  mobile: "",
  coAuthor: "",
  abstractNumber: "",
  posterType: "",
  posterTitle: "",
} as const;
