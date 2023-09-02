import CodeIcon from "@mui/icons-material/Code";
import { Fab } from "@mui/material";

function Source() {
  return (
    <div style={{ position: "absolute", right: "20px", top: "20px", zIndex: 99 }}>
      <Fab color="error" size="small" href="https://github.com/HKanwal/quaternions">
        <CodeIcon fontSize="small" />
      </Fab>
    </div>
  );
}

export default Source;
