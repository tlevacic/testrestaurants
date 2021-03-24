import React from "react";
import axios from "axios";

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderFood: [],
    };
  }

  componentDidMount = () => {
    this.getAllFood();
  };

  handleDecline = (id) => {
    axios.delete("/api/deleteOrder", { data: { id: id } });
    this.getAllFood();
  };

  getAllFood = () => {
    axios
      .get("/api/orderfood")
      .then((response) => {
        const data = response.data;
        this.setState({
          orderFood: data,
        });
        console.log("Data has been recived");
      })
      .catch(() => {
        alert("No data");
      });
  };
  render() {
    return this.state.orderFood.map((food, index) => (
      <div key={index} className="listFoodOrders">
        <img className="foodImage" src={food.imgUrl} />
        <p className="foodName">{food.name}</p>
        <p className="foodName">{food.price}</p>
        <p className="foodName">{food.description}</p>
        <div className="buttonAccDecc">
          <button
            className="decline btn btn-secondary"
            onClick={() => this.handleDecline(food._id)}
          >
            Decline
          </button>
          <button className="accept btn btn-primary">Accept</button>
        </div>
      </div>
    ));
  }
}
