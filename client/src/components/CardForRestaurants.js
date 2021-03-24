import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./styleCard.css";

export default class RestaurantsCart extends React.Component {
  state = {
    restaurants: [],
  };

  componentDidMount = () => {
    this.getAllRestaurants();
  };

  getAllRestaurants = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({
          restaurants: data,
        });
        console.log("Data has been recived");
      })
      .catch(() => {
        alert("No data");
      });
  };

  render() {
    console.log("State: ", this.state);
    return this.state.restaurants.map((restaurant, index) => (
      <section
        key={index.id}
        className="section-tours p-0 col-xs-12 col-sm-12 col-md-6 col-lg-4"
      >
        <div className="col-12">
          <div className="col-12 p-0 mb-4">
            <div className="my-flip-container">
              <div className="my-flip-inner my-flip-right">
                <div className="my-flip-inner-wrapper">
                  <div className="my-flip-side my-flip-front">
                    <div className="my-flip-image my-flip-image--1">
                      <img src={restaurant.imageUrl} alt="" />
                    </div>
                    <div className="my-flip-details">
                      <h4 className="my-flip-heading">{restaurant.name}</h4>
                      <div className="my-flip-text">
                        <p>{restaurant.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="my-flip-side my-flip-back my-flip-back-1">
                    <div className="my-flip-back-inner">
                      <div className="my-flip-price">
                        <h4>From:</h4>
                        <h3>{restaurant.price}</h3>
                      </div>
                      <div className="my-flip-back-text">
                        <ul>
                          <li>{restaurant.name}</li>
                          <li>{restaurant.location}</li>
                          <li>{restaurant.address}</li>
                          <li>{restaurant.email}</li>
                          <li>{restaurant.phone}</li>
                        </ul>
                      </div>
                      <div className="my-flip-btn-box">
                        <Link
                          to={`/restaurant/${restaurant._id}`}
                          className="my-flip-btn"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ));
  }
}
