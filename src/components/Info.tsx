import { Modal, Typography } from "@mui/material";
import { useState } from "react";
import Var from "./Var";
import Styles from "../styles/Info.module.css";

function Info() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          color: "#90caf9",
          fontSize: "22px",
          cursor: "pointer",
          zIndex: "99",
        }}
        onClick={() => setOpen(true)}
      >
        INFO
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={Styles.modal}>
          <Typography variant="h6" component="h1">
            What is a Quaternion?
          </Typography>
          <Typography variant="body1" component="section">
            Quaternions are 4D numbers. They are like the 2D complex numbers, but with 2 addional
            imaginary parts:
            <Var letter="j" fontSize="inherit" /> and
            <Var letter="k" fontSize="inherit" />. Like complex numbers, quaternions can be
            expressed as a linear combination of [1, <Var letter="i" fontSize="inherit" />,{" "}
            <Var letter="j" fontSize="inherit" />, <Var letter="k" fontSize="inherit" />] or in
            trigonometric form.
          </Typography>

          <Typography variant="h6" component="h1" sx={{ mt: 1 }}>
            Why are Quaternions Helpful?
          </Typography>
          <Typography variant="body1" component="section">
            Similar to how complex numbers can be used to represent 2D rotations, quaternions can be
            used to represent 3D rotations. Given two quaternions, it is easy to interpolate between
            them, and thereby find the shortest path between any two rotational states. Furthermore,
            quaternions avoid the gimbal lock issue of Euler angles (an alternative method for
            representing 3D rotations).
          </Typography>

          <Typography variant="h6" component="h1" sx={{ mt: 1 }}>
            What is Gimbal Lock?
          </Typography>
          <Typography variant="body1" component="section">
            Gimbal lock involves the loss of a rotational degree of freedom, and occurs when two
            Euler axes become exactly aligned. Gimbal lock sometimes makes it impossible to directly
            interpolate between two rotational states, and can cause wonky animations. It is
            fortunate for us that we have quaternions to save the day!
          </Typography>

          <Typography variant="h6" component="h1" sx={{ mt: 1 }}>
            Learn More
          </Typography>
          <Typography variant="body1" component="section">
            <a
              href="https://www.youtube.com/watch?v=d4EgbgTm0Bg"
              style={{ display: "block" }}
              target="_blank"
            >
              Visualizing Quaternion Multiplication
            </a>
            <a
              href="https://youtu.be/zjMuIxRvygQ?si=b-SYCHEiCyel3Cu_"
              style={{ display: "block" }}
              target="_blank"
            >
              Quaternions & 3D Rotation
            </a>
            <a href="https://youtu.be/zc8b2Jo7mno?si=Ps9h_qUkX3pvQ1Jn" target="_blank">
              Gimbal Lock
            </a>
          </Typography>
        </div>
      </Modal>
    </>
  );
}

export default Info;
