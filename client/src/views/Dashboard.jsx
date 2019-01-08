import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
                         </Col>
            <Col lg={3} sm={6}>
             
            </Col>
            <Col lg={3} sm={6}>
             
            </Col>
            <Col lg={3} sm={6}>
             </Col>
          </Row>
          <Row>
            <Col md={8}>
              </Col>
            <Col md={4}>
             
            </Col>
          </Row>

          <Row>
            <Col md={6}>
             
            </Col>

            <Col md={6}>
             
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
