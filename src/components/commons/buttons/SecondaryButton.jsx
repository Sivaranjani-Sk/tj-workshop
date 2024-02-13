import React from "react";
import Button from "@mui/material/Button";
import "./buttons.css";

export default function SecondaryButton({
  className = "",
  children = "",
  type = "",
}) {
  return (
    <Button
      className="secondary"
      style={{ ...className }}
      type={type}
      variant="outlined"
    >
      {children}
    </Button>
  );
}
