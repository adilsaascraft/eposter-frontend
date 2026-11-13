import type { SubmissionConfig } from "@/features/submission/submission.types";

export const EPOSTER_CONFIG: SubmissionConfig = {
  kind: "eposter",
  conference: {
    name: "AROICON 2026",
    dateRange: "03 December – 06 December 2026",
    venue: "Hyderabad International Convention Centre (HICC)",
    city: "Hyderabad, Telangana, India",
  },
  title: "E-Poster",
  shortTitle: "E-Poster",
  apiEndpoint: "/api/eposters",
  resources: {
    templateUrl: "/eposter-template.pptx",
    scheduleUrl: "/presentation-schedule.pdf",
    guidelinesUrl: "/eposter-guidelines.pdf",
  },
  categories: [
    { label: "Breast", value: "Breast" },
    { label: "CNS", value: "CNS" },
    { label: "Gastrointestinal", value: "Gastrointestinal" },
    { label: "Genitourinary", value: "Genitourinary" },
    { label: "Gynaecological", value: "Gynaecological" },
    { label: "Head and Neck", value: "Head and Neck" },
    { label: "Lung/Thoracic", value: "Lung/Thoracic" },
    { label: "Others", value: "Others" },
  ],
  formText: {
    informationDescription: "Tell us who will be presenting this E-Poster.",
    contentHeading: "Poster Information",
    contentDescription: "Provide your abstract reference and classify your research topic.",
    categoryLabel: "E-Poster Type",
    categoryPlaceholder: "Select e-poster type",
    titleLabel: "Poster Title / Topic",
    titlePlaceholder: "Enter the complete title of your E-Poster",
    uploadDescription: "Upload the final one-slide PowerPoint presentation.",
    submitLabel: "Submit E-Poster",
    submittingLabel: "Submitting your E-Poster...",
    supportText: "For E-Poster submission assistance, please contact the AROICON 2026 organizing team.",
  },
};
