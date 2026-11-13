import SubmissionPageClient from "@/components/submission/SubmissionPageClient";
import { ORAL_CONFIG } from "@/features/oral-presentation/oral.config";

export default function OralPresentationPage() {
  return <SubmissionPageClient config={ORAL_CONFIG} />;
}
