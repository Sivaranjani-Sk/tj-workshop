import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SecondaryButton from '../../commons/buttons/SecondaryButton';
import PrimaryButton from '../../commons/buttons/PrimaryButton';
import successGif from '../../../assets/success.gif';
import Correctanswer from './Correctanswer';
import styles from './success.module.css';

export default function SuccessView({
  mark,
  total,
  submitInd,
  seconds,
  qbList,
  answersList,
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className={styles.success_wrap}>
      {!show ? (
        <>
          <img
            alt="gif"
            src={successGif}
            className={styles.gif_img}
          />
          {seconds == 0 && !submitInd && (
            <p className={styles.timeout}>TimeOut!!</p>
          )}
          <h2>Thank you for participating the QTech!!</h2>
          <h2>
            Here is your{' '}
            {`${seconds == 0 && !submitInd ? 'current' : 'overall'}`}{' '}
            score :{' '}
            <span className={styles.mark_wrap}>
              {mark} / {total}
            </span>
          </h2>
          <PrimaryButton onClick={() => navigate('/landingpage')}>
            {' '}
            Practice again
          </PrimaryButton>
          <SecondaryButton onClick={() => setShow(true)}>
            {' '}
            Show Correct answer
          </SecondaryButton>
        </>
      ) : (
        <Correctanswer qbList={qbList} answersList={answersList} />
      )}
    </div>
  );
}
