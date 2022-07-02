import React from "react";
import { Button } from "@mui/material";

const signs = [
  { id: 1, name: "aries" },
  { id: 2, name: "Taurus" },
  { id: 3, name: "Gemini" },
  { id: 4, name: "Cancer" },
  { id: 5, name: "Leo" },
  { id: 6, name: "Virgo" },
  { id: 7, name: "Libra" },
  { id: 8, name: "Scorpio" },
  { id: 9, name: "Sagittarius" },
  { id: 10, name: "Capricorn" },
  { id: 11, name: "Aquarius" },
  { id: 12, name: "Pisces" },
];

class SignNav extends React.Component {
  onClack = (event) => {
    event.preventDefault();
    this.props.handleDisplay(event.currentTarget.value);
  };

  render() {
    const starSigns = signs.map(({ id, name }) => {
      return (
        <Button
          style={{ textAlign: "center" }}
          key={id}
          value={name}
          onClick={this.onClack}
        >
          {name}
        </Button>
      );
    });
    return <div>{starSigns}</div>;
  }
}

export default SignNav;
