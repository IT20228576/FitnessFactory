import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Background from './components/back1.jpg';

import Navbar from "./components/navbar.component"
import main from "./components/main.component"
import login from "./components/login.component"

import Equipment from "./components/Equipment.component";
import EquipmentReport from "./components/EquipmentReport.component";
import EquipmentDetails from "./components/EquipmentDetails.component";
import EquipmentAdd from "./components/EquipmentAdd.component";
import EquipmentEdit from "./components/EquipmentEdit.component";
import EquipmentEditDates from "./components/EquipmentEditDates.component"

import Stock from "./components/Stock.component"
import StockReport from "./components/StockReport.component";
import StockDetails from "./components/StockDetails.component";
import StockAdd from "./components/StockAdd.component";
import StockEdit from "./components/StockEdit.component";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', height: '1070px' }}>
          <div className='container'>

            {window.location.pathname !== '/equipment/report' && window.location.pathname !== '/stock/report' &&
              <Navbar />
            }

            <br />
            <Route path="/" exact component={login} />
            <Route path="/main" exact component={main} />
            <Route path="/equipment/" exact component={Equipment} />
            <Route path="/equipment/report" exact component={EquipmentReport} />
            <Route path="/equipment/details/:id" exact component={EquipmentDetails} />
            <Route path="/equipment/add" exact component={EquipmentAdd} />
            <Route path="/equipment/edit/:id" exact component={EquipmentEdit} />
            <Route path="/equipment/editdates/:id" exact component={EquipmentEditDates} />

            <Route path="/stock/" exact component={Stock} />
            <Route path="/stock/report" exact component={StockReport} />
            <Route path="/stock/details/:id" exact component={StockDetails} />
            <Route path="/stock/add" exact component={StockAdd} />
            <Route path="/stock/edit/:id" component={StockEdit} />
          </div>
        </div>
      </Router >
    )
  }
}