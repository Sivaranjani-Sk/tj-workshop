import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSubjectQuestionApi } from '../services/questions.js';
import { usePDF } from 'react-to-pdf';
import FlatButton from '../commons/buttons/FlatButton.jsx';
import styles from './questionanswer.module.css';

export default function QuestionAnswer() {
  const [qbList, setQbList] = useState([]);
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  const params = new URLSearchParams(window.location.search);
  const subjectName = params.get('subject');
  const getSubjectQb = async () => {
    const response = await getSubjectQuestionApi(subjectName);
    if (response?.data) {
      setQbList(response?.data?.data?.questions);
    }
  };
  useEffect(() => {
    getSubjectQb();
  }, []);
  return (
    <div className={styles.qawrap_container}>
      <h1>View the Answers</h1>

      <div className={styles.questionans_link_wrap}>
        <Link to="/landingpage">back</Link>
        <div className={styles.pdf_button}>
          <FlatButton onClick={() => toPDF()}>
            Download PDF
          </FlatButton>
        </div>
      </div>

      <div className={styles.questionans_wrap} ref={targetRef}>
        <div className={styles.qasubject}>{subjectName}</div>
        {qbList?.map((data) => (
          <div>
            <div className={styles.question_wrap}>
              {data.id} : {data.question}
            </div>
            <div className={styles.qa_wrap}>
              {data.options.map((op, index) => (
                <span>
                  {index + 1}. {op}
                </span>
              ))}
            </div>
            <div className={styles.correctans_wrap}>
              <p>Answer : {data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
