import "chart.js/auto";
import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Time = () => {
 axios.get('https://api.jikan.moe/v4/anime')
 .then((res)=>{
  let data = res.data.data;
  let airing = data.aired;
  console.log(airing);
  console.log(data);

 });

  return (
    <>
      <div className="main-container">
      <h1 className="table-heading-time">Airing Timeline</h1>
        <div className="linegraph">
          <Line
            data={{
              labels: ["Started", "Ended"],
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
