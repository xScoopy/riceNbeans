import { PieChart, Pie } from "recharts";

const PiChart = (props) => {
  console.log(props.data);
  const data = props.data.map((dataPoint) => {
    return {
      title: dataPoint.title,
      amount: parseInt(dataPoint.amount),
    };
  });
  return (
    // <PieChart width={400} height={400}>
    //   <Pie
    //     data={props.data}
    //     nameKey="title"
    //     dataKey="amount"
    //     outerRadius={100}
    //     fill="#8884d8"
    //   ></Pie>
    // </PieChart>
    <PieChart width={700} height={700}>
      <Pie
        data={data}
        nameKey="title"
        dataKey="amount"
        outerRadius={250}
        fill="#8884d8"
      />
    </PieChart>
  );
};

export default PiChart;
