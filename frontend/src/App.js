import { Card, Container, Grid } from "@mui/material";
import Nav from "./components/Nav";
import MainForm from "./pages/MainForm";
import '@fontsource/roboto/400.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Grid
          container
          // spacing={0}  
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "80vh" }}
        >
          <Grid item sx>
            <Card sx={{padding:"40px", width: "80vh"}}>
              <MainForm />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
