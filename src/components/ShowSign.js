import React from "react";
import SignNav from "./SignNav";
import { Typography } from "@mui/material";

class ShowSigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sign: this.props.showSign, json: {} };
  }

  nuSign = async (nuSign) => {
    await this.setState({ sign: nuSign });
    {
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
          <Typography>{this.state.json.description}</Typography>
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
