"use client";

import { ModelFileUpload } from "@/ui/forms/ModelFileUpload";
import { useForm } from "react-hook-form";

export default function NewAssetPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <div className="w-full mx-auto max-w-3xl p-4">
      <h1>New Asset Page</h1>

      <form
        onSubmit={(e) => {
          handleSubmit((data) => {
            console.log("SUBMIT DATA", data);
          })(e).catch((err) => console.error(err));
        }}
      >
        <ModelFileUpload />

        <div className="flex flex-row justify-end mt-8">
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}
