import type { SubmissionConfig } from "@/features/submission/submission.types";

export const ORAL_CONFIG: SubmissionConfig = {
  kind: "oral",
  conference: {
    name: "AROICON 2026",
    dateRange: "03 December – 06 December 2026",
    venue: "Hyderabad International Convention Centre (HICC)",
    city: "Hyderabad, Telangana, India",
  },
  title: "Oral Presentation",
  shortTitle: "Oral Presentation",
  apiEndpoint: "/api/orals",
  resources: {
    templateUrl: "/oral-template.pptx",
    scheduleUrl: "",
    guidelinesUrl: "/oral-guideline.pdf",
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
    informationDescription: "Tell us who will be delivering this Oral Presentation.",
    contentHeading: "Presentation Information",
    contentDescription: "Provide your abstract reference and classify your research topic.",
    categoryLabel: "Oral Paper Presentation Type",
    categoryPlaceholder: "Select Oral Paper Presentation Type",
    titleLabel: "Presentation Title / Topic",
    titlePlaceholder: "Enter the complete title of your Oral Presentation",
    uploadDescription: "Upload your final PowerPoint presentation.",
    submitLabel: "Submit Oral Presentation",
    submittingLabel: "Submitting your Oral Presentation...",
    supportText: "For Oral Presentation submission assistance, please contact the AROICON 2026 organizing team.",
  },
};
