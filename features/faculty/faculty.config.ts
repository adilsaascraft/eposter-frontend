
import type { SubmissionConfig } from "@/features/submission/submission.types";

export const FACULTY_CONFIG: SubmissionConfig = {
  kind: "faculty",
  conference: {
    name: "AROICON 2026",
    dateRange: "03 December – 06 December 2026",
    venue: "Hyderabad International Convention Centre (HICC)",
    city: "Hyderabad, Telangana, India",
  },
  title: "Faculty Presentation",
  shortTitle: "Faculty Presentation",
  apiEndpoint: "/api/faculty-presentations",
  resources: {
    templateUrl: "/Faculty_Template.pptx",
    scheduleUrl: "",
    guidelinesUrl: "/Speaker_Guidelines.pdf",
  },
  categories: [
  { label: "Keynote", value: "Keynote" },
  { label: "Oration", value: "Oration" },
],
  formText: {
    informationDescription:
      "Tell us who will be presenting this Faculty Presentation.",
    contentHeading: "Presentation Information",
    contentDescription:
      "Provide your abstract reference and classify your presentation topic.",
    categoryLabel: "Presentation Type",
    categoryPlaceholder: "Select presentation type",
    titleLabel: "Presentation Title / Topic",
    titlePlaceholder: "Enter the complete title of your Faculty Presentation",
    uploadDescription:
      "Upload your final PowerPoint presentation in PPT or PPTX format (maximum 10 MB).",
    submitLabel: "Submit Faculty Presentation",
    submittingLabel: "Submitting your Faculty Presentation...",
    supportText:
      "For Faculty Presentation submission assistance, please contact the AROICON 2026 organizing team.",
  },
};
