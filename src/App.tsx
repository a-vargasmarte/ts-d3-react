import * as React from "react";
import { Component } from "react";
import ChartWrapper from "./ChartWrapper";
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

class App extends Component<{}, State> {
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
              <ChartWrapper gender={this.state.gender} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
