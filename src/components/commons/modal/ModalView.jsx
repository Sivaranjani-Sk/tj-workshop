import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PrimaryButton from "../buttons/PrimaryButton";
import styles from "./modal.module.css";
import SecondaryButton from "../buttons/SecondaryButton";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 200,
  borderRadius: "8px",
  background: "#fff",
  border: "12px solid rgba(61, 189, 230, 1) 0%",
  boxShadow: 24,
  p: 4,
};

export default function ModalView({ open, onClose, setSuccess }) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.overall_modal}
    >
      <Box sx={boxStyle}>
        <h3>Ready to Submit ?</h3>
        <h5>
          Please make sure you have answered all the questions before submit!
        </h5>
        <div className={styles.btn_wrap}>
          <SecondaryButton
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              setSuccess();
            }}
          >
            Submit
          </PrimaryButton>
        </div>
      </Box>
    </Modal>
  );
}
