import PrimaryButton from "../../commons/buttons/PrimaryButton";
import successGif from "../../../assets/success.gif";
import styles from "./success.module.css";

export default function SuccessView({ mark, total }) {
  return (
    <div className={styles.success_wrap}>
      <img alt="gif" src={successGif} className={styles.gif_img} />
      <h2>Thank you for participating the QTech!!</h2>
      <h2>
        Here is your overall score :{" "}
        <span className={styles.mark_wrap}>
          {mark} / {total}
        </span>
      </h2>
      <PrimaryButton onClick={() => window.location.reload()}>
        {" "}
        Practice again
      </PrimaryButton>
    </div>
  );
}
