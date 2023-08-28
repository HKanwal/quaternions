import { InputAdornment, TextField } from "@mui/material";
import Styles from "../styles/Controls.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useRef, useState } from "react";

const numericDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

function containsNonNumeric(str: string) {
  let invalid = false;
  let numPeriods = 0;
  const splitStr = str.split("");

  for (const char of splitStr) {
    if (!numericDigits.includes(char)) {
      console.log(char);
      invalid = true;
    } else if (char === ".") {
      numPeriods++;
    }
  }

  return numPeriods > 1 || invalid;
}

function formatNumber(str: string) {
  if (str.length < 4) {
    if (str.includes(".")) {
      let [pre, post] = str.split(".");

      if (pre.length < 1) {
        pre = "0";
      }

      if (post.length === 0) {
        post = "00";
      } else if (post.length === 1) {
        post += "0";
      }

      return `${pre}.${post}`;
    } else {
      return `${str}.00`;
    }
  } else if (str.length > 4) {
    return str.substring(0, 4);
  } else {
    return str;
  }
}

function unitVectorify(vector: [string, string, string], keepIndex: 0 | 1 | 2) {
  let shifted = [];

  if (keepIndex === 0) {
    shifted = [vector[2], vector[keepIndex], vector[1]];
  } else if (keepIndex === 1) {
    shifted = [vector[0], vector[keepIndex], vector[2]];
  } else {
    shifted = [vector[1], vector[keepIndex], vector[0]];
  }

  shifted = shifted.map((str) => parseFloat(str));

  const squared = shifted.map((num) => num ** 2);
  const mode = squared[0] + squared[1] + squared[2] >= 1 ? "gain" : "drain";

  console.log(`Mode: ${mode}, ${squared}`);

  if (mode === "gain") {
    const remaining = 1 - squared[1];
    if (squared[2] >= remaining) {
      console.log("Inside IF");
      squared[2] = remaining - squared[0];
    } else {
      console.log("Inside ELSE");
      squared[2] = 0;
      squared[0] = 1 - squared[1] - squared[2];
    }
  } else {
    squared[2] = 1 - squared[0] - squared[1];
  }

  console.log(squared);

  shifted = squared.map((num) => Math.sqrt(num));

  let unshifted = [];

  if (keepIndex === 0) {
    unshifted = [shifted[1], shifted[2], shifted[0]];
  } else if (keepIndex === 1) {
    unshifted = shifted;
  } else {
    unshifted = [shifted[2], shifted[0], shifted[1]];
  }

  unshifted = unshifted.map((num) => formatNumber(num.toFixed(2)));

  return unshifted as [string, string, string];
}

type BasisVector = "i" | "j" | "k";

interface ControlsProps {
  onDirectionChange?: (newDir: [number, number, number]) => void;
}

function Controls(props: ControlsProps) {
  const [axis, setAxis] = useState<[string, string, string]>(["1.00", "0.00", "0.00"]);
  const iRef = useRef<HTMLInputElement>(null);
  const jRef = useRef<HTMLInputElement>(null);
  const kRef = useRef<HTMLInputElement>(null);

  const handleChange = (basisVector: BasisVector, newVal: string) => {
    if (newVal.length > 4 || parseFloat(newVal) > 1 || containsNonNumeric(newVal)) {
      return;
    }

    switch (basisVector) {
      case "i":
        setAxis([newVal, axis[1], axis[2]]);
        break;
      case "j":
        setAxis([axis[0], newVal, axis[2]]);
        break;
      case "k":
        setAxis([axis[0], axis[1], newVal]);
        break;
    }
  };

  const handleClick = (basisVector: BasisVector) => {
    switch (basisVector) {
      case "i":
        iRef.current?.focus();
        iRef.current?.setSelectionRange(0, iRef.current?.value.length);
        break;
      case "j":
        jRef.current?.focus();
        jRef.current?.setSelectionRange(0, jRef.current?.value.length);
        break;
      case "k":
        kRef.current?.focus();
        kRef.current?.setSelectionRange(0, kRef.current?.value.length);
        break;
    }
  };

  const handleBlur = (basisVector: BasisVector) => {
    const ref = basisVector === "i" ? iRef : basisVector === "j" ? jRef : kRef;
    const val = ref.current?.value;

    if (val === undefined) {
      return;
    }

    let newAxis = ["0.00", "0.00", "0.00"] as [string, string, string];

    switch (basisVector) {
      case "i":
        newAxis = unitVectorify(axis, 0);
        break;
      case "j":
        newAxis = unitVectorify(axis, 1);
        break;
      case "k":
        newAxis = unitVectorify(axis, 2);
        break;
    }

    setAxis(newAxis);
    props.onDirectionChange &&
      props.onDirectionChange(newAxis.map((str) => parseFloat(str)) as [number, number, number]);
  };

  return (
    <div className={Styles.container}>
      <span className={Styles["field-label"]}>
        Axis of Rotation <span className={Styles["sub-label"]}>(Unit Vector)</span>
      </span>

      <div className={Styles.axis}>
        <TextField
          type="text"
          inputRef={iRef}
          sx={{ m: 1, width: "9ch" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <i>i</i>
              </InputAdornment>
            ),
          }}
          size="small"
          value={axis[0]}
          onChange={(e) => handleChange("i", e.target.value)}
          onClick={() => handleClick("i")}
          onBlur={() => handleBlur("i")}
        />
        <AddIcon />
        <TextField
          type="text"
          inputRef={jRef}
          sx={{ m: 1, width: "9ch" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <i>j</i>
              </InputAdornment>
            ),
          }}
          size="small"
          value={axis[1]}
          onChange={(e) => handleChange("j", e.target.value)}
          onClick={() => handleClick("j")}
          onBlur={() => handleBlur("j")}
        />
        <AddIcon />
        <TextField
          type="text"
          inputRef={kRef}
          sx={{ m: 1, width: "9ch" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <i>k</i>
              </InputAdornment>
            ),
          }}
          size="small"
          value={axis[2]}
          onChange={(e) => handleChange("k", e.target.value)}
          onClick={() => handleClick("k")}
          onBlur={() => handleBlur("k")}
        />
      </div>
    </div>
  );
}

export default Controls;
