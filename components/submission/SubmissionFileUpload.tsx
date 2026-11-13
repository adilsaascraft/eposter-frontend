"use client";

import { useRef } from "react";
import { CheckCircle2, FileCheck2, FileUp, FileWarning, RefreshCw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUBMISSION_FILE_CONFIG } from "@/features/submission/submission.constants";

interface Props {
  value?: File;
  onChange: (file: File | undefined) => void;
  onBlur?: () => void;
  onInvalid?: (message: string) => void;
  error?: string;
  disabled?: boolean;
  submissionTitle: string;
}

const formatFileSize = (bytes: number) =>
  bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

export default function SubmissionFileUpload({ value, onChange, onBlur, onInvalid, error, disabled = false, submissionTitle }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file?: File) => {
    if (!file) return;
    const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
    if (!SUBMISSION_FILE_CONFIG.allowedExtensions.includes(extension as (typeof SUBMISSION_FILE_CONFIG.allowedExtensions)[number])) {
      onChange(undefined);
      onInvalid?.("Please select a PowerPoint file (.ppt or .pptx).");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    if (file.type && !SUBMISSION_FILE_CONFIG.allowedMimeTypes.includes(file.type as (typeof SUBMISSION_FILE_CONFIG.allowedMimeTypes)[number])) {
      onChange(undefined);
      onInvalid?.("The selected file does not have a supported PowerPoint file type.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    if (file.size > SUBMISSION_FILE_CONFIG.maxSize || file.size === 0) {
      onChange(undefined);
      onInvalid?.(file.size === 0 ? "The selected file is empty. Please choose another file." : `The file must not exceed ${SUBMISSION_FILE_CONFIG.maxSizeLabel}.`);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    onInvalid?.("");
    onChange(file);
  };

  const removeFile = () => {
    onChange(undefined);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-3">
      <div className={`eposter-upload-zone relative overflow-hidden rounded-2xl border-2 border-dashed p-5 transition-all duration-300 sm:p-8 ${error ? "border-rose-300 bg-rose-50/70" : value ? "border-emerald-300 bg-emerald-50/70" : "border-slate-300 bg-gradient-to-br from-slate-50 to-cyan-50/60 hover:border-teal-400 hover:bg-teal-50/60"}`}>
        <input ref={inputRef} type="file" accept={SUBMISSION_FILE_CONFIG.accept} disabled={disabled} onBlur={onBlur} onChange={(event) => handleFileChange(event.target.files?.[0])} className="sr-only" id={`${submissionTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-file-upload`} aria-invalid={!!error} aria-describedby={error ? "submission-upload-error" : "submission-upload-help"} />
        {value ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 ring-8 ring-emerald-50"><FileCheck2 className="size-8" /></div>
            <div className="min-w-0 max-w-full">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700"><CheckCircle2 className="size-4" /> File ready to submit</div>
              <p className="mt-2 break-all text-sm font-bold text-slate-900">{value.name}</p>
              <p className="mt-1 text-xs text-slate-500">{formatFileSize(value.size)}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button type="button" variant="outline" disabled={disabled} onClick={() => inputRef.current?.click()} className="h-10 rounded-xl"><RefreshCw className="mr-2 size-4" />Replace file</Button>
              <Button type="button" variant="ghost" disabled={disabled} onClick={removeFile} className="h-10 rounded-xl text-rose-700 hover:bg-rose-50 hover:text-rose-800"><Trash2 className="mr-2 size-4" />Remove</Button>
            </div>
          </div>
        ) : (
          <label htmlFor={`${submissionTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-file-upload`} className={`flex flex-col items-center text-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
            <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-md shadow-slate-900/5 ring-1 ring-slate-200"><FileUp className="size-8" /></div>
            <p className="text-base font-bold text-slate-900">Choose your {submissionTitle} presentation</p>
            <p className="mt-2 text-sm text-slate-600">Browse your device to select a PowerPoint file.</p>
            <span className="mt-5 inline-flex h-11 items-center rounded-xl bg-teal-700 px-6 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800">Browse PowerPoint file</span>
          </label>
        )}
      </div>
      <div id="submission-upload-help" className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-3 text-xs leading-5 text-slate-600">
        <FileWarning className="mt-0.5 size-4 shrink-0 text-teal-700" />
        <p>Accepted formats: <strong>PPT, PPTX</strong>. Maximum file size: <strong>{SUBMISSION_FILE_CONFIG.maxSizeLabel}</strong>.</p>
      </div>
      {error && <p id="submission-upload-error" role="alert" className="flex items-center gap-2 text-sm font-semibold text-rose-700"><FileWarning className="size-4 shrink-0" />{error}</p>}
    </div>
  );
}
