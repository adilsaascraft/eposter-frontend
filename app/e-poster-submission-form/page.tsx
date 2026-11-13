import SubmissionPageClient from "@/components/submission/SubmissionPageClient";
import { EPOSTER_CONFIG } from "@/features/eposter/eposter.config";

export default function EposterPage() {
  return <SubmissionPageClient config={EPOSTER_CONFIG} />;
}
