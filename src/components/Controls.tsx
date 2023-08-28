import { InputAdornment, TextField } from "@mui/material";
import Styles from "../styles/Controls.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef, useState } from "react";

const numericDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

function containsNonNumeric(str: string) {
  let invalid = false;
  const splitStr = str.split("");

  for (const char of splitStr) {
    if (!numericDigits.includes(char)) {
      console.log(char);
      invalid = true;
    }
  }

  return invalid;
}

function Controls() {
  const [axis, setAxis] = useState<[string, string, string]>(["1.00", "0.00", "0.00"]);
  const iRef = useRef<HTMLInputElement>(null);
  const jRef = useRef<HTMLInputElement>(null);
  const kRef = useRef<HTMLInputElement>(null);

  const handleChange = (basisVector: "i" | "j" | "k", newVal: string) => {
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

  const handleClick = (basisVector: "i" | "j" | "k") => {
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

  useEffect(() => {
    console.log(axis);
  }, [axis]);

  return (
    <div className={Styles.container}>
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
      />
    </div>
  );
}

export default Controls;
