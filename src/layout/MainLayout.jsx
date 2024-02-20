import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/logo.png';
import profile_icon from '../assets/profile-icon.png';
import email from '../assets/email.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import whatsapp from '../assets/icon_whatsapp.png';
import styles from './minimal.module.css';

const MainLayout = (props) => {
  const navigate = useNavigate();
  const { children } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={styles.mainContanier}>
      <div className={styles.header}>
        <div className={styles.logoWrap1}>
          <img alt="logo" className={styles.logo} src={logo} />
          <h3>QTech</h3>
        </div>
        <div className={styles.profile}>
          <Tooltip title={`Logout`} arrow placement="top">
            <img
              id="profile-icon"
              src={profile_icon}
              alt="Profile Icon"
              className={styles.profileImg}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </Tooltip>

          <div className={styles.dropdown}>
            {dropdownOpen && (
              <div className={styles.dropdown_content}>
                <p onClick={() => signOut()}> - Log out</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
      <div className={styles.footer}>
        <div className={styles.footer_sec}>
          <div>Call: 9845673202</div>
          <div>E.mail: qtechlearn@gmail.com</div>
          <div>&copy; {new Date().getFullYear()} Qtech.Pvt.Limit</div>
          <div className={styles.icon_ovarall}>
            {' '}
            <img
              alt="email"
              title="email"
              className={styles.foot_icon}
              src={email}
            />
            <img
              alt="fb"
              title="fb"
              className={styles.foot_icon}
              src={facebook}
            />
            <img
              alt="insta"
              title="insta"
              className={styles.foot_icon}
              src={insta}
            />
            <img
              alt="whatsapp"
              title="whatsapp"
              className={styles.foot_icon}
              src={whatsapp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
