import React from "react";
import SignNav from "./SignNav";

import { Typography } from "@mui/material";

class ShowSigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sign: this.props.showSign, json: {}, date: "today" };
  }

  aztro = () => {
    const { sign, date } = this.state;
    const URL =
      "https://aztro.sameerkumar.website/?sign=" + sign + "&day=" + date;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  };

  nuSign = async (nuSign) => {
    await this.setState({ sign: nuSign });
    this.aztro();
  };

  componentDidMount() {
    this.aztro();
  }

  render() {
    const {
      description,
      mood,
      lucky_time,
      current_date,
      compatibility,
      lucky_number,
      color,
      date_range,
    } = this.state.json;
    if (this.state.json) {
      return (
        <div>
          <SignNav handleDisplay={this.nuSign} />
          <Typography>{current_date}</Typography>
          <Typography>{description}</Typography>
          <Typography>{mood}</Typography>

          <Typography>{compatibility}</Typography>
          <Typography>{lucky_time}</Typography>
          <Typography>{lucky_number}</Typography>
          <Typography>{color}</Typography>
          <Typography>{date_range}</Typography>
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
