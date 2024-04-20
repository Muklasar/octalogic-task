import { AppBar, IconButton,  Toolbar,  Typography } from "@mui/material";

const Nav = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
        Octalogic Task
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Nav;
