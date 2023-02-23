import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

 
const data = {
  labels: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text','Text', 'Text',],
  datasets: [
    {
      data:[33,25,28,9,21,15,13,14,15,25,31,7],
      borderColor: [
        '#A6CEE3'
      ],
      borderWidth: 1,
      tension : 0.3,
      options: {
        legend: {
           display: false
        },
        tooltips: {
           enabled: false
        }
   }
    },
    {
      data:  [36,20,30,30,31,12,20,0,30,29,34,31],
      borderColor: [
        '#1F78B4'
      ],
      borderWidth: 1,
      tension : 0.3,
      legend: {
        labels: {
          boxWidth: 0,
        }
       }
    },
    {
      data: [24,12,14,26,14,13,28,8,9,32,18,10],
      borderColor: [
        '#B2DF8A'
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
 
const PieChart3 = () => (
  <>
   
    <Line data={data}  />
  </>
);
 
export default PieChart3;