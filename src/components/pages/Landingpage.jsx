import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlatButton from '../commons/buttons/FlatButton.jsx';
import SecondaryButton from '../commons/buttons/SecondaryButton.jsx';
import styles from './landingpage.module.css';

const data = [
  {
    exampaper: 'NEET-2023 ( Chemistry )',
    subject: 'chemistry',
    question: '10',
    timing: '10 minutes',
    button1: 'Attempt Now - Practice Mode',
    button2: 'Attempt Now - Test Mode',
  },
  {
    exampaper: 'NEET-2023 ( Physics )',
    subject: 'physics',
    question: '10',
    timing: '10 minutes',
    button1: 'Attempt Now - Practice Mode',
    button2: 'Attempt Now - Test Mode',
  },
  {
    exampaper: 'NEET-2023 ( Botany )',
    subject: 'botany',
    question: '10',
    timing: '10 minutes',
    button1: 'Attempt Now - Practice Mode',
    button2: 'Attempt Now - Test Mode',
  },
  {
    exampaper: 'NEET-2023 ( Zoology )',
    subject: 'zoology',
    question: '10',
    timing: '10 minutes',
    button1: 'Attempt Now - Practice Mode',
    button2: 'Attempt Now - Test Mode',
  },
];

export default function Landingpage() {
  const navigate = useNavigate();
  const [showQa, setShowQa] = useState(false);

  return (
    <div className={styles.landingpage}>
      <h1>Welcome to QTech </h1>
      <h4>Practice questions to groom your brain !!</h4>
      <div className={styles.main_wrap}>
        {' '}
        {data.map((data) => (
          <div className={styles.overall_wrap}>
            <div className={styles.box_content}>
              <p className={styles.box_content1}> {data.exampaper}</p>
              <span> Question:{data.question}</span>
              <div> Time:{data.timing}</div>
            </div>
            <div className={styles.button_div}>
              <FlatButton
                onClick={() =>
                  navigate(`/dashboard?subject=${data.subject}`)
                }
              >
                {data.button1}
              </FlatButton>{' '}
            </div>
            <FlatButton
              onClick={() =>
                navigate(`/dashboard?subject=${data.subject}`)
              }
            >
              {data.button2}
            </FlatButton>
            <div className={styles.pdf_button_div}>
              <SecondaryButton
                onClick={() => {
                  navigate(
                    `/question-answer?subject=${data.subject}`
                  );
                }}
              >
                Download PDF
              </SecondaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
