export interface SubmissionFormValues {
  presenterName: string;
  email: string;
  mobile: string;
  coAuthor: string;
  abstractNumber: string;
  posterType: string;
  posterTitle: string;
  uploadPoster: File;
}

export interface SubmissionNotificationStatus {
  status: "PENDING" | "SENT" | "FAILED";
  sentAt: string | null;
  error: string | null;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    presenterName: string;
    abstractNumber: string;
    posterTitle: string;
    isPublished: boolean;
    emailNotification: SubmissionNotificationStatus;
    whatsappNotification?: SubmissionNotificationStatus;
    createdAt: string;
  };
}

export interface SubmissionApiError {
  success: false;
  message: string;
}

export interface SubmissionCategory {
  label: string;
  value: string;
}

export interface SubmissionConfig {
  kind: "eposter" | "oral";
  conference: {
    name: string;
    dateRange: string;
    venue: string;
    city: string;
  };
  title: string;
  shortTitle: string;
  apiEndpoint: string;
  resources: {
    templateUrl: string;
    scheduleUrl: string;
    guidelinesUrl: string;
  };
  categories: SubmissionCategory[];
  formText: {
    informationDescription: string;
    contentHeading: string;
    contentDescription: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    titleLabel: string;
    titlePlaceholder: string;
    uploadDescription: string;
    submitLabel: string;
    submittingLabel: string;
    supportText: string;
  };
}
