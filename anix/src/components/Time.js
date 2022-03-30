import 'chart.js/auto';
import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Time =()=>{
    const data = {
        label: 'Airing Time',
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };
      return(
          <>
           <div className="main-container">

           </div>
          </>
      )
}
export default Time
