import React from "react";
// import aztro from "../api/aztro";

import WelcomeSigns from "./WelcomeSigns";
import ShowSigns from "./ShowSign";
import SignSigns from "./SignSigns";

import { Grid } from "@mui/material";

class App extends React.Component {
  state = { display: null };

  handleSign = (sign) => {
    this.setState({ display: sign });
  };

  render() {
    const { display } = this.state;

    if (!this.state.display) {
      return (
        <Grid container justifyContent="flex-end">
          <SignSigns />
          <WelcomeSigns handleDisplay={this.handleSign} />
        </Grid>
      );
    } else {
      return (
        <div>
          <ShowSigns showSign={display} handleDisplay={this.handleSign} />
        </div>
      );
    }
  }
}

export default App;
