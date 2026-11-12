
"use client";

import { useRef } from "react";
import { FileCheck2, FileUp, FileWarning, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EPOSTER_FILE_CONFIG } from "@/features/eposter/eposter.constants";

interface EposterFileUploadProps {
  value?: File;
  onChange: (file: File | undefined) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
}

const formatFileSize = (bytes: number) => {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

export default function EposterFileUpload({
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
}: EposterFileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file?: File) => {
    if (!file) return;

    const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;

    if (!EPOSTER_FILE_CONFIG.allowedExtensions.includes(
      extension as (typeof EPOSTER_FILE_CONFIG.allowedExtensions)[number]
    )) {
      onChange(undefined);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    if (!EPOSTER_FILE_CONFIG.allowedMimeTypes.includes(
      file.type as (typeof EPOSTER_FILE_CONFIG.allowedMimeTypes)[number]
    )) {
      onChange(undefined);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    if (file.size > EPOSTER_FILE_CONFIG.maxSize || file.size === 0) {
      onChange(undefined);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    onChange(file);
  };

  const removeFile = () => {
    onChange(undefined);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <div
        className={`relative rounded-xl border-2 border-dashed p-5 transition-colors sm:p-7 ${
          error
            ? "border-destructive/60 bg-destructive/5"
            : value
              ? "border-emerald-300 bg-emerald-50/50"
              : "border-border bg-muted/20 hover:border-primary/50 hover:bg-muted/40"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={EPOSTER_FILE_CONFIG.accept}
          disabled={disabled}
          onBlur={onBlur}
          onChange={(event) => handleFileChange(event.target.files?.[0])}
          className="sr-only"
          id="eposter-file-upload"
        />

        {value ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <FileCheck2 className="size-6" />
            </div>

            <div className="min-w-0 max-w-full">
              <p className="break-all text-sm font-semibold text-foreground">
                {value.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {formatFileSize(value.size)}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                disabled={disabled}
                onClick={() => inputRef.current?.click()}
              >
                Replace file
              </Button>

              <Button
                type="button"
                size="sm"
                variant="ghost"
                disabled={disabled}
                onClick={removeFile}
                className="text-destructive hover:text-destructive"
              >
                <X className="mr-1 size-4" />
                Remove
              </Button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="eposter-file-upload"
            className={`flex flex-col items-center text-center ${
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileUp className="size-7" />
            </div>

            <p className="text-sm font-semibold text-foreground">
              Click to upload your E-Poster
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              PowerPoint presentation files only
            </p>

            <span className="mt-4 inline-flex rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium">
              Browse files
            </span>
          </label>
        )}
      </div>

      <div className="flex items-start gap-2 text-xs text-muted-foreground">
        <FileWarning className="mt-0.5 size-4 shrink-0" />
        <p>
          Accepted formats: PPT, PPTX. Maximum file size:{" "}
          {EPOSTER_FILE_CONFIG.maxSizeLabel}.
        </p>
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
