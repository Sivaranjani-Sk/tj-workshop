import logo from '../assets/logo.png';
import styles from './minimal.module.css';

const AuthLayout = (props) => {
  const { children } = props;

  return (
    <div className={styles.maindiv}>
      <div className={styles.logoWrap}>
        <img alt="logo" className={styles.logo} src={logo} />
        <h3>QTech</h3>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
