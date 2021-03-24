    import React from "react";
    import { Modal } from "react-bootstrap";
    import "../components/styleFood.css";
    import axios from "axios";

    export default class RestaurantsFood extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          show: false,
          food: [],
          restaurant: [],
          activeElement: {}
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
      }

      componentDidMount = () => {
        this.getRestaurantsById(this.props.match.params.id);
      };

      getRestaurantsById = (id) => {
        axios
          .get("/api/restaurant/" + id)
          .then((response) => {
            this.setState({ 
              restaurant: response.data,
              food: response.data.food });
          })
          .catch((error) => {
            console.log(error);
          });
      };

      handleClose = () => {
        this.setState({ show: false });
      };
      handleShow = (ele) => {
        this.setState(
                { show: true,
          activeElement: ele });
      };

      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      };

      submit = (e) => {
        e.preventDefault();
        const payload = {
          name: this.state.name,
          imgUrl: this.state.activeElement.imgUrl,
          price: this.state.activeElement.price,
          description: this.state.activeElement.description
        };
        axios({
          url: "http://localhost:5000/api/orderfood",
          method: "POST",
          data: payload,
        })
          .then(() => {
            this.handleClose()
            console.log("Data sent");
          })
          .catch(() => {
            console.log("Data error");
          });
      };

      render() {
        return (
          <div>
            <div className="food"></div>
            <div className="text-food">
            <h1>{this.state.restaurant.name}</h1>
              <div />
            </div>
            {this.state.food &&
            this.state.food.map((ele, idx) => (
                <div className="container">
                  <div className="card container mt-2 mb-5 p-3 card_food_list">
                    <div className="row mt-4">
                      <div className="col-md-4">
                        <img
                          className="image_food_list"
                          src={ele.imgUrl}
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-12">
                            <h1 className="name_food_list">{}</h1>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <p className="description_food_list">
                              {ele.description}
                            </p>
                          </div>
                          <div className="col-md-12">
                            <p className="price_food_list">
                              Price: {ele.price}
                            </p>
                          </div>
                        </div>
                        <div className="row button_food_list">
                          <button
                            className="btn btn-primary button_style_food"
                            onClick={()=> this.handleShow(ele)}
                          >
                            Order this!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} 
              <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Order food!</Modal.Title>
                  </Modal.Header>
                  <form onSubmit={this.submit}>
                    <Modal.Body>
                      <img
                        className="modal_img"
                        src={this.state.activeElement.imgUrl}
                        alt=""
                      />
                      <p className="food_Name">{this.state.activeElement.name}</p>
                      <p className="modal_description">
                        {this.state.activeElement.description}
                      </p>
                      <p className="food_price">
                        Price: {this.state.activeElement.price}
                      </p>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        required
                        onChange={this.handleChange}
                        placeholder="Enter name"
                      ></input>
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        className="btn btn-secondary"
                        onClick={this.handleClose}
                      >
                        Close
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Order Food
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal>
          </div>
        );
      }
    }
