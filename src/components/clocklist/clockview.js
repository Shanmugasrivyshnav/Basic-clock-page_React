import { Component } from "react";

import "./clockview.css";

class Clock extends Component {
  /*----------------------- ----------------------------------------------------------------------------------*/

  /*  -------------OLD APPROACH --------------------
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
   } */

  /* -------------------- MODERN APPROCH ----------- */
  state = { date: new Date() };
  /*----------------------- ------------------------------------------------------------------------------------*/
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  render() {
    const { date } = this.state;
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
        <p className="date">{date.toLocaleDateString()}</p>
        <p className="date-time">{date.toLocaleString()}</p>
      </div>
    );
  }
}
export default Clock;
