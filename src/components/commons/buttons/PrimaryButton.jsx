import React from "react";
import Button from "@mui/material/Button";
import "./buttons.css";

export default function PrimaryButton({ children = "", type = "", ...props }) {
  return (
    <Button className="primary" type={type} variant="contained" {...props}>
      {children}
    </Button>
  );
}
