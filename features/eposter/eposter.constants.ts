import type { EposterPosterType } from "./eposter.types";

export const EPOSTER_CONFERENCE = {
  name: "AROICON 2026",
  startDate: "03 December 2026",
  endDate: "06 December 2026",
  dateRange: "03 December – 06 December 2026",
  venue: "Hyderabad International Convention Centre (HICC)",
  city: "Hyderabad, Telangana, India",
} as const;

export const EPOSTER_API_ENDPOINT = "/api/eposters";

export const EPOSTER_FILE_CONFIG = {
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

export const EPOSTER_TYPES: EposterPosterType[] = [
  { label: "Breast", value: "Breast" },
  { label: "CNS", value: "CNS" },
  { label: "Gastrointestinal", value: "Gastrointestinal" },
  { label: "Genitourinary", value: "Genitourinary" },
  { label: "Gynaecological", value: "Gynaecological" },
  { label: "Head and Neck", value: "Head and Neck" },
  { label: "Lung/Thoracic", value: "Lung/Thoracic" },
  { label: "Others", value: "Others" },
];

export const EPOSTER_FORM_DEFAULT_VALUES = {
  presenterName: "",
  email: "",
  mobile: "",
  coAuthor: "",
  abstractNumber: "",
  posterType: "",
  posterTitle: "",
} as const;
