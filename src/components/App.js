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
          {display}
        </div>
      );
    } else {
      return <ShowSigns showSign={display} />;
    }
  }
}

export default App;
