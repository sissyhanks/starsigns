import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Signs from "./Signs";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Signs />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
