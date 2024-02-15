import React from 'react';
import Button from '@mui/material/Button';
import styles from './buttons.css';

export default function FlatButton({
  children = '',
  type = '',
  onClick,
}) {
  return (
    <Button
      className={styles.flat}
      color="secondary"
      variant="contained"
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
}
