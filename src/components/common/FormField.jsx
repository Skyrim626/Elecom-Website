import { Field, Input, Label } from "@headlessui/react";
import React from "react";

const FormField = ({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  required = false,
}) => {
  return (
    <Field>
      <Label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </Label>
      <Input
        type={type || "text"}
        id={id && htmlFor}
        className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder || "Enter placeholder"}
        required={required}
      />
    </Field>
  );
};

export default FormField;
