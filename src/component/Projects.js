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
      <Circle>
        <div className="chart" />
      </Circle>
      {/* <List>
        <li>Project Title: PEKO-PEKO</li>
        <li>Project Title: APPRON</li>
        <li>Project Title: FIRST DRAFT</li>
        <li>Project Title: COREDUMP</li>
      </List> */}
      {/* <Doughnut data={chartData} /> */}
      {/* <div className="chart2"></div> */}
    </Containers>
  );
}

const Containers = styled.div`
  box-sizing: border-box;
  display:flex;
  justify-content; center;
  align-items: center;
  height: 17em;
  width: 19em;

  // .chart {
    //   box-sizing: border-box;
    // width: 20em;
    // height: 12em;

    //   background-image: linear-gradient(
      //     to right,
  //     rgba(0, 0, 0, 0.8) 75%,
  //     rgba(128, 128, 128, 0.5)
  //   );
  //   clip-path: circle(30% at 100% 50%);
  // }

}
`;

const Circle = styled.div`
height: 5em;
width: 3em;
margin-top: 5em;
margin-left: 13.5em;

.chart  {
  content: '';
  width: inherit;
  height: inherit;
  border: 40px solid rgba(211,211,211,.3);
  border-right: none;
  border-top-left-radius: 175px;
  border-bottom-left-radius: 175px;

  `;

const List = styled.div`
  position: fixed;

  li {
    list-style: none;

    // background-color: white;
    // position: absolute;
    // z-index: 2;
    // width: 15em;
    // height: 15em;
    // transition: 0.7s;
    // outline：none;
    // border: none;
  }
`;
export default Projects;
