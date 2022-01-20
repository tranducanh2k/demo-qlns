import React from 'react';
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
import faker from 'faker';
import { Brightness1 } from '@material-ui/icons';

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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Thống kê ngày nghỉ',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'
                , 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Nghi co phep',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: 'rgb(32,116,180)',
    },
    {
      label: 'Nghi khong phep',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: '#ff7c0c',
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
