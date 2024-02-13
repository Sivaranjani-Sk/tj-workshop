import React from "react";
import Button from "@mui/material/Button";
import "./buttons.css";

export default function PrimaryButton({
  className = "",
  children = "",
  type = "",
}) {
  return (
    <Button
      className="primary"
      style={{ ...className }}
      type={type}
      variant="contained"
    >
      {children}
    </Button>
  );
}
