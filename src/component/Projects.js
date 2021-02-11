import React from "react";
import styled from "styled-components";
import Chart from "chart.js";

function Projects() {
  // let ProjectChart = new Chart(CHART, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Project 1', 'Project 2', 'Group Project 1', 'Group Project 2'],
  //     datasets: [
  //       {
  //         labels: 'Title',
  //         backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9'],
  //         data: ['abc', 'def', 'ghi', 'jkl']
  //       }
  //     ]
  //   },
  //   options: {
  //     animation: {
  //       animateScale: true
  //     }
  //   }
  // })

  return (
    <Containers>
      the projects
      <div className="chart">this is chart</div>
    </Containers>
  );
}

const Containers = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 20em;
  height: 20em;
  position: absolute;
  margin-left: 40em;

  .chart {
    box-sizing: border-box;
    border: 1px solid blue;
    width: 20em;
    height: 18em;
  }
`;

export default Projects;
