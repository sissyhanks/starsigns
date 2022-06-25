import React from "react";

class ShowSigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sign: this.props.showSign };
  }
  render() {
    const { sign } = this.state;
    return <div>{sign}</div>;
  }
}

export default ShowSigns;
