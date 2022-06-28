import React from "react";
import SignNav from "./SignNav";

class ShowSigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sign: this.props.showSign, json: {} };
  }

  nuSign = (nuSign) => {
    this.setState({ sign: nuSign });
  };

  componentDidMount() {
    const { sign } = this.state;
    const URL =
      "https://aztro.sameerkumar.website/?sign=" + sign + "&day=today";
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  render() {
    if (this.state.json) {
      return (
        <div>
          <SignNav handleDisplay={this.nuSign} />
          {this.state.json.description}
        </div>
      );
    }
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
