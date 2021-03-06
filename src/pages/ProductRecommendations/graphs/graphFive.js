/* eslint-disable prettier/prettier */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { graphFiveData } from '../data';

const data = graphFiveData.sort((a, b) => {
  if (a.length_of_review > b.length_of_review) {
    return 1;
  }
  if (b.length_of_review > a.length_of_review) {
    return -1;
  }
  return 0;
});

// Distribution of Length of Reviews vs Helpful Count
const GraphFive = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="length_of_review" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count_of_helpful_tags"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphFive;
