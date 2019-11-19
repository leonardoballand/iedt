import React from "react";

export default function Checkbox({
  name,
  label,
  type = "checkbox",
  checked,
  onChange,
  ...props
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label>{label}</label>
    </>
  );
}
