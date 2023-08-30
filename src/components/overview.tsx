'use client';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const barChartData = [
  {
    name: 'Key Players',
    total: 30,
    current: 25
  },
  {
    name: 'Important Players',
    total: 30,
    current: 45
  },
  {
    name: 'Squad Players',
    total: 30,
    current: 18
  },
  {
    name: 'Youth Players',
    total: 10,
    current: 1
  }
];

export function Overview() {
  return (
    <>
      {/* <ResponsiveContainer width='99%' aspect={2.25}>
      <BarChart data={barChartData}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar dataKey='total' fill='#e11d48' radius={[4, 4, 0, 0]} />
        <Bar dataKey='current' fill='#7c3aed' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer> */}
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={barChartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis
            dataKey='name'
            stroke='#888888'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='#888888'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey='current' stackId='a' fill='#7c3aed' />
          <Bar dataKey='total' stackId='a' fill='#e11d48' />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
