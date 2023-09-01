import Var from "./Var";

function Plus() {
  return <span style={{ margin: "0 3px 0 3px", display: "block" }}>+</span>;
}

interface QuaternionProps {
  angle: string;
  axis: [string, string, string];
}

function Quaternion(props: QuaternionProps) {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "18px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <span>cos({props.angle}&deg;/2)</span>
      <Plus />
      <span style={{ display: "flex" }}>
        sin({props.angle}&deg;/2) ({props.axis[0]}
        <Var letter="i" fontSize="20px" /> <Plus /> {props.axis[1]}
        <Var letter="j" fontSize="20px" /> <Plus /> {props.axis[2]}
        <Var letter="k" fontSize="20px" />)
      </span>
    </div>
  );
}

export default Quaternion;
