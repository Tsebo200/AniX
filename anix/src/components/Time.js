import "chart.js/auto";
import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Time = () => {
  const data = {
    label: "Airing Time",
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      <div className="main-container">
      <h1 className="table-heading">Airing Timeline</h1>
        <div className="linegraph">
          <Line
            data={{
              labels: ["Success", "Failed"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19],
                  backgroundColor: ["#2b2b2b", "#ffffff"],
                  borderColor: [],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Time;
