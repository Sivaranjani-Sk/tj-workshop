import logo from "../assets/logo.png";
import styles from "./minimal.module.css";

const NotFound = () => {
  return (
    <div>
      <img alt="logo" className={styles.logo} src={logo} />
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFound;
