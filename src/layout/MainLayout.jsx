import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./minimal.module.css";
import { useNavigate } from "react-router-dom";
import profile_icon from "../assets/profile-icon.png";

const MainLayout = (props) => {
  const navigate = useNavigate();
  const { children } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={styles.mainContanier}>
      <div className={styles.header}>
        <div className={styles.logoWrap1}>
          <img alt="logo" className={styles.logo} src={logo} />
          <h3>QTech</h3>
        </div>
        <div className={styles.profile}>
          <img
            id="profile-icon"
            src={profile_icon}
            alt="Profile Icon"
            className={styles.profileImg}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

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
    </div>
  );
};

export default MainLayout;
