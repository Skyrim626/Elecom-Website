import { Field, Input, Label } from "@headlessui/react";
import React from "react";

const LogoField = ({
  title = "Upload Organization Logo",
  type = "file",
  name = "",
  onChange,
  accept = "image/png, image/jpeg",
  maxSize = "20MB",
}) => {
  return (
    <>
      {/* Upload Organization Logo */}
      <Field>
        <Label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {title}
        </Label>
      </Field>

      {/* File Upload Button */}
      <div className="relative flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:bg-gray-50 transition-all">
        <Input
          type={type}
          name={name}
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept={accept}
        />
        <div className="text-center text-gray-600">
          <p className="text-base font-semibold">Click or Drag to Upload</p>
          <p className="text-sm">PNG, JPEG (Max size: {maxSize})</p>
        </div>
      </div>
    </>
  );
};

export default LogoField;
