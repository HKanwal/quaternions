import { Line } from "@react-three/drei";

function Grid() {
  return (
    <>
      <Line
        points={[
          [-5, 0, 0],
          [5, 0, 0],
        ]}
        color="white"
      />
      <Line
        points={[
          [-5, 0, -1],
          [5, 0, -1],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, -2],
          [5, 0, -2],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, -3],
          [5, 0, -3],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, -4],
          [5, 0, -4],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, -5],
          [5, 0, -5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, 1],
          [5, 0, 1],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, 2],
          [5, 0, 2],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, 3],
          [5, 0, 3],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, 4],
          [5, 0, 4],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, 5],
          [5, 0, 5],
        ]}
        color="grey"
      />

      <Line
        points={[
          [0, 0, -5],
          [0, 0, 5],
        ]}
        color="white"
      />
      <Line
        points={[
          [-1, 0, -5],
          [-1, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-2, 0, -5],
          [-2, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-3, 0, -5],
          [-3, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-4, 0, -5],
          [-4, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [-5, 0, -5],
          [-5, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [1, 0, -5],
          [1, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [2, 0, -5],
          [2, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [3, 0, -5],
          [3, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [4, 0, -5],
          [4, 0, 5],
        ]}
        color="grey"
      />
      <Line
        points={[
          [5, 0, -5],
          [5, 0, 5],
        ]}
        color="grey"
      />
    </>
  );
}

export default Grid;
