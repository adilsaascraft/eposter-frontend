import type { SubmissionApiError, SubmissionConfig, SubmissionFormValues, SubmissionResponse } from "./submission.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function submitSubmission(
  values: SubmissionFormValues,
  config: SubmissionConfig,
): Promise<SubmissionResponse> {
  if (!API_BASE_URL) {
    throw new Error("Backend API URL is not configured. Please set NEXT_PUBLIC_API_URL.");
  }

  const formData = new FormData();
  formData.append("presenterName", values.presenterName.trim());
  formData.append("email", values.email.trim());
  formData.append("mobile", values.mobile.trim());
  formData.append("coAuthor", values.coAuthor.trim());
  formData.append("abstractNumber", values.abstractNumber.trim());
  formData.append("posterType", values.posterType.trim());
  formData.append("posterTitle", values.posterTitle.trim());
  formData.append("uploadPoster", values.uploadPoster);

  const endpoint = `${API_BASE_URL.replace(/\/+$/, "")}${config.apiEndpoint}`;
  const response = await fetch(endpoint, { method: "POST", body: formData });

  let result: SubmissionResponse | SubmissionApiError;
  try {
    result = await response.json();
  } catch {
    throw new Error("The server returned an invalid response.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Unable to submit your ${config.shortTitle}.`);
  }

  return result as SubmissionResponse;
}
