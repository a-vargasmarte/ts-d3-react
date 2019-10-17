import * as d3 from "d3";
import {scaleLinear} from 'd3'
import { updateExpression } from "@babel/types";

interface svgDimensions {
  width: number;
  height: number;
}

interface svgMargins {
  margin: any;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface dataSource {
  url: string;
}

interface yDomain {
  yMin: number;
  yMax: number;
}

interface data {}
interface svg {
  [key: string]: any;
}

const margin = { top: 50, right: 30, bottom: 50, left: 50 },
  width = 600 - margin.right - margin.left,
  height = 600 - margin.top - margin.bottom;
export default class D3Chart<
  svgDimensions,
  svgMargins,
  dataSource,
  yDomain,
  data,
  svg
> {
  constructor(element: any) {
    let vis: any;
    vis = this;
    console.log(vis.update)

    const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";

    vis.svg = d3
      .select(element)
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    console.log(vis);
    vis.xAxisGroup = vis.svg
      .append("g")
      .attr("transform", `translate(0,${height})`);

    vis.yAxisGroup = vis.svg.append("g");
    // load data

    Promise.all([
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json")
    ]).then(datasets => {
      console.log(datasets);

      let data = datasets[0];

      let [men, women] = [datasets[0], datasets[1]];
      vis.menData = men;
      vis.womenData = women;
      vis.update("men");
    });
  }

  update(gender: string) {
    let vis: any;

    vis = this;

    console.log(vis.update);

    console.log(gender);

    vis.data = gender === "men" ? vis.menData : vis.womenData;

    console.log(vis.data);

    //   -------------------------scales-------------------------

    //  y Scale

    const yMin = d3.min(
      vis.data,
      (d: { height: string; name: string }) => +d.height * 0.95
    );

    const yMax = d3.max(
      vis.data,
      (d: { height: string; name: string }) => +d.height
    );

    const y = d3
      .scaleLinear()
      .domain([yMin!, yMax!])
      .range([height, 0]);

    const yAxisCall = d3.axisLeft(y);

    vis.yAxisGroup.call(yAxisCall);

    //   x scale

    const x = d3
      .scaleBand()
      .domain(vis.data.map((d: { name: string }) => d.name))
      .range([0, width])
      .padding(0.4);

    const xAxisCall = d3.axisBottom(x);

    vis.xAxisGroup.call(xAxisCall);

    // ------------------ bars -----------------

    // JOIN DATA

    const rects = vis.svg.selectAll("rect").data(vis.data);

    // EXIT DATA

    rects
      .exit()
      .attr("fill", "red")
      .transition()
      .duration(500)
      .attr("height", 0)
      .attr("y", height)
      .remove();

    // UPDATE

    rects
      .transition()
      .duration(500)
      .attr("x", (d: any) => x(d.name)!)
      .attr("y", (d: any) => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", (d: any) => height - y(d.height));

    // ENTER

    rects
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.name)!)
      .attr("y", (d: any) => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", (d: any) => height - y(d.height))
      .attr("fill", "grey")
      .transition()
      .duration(2000)
      .attr("fill", "black");
  }
}
