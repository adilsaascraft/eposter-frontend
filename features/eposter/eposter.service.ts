
import {
  EPOSTER_API_ENDPOINT,
} from "./eposter.constants";

import type {
  EposterFormValues,
  EposterSubmissionResponse,
  EposterApiError,
} from "./eposter.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getApiUrl = () => {
  if (!API_BASE_URL) {
    throw new Error(
      "Backend API URL is not configured. Please set NEXT_PUBLIC_API_URL."
    );
  }

  return `${API_BASE_URL.replace(/\/+$/, "")}${EPOSTER_API_ENDPOINT}`;
};

export const submitEposter = async (
  values: EposterFormValues
): Promise<EposterSubmissionResponse> => {
  const formData = new FormData();

  formData.append("presenterName", values.presenterName.trim());
  formData.append("email", values.email.trim());
  formData.append("mobile", values.mobile.trim());
  formData.append("coAuthor", values.coAuthor.trim());
  formData.append("abstractNumber", values.abstractNumber.trim());
  formData.append("posterType", values.posterType.trim());
  formData.append("posterTitle", values.posterTitle.trim());
  formData.append("uploadPoster", values.uploadPoster);

  const response = await fetch(getApiUrl(), {
    method: "POST",
    body: formData,
  });

  let result: EposterSubmissionResponse | EposterApiError;

  try {
    result = await response.json();
  } catch {
    throw new Error("The server returned an invalid response.");
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Unable to submit your E-Poster."
    );
  }

  return result as EposterSubmissionResponse;
};
