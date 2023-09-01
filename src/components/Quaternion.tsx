function Var(props: { letter: string }) {
  return (
    <span
      style={{
        fontFamily: "'Computer Modern Serif', serif",
        fontStyle: "italic",
        fontSize: "20px",
      }}
    >
      {props.letter}
    </span>
  );
}

function Plus() {
  return <span style={{ margin: "0 3px 0 3px" }}>+</span>;
}

interface QuaternionProps {
  angle: string;
  axis: [string, string, string];
}

function Quaternion(props: QuaternionProps) {
  return (
    <div style={{ width: "100%", fontSize: "18px", display: "flex", justifyContent: "center" }}>
      cos({props.angle}&deg;/2) <Plus /> sin({props.angle}&deg;/2)({props.axis[0]}
      <Var letter="i" /> <Plus /> {props.axis[1]}
      <Var letter="j" /> <Plus /> {props.axis[2]}
      <Var letter="k" />)
    </div>
  );
}

export default Quaternion;
