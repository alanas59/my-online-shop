import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyBarChart = () => {
    const [chart,setChart] = useChart();  
    return (
        <div>
            <BarChart width={500} height={400} data={chart}>
               <Bar dataKey="sell" fill="#8884d8" />
               <Tooltip></Tooltip>
               <Legend></Legend>
               <XAxis dataKey="month" />
               <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default MyBarChart;