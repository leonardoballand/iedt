import React, { useState } from "react";

import useSelectAll from "./hooks/useSelectAll";

import Checkbox from "./components/Checkbox";
import CheckboxList from "./components/CheckboxList";

import "./App.css";

// Fake data
const data = [
  {
    id: 0,
    label: "Checkbox 1",
    name: "checkbox-1",
    isActive: true
  },
  {
    id: 1,
    label: "Checkbox 2",
    name: "checkbox-2",
    isActive: false
  },
  {
    id: 2,
    label: "Checkbox 3",
    name: "checkbox-3",
    isActive: false
  }
];

function App() {
  const [checkboxes, setCheckboxes] = useState(data);
  const { selectAll } = useSelectAll(checkboxes, "isActive");

  // update checkboxes when selectAll option changes
  function onToggleSelectAll() {
    setCheckboxes(prevState =>
      prevState.map(item => ({ ...item, isActive: !selectAll }))
    );
  }

  // update checkboxes when checkbox option changes
  function onToggleCheckbox({ target: { name } }) {
    setCheckboxes(prevState =>
      prevState.map(item =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  return (
    <div className="App">
      <Checkbox
        label={"Select all"}
        name="select-all"
        onChange={onToggleSelectAll}
        checked={selectAll}
      />

      <CheckboxList
        items={checkboxes}
        selectAll={selectAll}
        onToggleCheckbox={onToggleCheckbox}
      />
    </div>
  );
}

export default App;
