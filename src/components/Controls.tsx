import { InputAdornment, TextField } from "@mui/material";
import Styles from "../styles/Controls.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef, useState } from "react";

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
  } else {
    return str;
  }
}

type BasisVector = "i" | "j" | "k";

function Controls() {
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

    switch (basisVector) {
      case "i":
        setAxis([formatNumber(val), axis[1], axis[2]]);
        break;
      case "j":
        setAxis([axis[0], formatNumber(val), axis[2]]);
        break;
      case "k":
        setAxis([axis[0], axis[1], formatNumber(val)]);
        break;
    }
  };

  return (
    <div className={Styles.container}>
      <span className={Styles["field-label"]}>Axis of Rotation</span>

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
