import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  handleClick = () => {
    var dateNow = new Date().getHours().toString();
    var expiration = "10";
    if (dateNow <= expiration) {
      window.alert("You can make orders until 10AM");
    } else {
      this.props.history.push("/restaurants");
    }
  };

  render() {
    return (
      <div className="home">
        <div>
          <a className="homeLvl1">Hungry? You're in the right place</a>
        </div>
        <div className="order_hour">
          <a className="homeLvl2">You can order until 10:00AM</a>
        </div>
        <div className="button_order">
          <button
            type="button"
            className="button1 btn btn-secondary btn-lg"
            onClick={() => this.handleClick()}
          >
            Order here!
          </button>
        </div>
      </div>
    );
  }
}
