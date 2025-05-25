import { useState } from "react";
import type { FilePondFile } from "filepond";
import { FilePond } from "react-filepond";
import "@google/model-viewer";

export const ModelFileUpload = ({}: {}) => {
  const [files, setFiles] = useState<FilePondFile[]>([]);

  const previewUrl = files.length ? URL.createObjectURL(files[0].file) : "";

  return (
    <div>
      <model-viewer src={previewUrl} camera-controls className="h-72 w-full" />

      <FilePond
        files={files.map((f) => f.file)}
        onupdatefiles={setFiles}
        allowMultiple={false}
        name="files"
      />
    </div>
  );
};
