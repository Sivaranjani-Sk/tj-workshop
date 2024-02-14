import React from "react";
import Button from "@mui/material/Button";
import "./buttons.css";

export default function FlatButton({ children = "", type = "", ...props }) {
  return (
    <Button className="flat" color="secondary" type={type} {...props}>
      {children}
    </Button>
  );
}
