
export interface EposterFormValues {
  presenterName: string;
  email: string;
  mobile: string;
  coAuthor: string;
  abstractNumber: string;
  posterType: string;
  posterTitle: string;
  uploadPoster: File;
}

export interface EposterSubmissionResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    presenterName: string;
    abstractNumber: string;
    posterTitle: string;
    isPublished: boolean;
    emailNotification: EposterNotificationStatus;
    whatsappNotification: EposterNotificationStatus;
    createdAt: string;
  };
}

export interface EposterNotificationStatus {
  status: "PENDING" | "SENT" | "FAILED";
  sentAt: string | null;
  error: string | null;
}

export interface EposterApiError {
  success: false;
  message: string;
}

export type EposterPosterType = {
  label: string;
  value: string;
};
