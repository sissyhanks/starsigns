import React from "react";
// import aztro from "../api/aztro";

import WelcomeSigns from "./WelcomeSigns";
import ShowSigns from "./ShowSign";

class App extends React.Component {
  state = { display: "list" };

  handleSign = (sign) => {
    this.setState({ display: sign, json: {} });
  };

  render() {
    const { display } = this.state;

    if (this.state.display === "list") {
      return (
        <div>
          <WelcomeSigns handleDisplay={this.handleSign} />
        </div>
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
