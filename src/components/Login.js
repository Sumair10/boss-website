import * as React from "react";
import { Box, Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <React.Fragment>
      <Box className="loginContainer">
        <Box sx={{ p: 10 }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>

        <Button variant="contained">Login</Button>
      </Box>
    </React.Fragment>
  );
}
