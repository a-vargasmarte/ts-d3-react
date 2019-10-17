import * as React from "react";
import { Component } from "react";
import D3Chart from "./D3Chart";

interface IState {
  chart: any;
}

interface IProps {
  gender: string;
}
export default class ChartWrapper extends Component<IProps, IState> {
  componentDidMount() {
    let chart: any;
    chart = new D3Chart(this.refs.chart);

    console.log(chart.update);

    this.setState({
      chart: chart
    });
    console.log(this.state);
  }

  componentWillReceiveProps(props: any) {
    console.log(this.state.chart.update);
    // let { chart } = this.state;
    this.state.chart.update(props.gender);
  }
  render() {
    return <div ref="chart"></div>;
  }
}
