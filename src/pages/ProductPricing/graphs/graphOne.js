/* eslint-disable react/no-array-index-key */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { graphOneData } from '../data';

const GraphOne = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={graphOneData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="niche" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="product_count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphOne;
