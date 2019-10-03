import * as React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import ChartWrapper from "./ChartWrapper";
import * as d3 from "d3";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import GenderDropDown from "./GenderDropDown";

export interface Props {
  width: number;
  height: number;
}

export interface State {
  gender: string;
}

class App extends Component {
  state = {
    gender: "men"
  };

  genderSelected = (gender: string) => this.setState({ gender });
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropDown genderSelected={this.genderSelected} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
