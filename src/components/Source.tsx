import CodeIcon from "@mui/icons-material/Code";
import { Fab } from "@mui/material";

function Source() {
  return (
    <div style={{ position: "absolute", left: "30px", bottom: "45px", zIndex: 99 }}>
      <Fab color="primary" size="large" href="https://github.com/HKanwal/quaternions">
        <CodeIcon fontSize="large" />
      </Fab>
    </div>
  );
}

export default Source;
