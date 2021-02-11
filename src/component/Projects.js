import React from "react";
import styled from "styled-components";
// import Chart from "chart.js";

function Projects() {
  // const [chartData, setChartData] = useState({});
  // const [chartOptions, setChartOptions] = useState ({})

  // const [chartData, setChartData] = useState({
  //   labels: ["Project 1", "Project 2", "Group Project 1", "Group Project 2"],
  //   datasets: [
  //     {
  //       labels: "Title",
  //       backgroundColor: ["#f1c40f", "#e67e22", "#16a085", "#2980b9"],
  //       data: [20, 20, 20, 20],
  //       borderWidth: 4,
  //     },
  //   ],
  // });

  // //set options
  // const [chartOptions, setChartOptions] = useState({
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //     title: {
  //       display: true,
  //       text: "Data Orgranized In Bars",
  //       fontSize: 25,
  //     },
  //     legend: {
  //       display: true,
  //       position: "top",
  //     },
  //   },
  // });

  return (
    <Containers>
      <div className="chart">
        <List>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </List>
        {/* <Doughnut data={chartData} /> */}
        <div className="chart2"></div>
      </div>
    </Containers>
  );
}

const Containers = styled.div`
  box-sizing: border-box;
  // border: 1px solid white;
  // left: 6em;
  width: 20em;
  height: 12em;
  // position: relative;
  margin-left: 9em;

  .chart {
    box-sizing: border-box;
    // border: 1px solid red;
    // margin-top: 2em;
    width: 20em;
    height: 12em;
    background-color: #3fa7d5;
    clip-path: circle(30% at 100% 50%);
    -webkit-clip-path: circle(30% at100% 50%);
    outline: none;
    border: none;
  }

`;


  const List = styled.div`
    li {
      z-index:2;
      position:relative;
      background-color: white;
      width: 5em;
      height: 5em;
      transition: 0.7s;
    }
  `;
export default Projects;
