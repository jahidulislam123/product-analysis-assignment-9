import React from 'react';
import { Bar, Legend, Pie, PieChart, Tooltip } from 'recharts';
import './piechart.css'

const Mypiechart = () => {

  const data=  [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='piechart'>
            <PieChart width={830} height={350}>
         <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
         <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label />

         <Tooltip/>
  <Legend />
  <Bar dataKey="sell" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
          </PieChart>
            
        </div>
    );
};

export default Mypiechart;