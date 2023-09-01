function Var(props: { letter: string; fontSize: string }) {
  return (
    <span
      style={{
        fontFamily: "'Computer Modern Serif', serif",
        fontStyle: "italic",
        fontSize: props.fontSize,
      }}
    >
      {" " + props.letter}
    </span>
  );
}

export default Var;
