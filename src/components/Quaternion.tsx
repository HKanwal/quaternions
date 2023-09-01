import Var from "./Var";
import Styles from "../styles/Quaternions.module.css";
import { useEffect, useState } from "react";

function Plus() {
  return <span style={{ margin: "0 3px 0 3px", display: "block" }}>+</span>;
}

interface QuaternionProps {
  angle: string;
  axis: [string, string, string];
}

function Quaternion(props: QuaternionProps) {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={Styles.container}>
      <span>cos({props.angle}&deg;/2)</span>
      <Plus />
      <span style={{ display: "flex" }}>
        sin({props.angle}&deg;/2) ({props.axis[0]}
        <Var letter="i" fontSize={width < 500 ? "4vmin" : "20px"} /> <Plus /> {props.axis[1]}
        <Var letter="j" fontSize={width < 500 ? "4vmin" : "20px"} /> <Plus /> {props.axis[2]}
        <Var letter="k" fontSize={width < 500 ? "4vmin" : "20px"} />)
      </span>
    </div>
  );
}

export default Quaternion;
