import React from "react";
import FarmerList from "./FarmerList";
import Goods from "./Goods";
import TopNav from "./Topnav";
import NewGoods from "./NewGoods"
import { Switch, Route } from 'react-router-dom';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import SeasonList from "./SeasonList";
import Schedule from "./Schedule";
import * as typesAPI from '../service/fakeTypeService';

var image = require("../img/wallpaper.jpeg");

//import PropTypes from "prop-types";

function App(){
  var styles = {
    width: "1100px",
    marginRight: "auto",
    marginLeft: "auto",
  }
  var bodyStyle = {
    border: "2px solid orange",
    padding: "50px",
    backgroundImage: "url("+image+")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "orange",
    marginTop: "50px",
  }
  return (
    <div style={styles}>
    <TopNav />
    <Header />
    <div style={bodyStyle}>
    <Switch>
    <Route exact path='/' component={FarmerList} />
    <Route path='/newgoods' component={NewGoods} />
    <Route path='/schedule' component={SeasonList} />
    </Switch>
      </div>
       </div>
  );
}

//App.propTypes = {
//};

export default App;
