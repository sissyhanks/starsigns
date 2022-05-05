import React from "react";

const signs = [
  { id: 1, name: "Aries" },
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

class Signs extends React.Component {
  render() {
    const starSigns = signs.map(({ id, name }) => {
      return <li id={id}>{name}</li>;
    });
    return <ul>{starSigns}</ul>;
  }
}

export default Signs;
