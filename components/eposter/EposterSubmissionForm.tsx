
"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  LoaderCircle,
  Send,
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

import EposterFileUpload from "./EposterFileUpload";

import {
  EPOSTER_FORM_DEFAULT_VALUES,
  EPOSTER_TYPES,
} from "@/features/eposter/eposter.constants";

import { eposterSchema } from "@/features/eposter/eposter.schema";

import type { EposterFormValues } from "@/features/eposter/eposter.types";
import type { DefaultValues } from "react-hook-form";

interface EposterSubmissionFormProps {
  onSubmit: (values: EposterFormValues) => Promise<void> | void;
  isSubmitting?: boolean;
}

export default function EposterSubmissionForm({
  onSubmit,
  isSubmitting = false,
}: EposterSubmissionFormProps) {
  const form = useForm<EposterFormValues>({
    resolver: zodResolver(eposterSchema),
    defaultValues: {
      ...EPOSTER_FORM_DEFAULT_VALUES,
      uploadPoster: undefined,
    } as DefaultValues<EposterFormValues>,
    mode: "onBlur",
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-8">
      <div className="mb-7">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1 rounded-full bg-primary" />
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            E-Poster Submission
          </h2>
        </div>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Please complete the information below and upload your
          PowerPoint presentation to submit your E-Poster.
        </p>

        <p className="mt-3 text-xs text-muted-foreground">
          Fields marked with <span className="text-destructive">*</span> are required.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-7"
      >
        {/* Presenter Information */}
        <div className="space-y-5">
          <div>
            <h3 className="text-base font-semibold">
              Presenter Information
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Enter the primary presenter's contact information.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="presenterName">
                Presenter Name <span className="text-destructive">*</span>
              </Label>

              <Input
                id="presenterName"
                placeholder="Enter full name"
                autoComplete="name"
                aria-invalid={!!errors.presenterName}
                disabled={isSubmitting}
                {...register("presenterName")}
              />

              {errors.presenterName && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.presenterName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-destructive">*</span>
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                disabled={isSubmitting}
                {...register("email")}
              />

              {errors.email && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">
                Mobile Number <span className="text-destructive">*</span>
              </Label>

              <Input
                id="mobile"
                type="tel"
                placeholder="Enter mobile number"
                autoComplete="tel"
                aria-invalid={!!errors.mobile}
                disabled={isSubmitting}
                {...register("mobile")}
              />

              {errors.mobile && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="coAuthor">
                Co-Author(s)
                <span className="ml-1 text-xs font-normal text-muted-foreground">
                  (Optional)
                </span>
              </Label>

              <Input
                id="coAuthor"
                placeholder="Enter co-author names"
                aria-invalid={!!errors.coAuthor}
                disabled={isSubmitting}
                {...register("coAuthor")}
              />

              {errors.coAuthor && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.coAuthor.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t" />

        {/* Poster Information */}
        <div className="space-y-5">
          <div>
            <h3 className="text-base font-semibold">
              Poster Information
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Provide the abstract and presentation details.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="abstractNumber">
                Abstract Number <span className="text-destructive">*</span>
              </Label>

              <Input
                id="abstractNumber"
                placeholder="Enter abstract number"
                aria-invalid={!!errors.abstractNumber}
                disabled={isSubmitting}
                {...register("abstractNumber")}
              />

              {errors.abstractNumber && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.abstractNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="posterType">
                Poster Type <span className="text-destructive">*</span>
              </Label>

              <Controller
                name="posterType"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value || ""}
                    onValueChange={field.onChange}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger
                      id="posterType"
                      className="w-full"
                      aria-invalid={!!errors.posterType}
                      onBlur={field.onBlur}
                    >
                      <SelectValue placeholder="Select poster type" />
                    </SelectTrigger>

                    <SelectContent>
                      {EPOSTER_TYPES.map((type) => (
                        <SelectItem
                          key={type.value}
                          value={type.value}
                        >
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.posterType && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.posterType.message}
                </p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="posterTitle">
                Poster Title <span className="text-destructive">*</span>
              </Label>

              <Textarea
                id="posterTitle"
                placeholder="Enter your complete E-Poster title"
                rows={3}
                aria-invalid={!!errors.posterTitle}
                disabled={isSubmitting}
                {...register("posterTitle")}
              />

              {errors.posterTitle && (
                <p role="alert" className="text-xs text-destructive">
                  {errors.posterTitle.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t" />

        {/* Poster Upload */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold">
              Upload E-Poster <span className="text-destructive">*</span>
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Upload your final presentation in PowerPoint format.
            </p>
          </div>

          <Controller
            name="uploadPoster"
            control={control}
            render={({ field }) => (
              <EposterFileUpload
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.uploadPoster?.message}
                disabled={isSubmitting}
              />
            )}
          />
        </div>

        {/* Submit */}
        
<div className="border-t pt-5 flex flex-col items-center text-center">

  <Button
    type="submit"
    size="lg"
    disabled={isSubmitting}
    className="w-full sm:w-auto sm:min-w-56 bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
  >
    {isSubmitting ? (
      <>
        <LoaderCircle className="mr-2 size-4 animate-spin" />
        Submitting E-Poster...
      </>
    ) : (
      <>
        <Send className="mr-2 size-4" />
        Submit E-Poster
        <ArrowRight className="ml-2 size-4" />
      </>
    )}
  </Button>

  <p className="mt-3 text-xs leading-5 text-muted-foreground max-w-md">
    Please verify all information before submitting.
    Your submission will be processed after you click Submit E-Poster.
  </p>

</div>

      </form>
    </section>
  );
}
