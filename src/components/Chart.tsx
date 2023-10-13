import React, { useContext, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../context/Context';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 4,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Water/Calorie Consumption',
    },
  },
};

const labels = ['Today'];

const Chart = () => {
  const { waterDrank, caloriesConsumed } = useContext(DataContext);

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: 'Water',
        data: [waterDrank],
        backgroundColor: 'rgba(99, 107, 164, 1)',
      },
      {
        label: 'Calories',
        data: [caloriesConsumed],
        backgroundColor: 'rgba(213, 9, 9, 1)',
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: 'Water',
          data: [waterDrank],
          backgroundColor: 'rgba(99, 107, 164, 1)',
        },
        {
          label: 'Calories',
          data: [caloriesConsumed],
          backgroundColor: 'rgba(213, 9, 9, 1)',
        },
      ],
    });
  }, [waterDrank, caloriesConsumed]);

  return <Bar options={options} data={chartData} />;
};

export default Chart;
