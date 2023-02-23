import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

 
const data = {
  labels: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text','Text', 'Text','Text', 'Text'],
  datasets: [
    {
      
      data: [65, 62,20,90,30,85,82,5,82,72,82,20,73,90],
   
      borderColor: [
        'white'
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
 
const PieChart2 = () => (
  <>
   
    <Line data={data}  />
  </>
);
 
export default PieChart2;