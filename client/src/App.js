import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Subscribe from './components/layouts/footer-component/Subscribe';
import Login from './components/Login';
import OrderList from './components/OrderList';
import CardComponent from './components/CardComponent';
import FoodFromRestaurant from './components/FoodFromRestaurant';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/restaurants" component={CardComponent}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/subscribe" component={Subscribe}/>
        <Route path="/login" component={Login}/>
        <Route path="/orderlist" component={OrderList}/>
        <Route path="/restaurant/:id" component={FoodFromRestaurant}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
