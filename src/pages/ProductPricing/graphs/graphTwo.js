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
import { graphTwoData } from '../data';

const GraphTwo = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={graphTwoData}
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
        <Bar dataKey="price_min" fill="#8884d8" />
        <Bar dataKey="price_max" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphTwo;
