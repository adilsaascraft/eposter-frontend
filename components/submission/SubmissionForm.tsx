"use client";

import { Controller, useForm } from "react-hook-form";
import type { ElementType } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  LoaderCircle,
  Mail,
  Phone,
  Send,
  UserRound,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SubmissionFileUpload from "./SubmissionFileUpload";
import { SUBMISSION_FORM_DEFAULT_VALUES } from "@/features/submission/submission.constants";
import { submissionSchema } from "@/features/submission/submission.schema";
import type { SubmissionConfig, SubmissionFormValues } from "@/features/submission/submission.types";
import type { DefaultValues } from "react-hook-form";

interface SubmissionFormProps {
  config: SubmissionConfig;
  onSubmit: (values: SubmissionFormValues) => Promise<void> | void;
  isSubmitting?: boolean;
}

function SectionHeading({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: ElementType;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-800 ring-1 ring-teal-100">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700">Section {number}</span>
          <span className="h-px w-8 bg-teal-200" />
        </div>
        <h3 className="mt-1 text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p role="alert" className="mt-1.5 text-xs font-semibold text-rose-700">{message}</p>;
}

export default function SubmissionForm({
  config,
  onSubmit,
  isSubmitting = false,
}: SubmissionFormProps) {
  const form = useForm<SubmissionFormValues>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      ...SUBMISSION_FORM_DEFAULT_VALUES,
      uploadPoster: undefined,
    } as DefaultValues<SubmissionFormValues>,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    control,
    handleSubmit,
    trigger,
    setError,
    clearErrors,
    formState: { errors },
  } = form;

  // Watch values for the live completion indicator and ensure the component
  // responds immediately as users edit fields or select/remove a file.
  const watched = form.watch();
  const requiredValues = [
    watched.presenterName,
    watched.email,
    watched.mobile,
    watched.abstractNumber,
    watched.posterType,
    watched.posterTitle,
    watched.uploadPoster,
  ];
  const completedCount = requiredValues.filter((value) =>
    value instanceof File ? value.size > 0 : typeof value === "string" && value.trim().length > 0
  ).length;

  const inputClassName = "h-12 rounded-xl border-slate-200 bg-white px-4 text-sm shadow-sm transition placeholder:text-slate-400 focus-visible:border-teal-500 focus-visible:ring-4 focus-visible:ring-teal-500/10";
  const labelClassName = "text-xs font-bold uppercase tracking-[0.08em] text-slate-700";

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_18px_55px_-35px_rgba(15,45,75,0.35)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-white via-cyan-50/50 to-teal-50/60 px-5 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-700">
              <FileText className="size-3.5" />
              Official submission form
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Submit Your {config.shortTitle}</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Share your research with the AROICON 2026 scientific community. Complete each section below.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-teal-100 bg-white/80 p-4 shadow-sm sm:w-44">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Form progress</span>
              <span className="text-teal-800">{completedCount}/7</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 transition-all duration-500"
                style={{ width: `${(completedCount / 7) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-[10px] text-slate-500">Required details completed</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-0">
        <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
          <SectionHeading
            number="01"
            title="Presenter Information"
            description={config.formText.informationDescription}
            icon={UserRound}
          />

          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="presenterName" className={labelClassName}>Presenter Name <span className="text-rose-600">*</span></Label>
              <Input id="presenterName" placeholder="Enter full name" autoComplete="name" aria-invalid={!!errors.presenterName} disabled={isSubmitting} className={inputClassName} {...register("presenterName")} />
              <FieldError message={errors.presenterName?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className={labelClassName}>Email Address <span className="text-rose-600">*</span></Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" aria-invalid={!!errors.email} disabled={isSubmitting} className={`${inputClassName} pl-11`} {...register("email")} />
              </div>
              <FieldError message={errors.email?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className={labelClassName}>Mobile Number <span className="text-rose-600">*</span></Label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input id="mobile" type="tel" placeholder="Enter mobile number" autoComplete="tel" aria-invalid={!!errors.mobile} disabled={isSubmitting} className={`${inputClassName} pl-11`} {...register("mobile")} />
              </div>
              <FieldError message={errors.mobile?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coAuthor" className={labelClassName}>
                Co-Author(s) <span className="normal-case tracking-normal text-slate-400">(Optional)</span>
              </Label>
              <div className="relative">
                <Users className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input id="coAuthor" placeholder="Enter co-author names" aria-invalid={!!errors.coAuthor} disabled={isSubmitting} className={`${inputClassName} pl-11`} {...register("coAuthor")} />
              </div>
              <FieldError message={errors.coAuthor?.message} />
            </div>
          </div>
        </div>

        <div className="mx-5 border-t border-dashed border-slate-200 sm:mx-8" />

        <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
          <SectionHeading
            number="02"
            title={config.formText.contentHeading}
            description={config.formText.contentDescription}
            icon={FileText}
          />

          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="abstractNumber" className={labelClassName}>Abstract Number <span className="text-rose-600">*</span></Label>
              <Input id="abstractNumber" placeholder="e.g. AROICON-2026-001" aria-invalid={!!errors.abstractNumber} disabled={isSubmitting} className={inputClassName} {...register("abstractNumber")} />
              <FieldError message={errors.abstractNumber?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="posterType" className={labelClassName}>{config.formText.categoryLabel} <span className="text-rose-600">*</span></Label>
              <Controller
                name="posterType"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value || ""}
                    onValueChange={(value) => {
                      field.onChange(value);
                      void trigger("posterType");
                    }}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger id="posterType" className="h-12 w-full rounded-xl border-slate-200 bg-white px-4 text-sm shadow-sm focus:ring-4 focus:ring-teal-500/10" aria-invalid={!!errors.posterType} onBlur={field.onBlur}>
                      <SelectValue placeholder={config.formText.categoryPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {config.categories.map((type) => (
                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.posterType?.message} />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="posterTitle" className={labelClassName}>{config.formText.titleLabel} <span className="text-rose-600">*</span></Label>
              <Textarea id="posterTitle" placeholder={config.formText.titlePlaceholder} rows={3} aria-invalid={!!errors.posterTitle} disabled={isSubmitting} className="min-h-32 resize-y rounded-xl border-slate-200 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus-visible:border-teal-500 focus-visible:ring-4 focus-visible:ring-teal-500/10" {...register("posterTitle")} />
              <FieldError message={errors.posterTitle?.message} />
            </div>
          </div>
        </div>

        <div className="mx-5 border-t border-dashed border-slate-200 sm:mx-8" />

        <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
          <SectionHeading
            number="03"
            title={`Upload Your ${config.shortTitle}`}
            description={config.formText.uploadDescription}
            icon={FileText}
          />
          <Controller
            name="uploadPoster"
            control={control}
            render={({ field }) => (
              <SubmissionFileUpload
                value={field.value}
                submissionTitle={config.shortTitle}
                onChange={(file) => {
                  field.onChange(file);
                  clearErrors("uploadPoster");
                  void trigger("uploadPoster");
                }}
                onInvalid={(message) => {
                  if (message) {
                    setError("uploadPoster", { type: "manual", message });
                  } else {
                    clearErrors("uploadPoster");
                  }
                }}
                onBlur={field.onBlur}
                error={errors.uploadPoster?.message}
                disabled={isSubmitting}
              />
            )}
          />
        </div>

        <div className="border-t border-slate-100 bg-slate-50/80 px-5 py-7 text-center sm:px-8">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-13 w-full rounded-xl bg-gradient-to-r from-[#0f766e] to-[#0e7490] px-8 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition-all hover:-translate-y-0.5 hover:from-[#115e59] hover:to-[#155e75] hover:shadow-xl sm:w-auto sm:min-w-64"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="mr-2 size-4 animate-spin" />
                {config.formText.submittingLabel}
              </>
            ) : (
              <>
                <Send className="mr-2 size-4" />
                {config.formText.submitLabel}
                <ArrowRight className="ml-2 size-4" />
              </>
            )}
          </Button>
          <p className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 text-xs leading-5 text-slate-500">
            <CheckCircle2 className="size-4 shrink-0 text-teal-700" />
            Please review your details carefully before submission.
          </p>
        </div>
      </form>
    </section>
  );
}
