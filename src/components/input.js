import { useState } from "react";

export default function Input({ name = "", id, submit, cancel }) {
  const [value, setValue] = useState(name);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "10px",
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        style={{
          padding: "8px 12px",
          fontSize: "14px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          outline: "none",
          width: "200px",
          transition: "border 0.2s ease-in-out",
        }}
        onFocus={(e) => e.target.style.border = "1px solid #007BFF"}
        onBlur={(e) => e.target.style.border = "1px solid #ddd"}
      />
      <span
        onClick={() => {
          submit(id, value);
          cancel();
        }}
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "green",
        }}
      >
        ✅
      </span>
      <span
        onClick={cancel}
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "red",
        }}
      >
        ❌
      </span>
    </div>
  );
}
