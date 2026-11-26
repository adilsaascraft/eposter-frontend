import SubmissionPageClient from "@/components/submission/SubmissionPageClient";
import { FACULTY_CONFIG } from "@/features/faculty/faculty.config";

export default function FacultyPresentationPage() {
  return <SubmissionPageClient config={FACULTY_CONFIG} />;
}
