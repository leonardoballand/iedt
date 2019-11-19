import React from "react";

const styles = {
  container: {
    marginTop: 12,
    marginBottom: 24
  },
  input: {
    height: 24,
    borderColor: "lightgrey",
    borderWidth: 1,
    outline: "none",
    fontSize: 16,
    lineHeight: "calc(16px * 140 / 100)",
    fontWeight: "400",
    borderRadius: 3,
    padding: "3px 6px",
    color: "grey"
  }
};

export default function SearchBar({ value, onChange, ...props }) {
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
