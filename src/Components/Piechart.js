import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

 
const data = {
  labels: ['Text', 'Text', 'Text', 'Text', 'Text',],
  datasets: [
      {
      data:  [0, 20, 80, 14, 0],
      borderColor: [
        'white'
      ],
      borderWidth: 1,
      tension : 0.3,
    },{
      data: [0, 13, 50, 48,0],
      borderColor: [
        'skyblue'
      ],
      borderWidth: 1,
      tension : 0.3,
      legend: {
        labels: {
          boxWidth: 0,
        }
       }
    },
  ],
};
 
const PieChart = () => (
  <>
   
    <Line data={data} />
  </>
);
 
export default PieChart;