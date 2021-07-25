/* eslint-disable react/no-array-index-key */
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { graphOneData } from '../data';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}% - ${index + 1} stars`}
    </text>
  );
};

// Distribution of overall ratings for amazon products
const GraphOne = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={1500} height={750}>
        <Pie
          data={graphOneData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={250}
          fill="#8884d8"
          dataKey="value">
          {graphOneData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GraphOne;
