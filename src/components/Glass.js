import React from "react";
import "./glass.css";

export default function Glass({ children, noPadding, style }) {
  return (
    <div
      className="glassContainer"
      style={{ padding: noPadding && 0, ...style }}
    >
      {children}
    </div>
  );
}
