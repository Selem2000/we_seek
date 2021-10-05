import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#333",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#fff",
  fontWeight: "900",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export default function Result({ points }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          border: "2px solid",
          fontWeight: "900",
          position: "absolute",
          left: "75%",
          top: "60%",
        }}
        onClick={handleOpen}
      >
        Finish
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 style={{ margin: "5px" }}>
            {points <= 5 ? "Sorry!" : "Congratulation"}
          </h1>
          <h3 style={{ margin: "5px" }}>{`you got ${points}`}</h3>
          <Link to="/" style={{ textDecoration: "none", margin: "1%" }}>
            <Button
              style={{
                fontSize: "24px",
                padding: "5px",
                color: "#fff",
                border: "2px solid",
              }}
              className="return-btn"
            >
              Back to Home
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
