import { LineChart, Line, XAxis, YAxis } from "recharts";

const LineGraph = (props) => {
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const expense of props.data) {
    let date = new Date(expense.date);
    date.setDate(date.getDate() + 1);
    const expenseMonth = date.getMonth();
    chartDataPoints[expenseMonth].value += parseInt(expense.amount);
  }

  return (
    <LineChart width={550} height={300} data={chartDataPoints}>
      <Line type="monotone" dataKey="value" stroke="#336699"></Line>
      <XAxis dataKey="label" />
      <YAxis type="number" domain={["dataMin - 100", "dataMax"]}></YAxis>
    </LineChart>
  );
};

export default LineGraph;
