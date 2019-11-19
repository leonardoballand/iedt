import React from "react";

import Checkbox from "../Checkbox";

export default function CheckboxList({
  items,
  isAllSelected,
  onToggleCheckbox
}) {
  return (
    <>
      {items.map(item => (
        <Checkbox
          key={`checkboxes-${item.id}`}
          label={item.label}
          name={item.name}
          checked={isAllSelected || item.isActive}
          onChange={onToggleCheckbox}
          value={item.isActive}
        />
      ))}
    </>
  );
}
