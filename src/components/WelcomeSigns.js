import "./Signs.css";
import React from "react";

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

class WelcomeSigns extends React.Component {
  onClack = (event) => {
    this.props.handleDisplay(event.target.value);
  };

  render() {
    const starSigns = signs.map(({ id, name }) => {
      return (
        <button
          style={{ textAlign: "center" }}
          xs={2}
          key={name}
          value={name}
          onClick={this.onClack}
        >
          {name}
        </button>
      );
    });
    return <div>{starSigns}</div>;
  }
}

export default WelcomeSigns;
