import PrimaryButton from '../../commons/buttons/PrimaryButton';
import successGif from '../../../assets/success.gif';
import styles from './success.module.css';
import { useNavigate } from 'react-router-dom';

export default function SuccessView({
  mark,
  total,
  submitInd,
  seconds,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.success_wrap}>
      <img alt="gif" src={successGif} className={styles.gif_img} />
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
    </div>
  );
}
