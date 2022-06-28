import React from "react";
import SignNav from "./SignNav";

class ShowSigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sign: this.props.showSign };
  }

  nuSign = (nuSign) => {
    this.setState({ sign: nuSign });
  };

  render() {
    const { sign } = this.state;

    return (
      <div>
        <SignNav handleDisplay={this.nuSign} />
        {sign}
      </div>
    );
  }
}

export default ShowSigns;
