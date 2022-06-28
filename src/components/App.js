import React from "react";
// import aztro from "../api/aztro";

import WelcomeSigns from "./WelcomeSigns";
import ShowSigns from "./ShowSign";

class App extends React.Component {
  state = { display: "list" };

  handleSign = (sign) => {
    this.setState({ display: sign });
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
      return <ShowSigns showSign={display} handleDisplay={this.handleSign} />;
    }
  }
}

export default App;
