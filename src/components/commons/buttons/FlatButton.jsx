import React from "react";
import Button from "@mui/material/Button";
import "./buttons.css";

export default function FlatButton({
  className = "",
  children = "",
  type = "",
}) {
  return (
    <Button
      className="flat"
      style={{ ...className }}
      type={type}
      variant="contained"
    >
      {children}
    </Button>
  );
}
