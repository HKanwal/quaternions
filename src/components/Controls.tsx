import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import Styles from "../styles/Controls.module.css";

function Controls() {
  return (
    <div className={Styles.container}>
      <FormControl sx={{ m: 1, width: "8ch", display: "inline-block" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={
            <InputAdornment position="end">
              <i>i</i>
            </InputAdornment>
          }
          size="small"
        />
      </FormControl>
      +
      <FormControl sx={{ m: 1, width: "8ch", display: "inline-block" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={
            <InputAdornment position="end">
              <i>j</i>
            </InputAdornment>
          }
          size="small"
        />
      </FormControl>
      +
      <FormControl sx={{ m: 1, width: "8ch", display: "inline-block" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={
            <InputAdornment position="end">
              <i>k</i>
            </InputAdornment>
          }
          size="small"
        />
      </FormControl>
    </div>
  );
}

export default Controls;
