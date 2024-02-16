import React from 'react';
import { Link } from 'react-router-dom';
import styles from './correctans.module.css';

const Correctanswer = ({ qbList, answersList }) => {
  console.log(qbList, answersList);
  return (
    <div>
      <h1 className={styles.heading_ans}>View the Answers</h1>
      {qbList?.map((data) => (
        <div className={styles.answrap}>
          <div>
            {data.id} : {data.question}
          </div>
          <div className={styles.allanswer}>
            <span style={{}}>
              Correct Answer:{' '}
              <span className={styles.corr_answer}>
                {data.answer}
              </span>
            </span>
            {answersList.map(
              (ans) =>
                ans.id === data.id && (
                  <span>
                    Your Answer:{' '}
                    <span
                      className={
                        data.answer === ans.selectedAnswer
                          ? styles.corr_answer
                          : styles.wrong_answer
                      }
                    >
                      {' '}
                      {ans.selectedAnswer}{' '}
                    </span>
                  </span>
                )
            )}
          </div>
        </div>
      ))}
      <Link className={styles.practice_link} to="/landingpage">
        Practice Again
      </Link>
    </div>
  );
};

export default Correctanswer;
