import React from 'react';
import Button from '@mui/material/Button';
import './buttons.css';

export default function SecondaryButton({
  children = '',
  type = '',
  onClick,
  disabled = false,
}) {
  return (
    <Button
      className="secondary"
      color="secondary"
      type={type}
      variant="outlined"
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
