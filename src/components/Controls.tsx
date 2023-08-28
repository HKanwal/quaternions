import { InputAdornment, TextField } from "@mui/material";
import Styles from "../styles/Controls.module.css";
import AddIcon from "@mui/icons-material/Add";

function Controls() {
  return (
    <div className={Styles.container}>
      <TextField
        type="number"
        sx={{ m: 1, width: "8ch" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <i>i</i>
            </InputAdornment>
          ),
        }}
        size="small"
      />
      <AddIcon />
      <TextField
        type="number"
        sx={{ m: 1, width: "8ch" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <i>j</i>
            </InputAdornment>
          ),
        }}
        size="small"
      />
      <AddIcon />
      <TextField
        type="number"
        sx={{ m: 1, width: "8ch" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <i>k</i>
            </InputAdornment>
          ),
        }}
        size="small"
      />
    </div>
  );
}

export default Controls;
