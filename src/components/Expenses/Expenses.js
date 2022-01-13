import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesMonths from "./ExpensesMonths";
import PiChart from "../Chart/PiChart";
import LineGraph from "../Chart/LineGraph";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredMonth, setFilteredMonth] = useState(0);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const monthChangeHandler = (selectedMonth) => {
    if (selectedMonth === "All") {
      setFilteredMonth("");
    } else {
      setFilteredMonth(parseInt(selectedMonth));
    }
  };

  const filteredExpenses = props.items.filter((expense) => {
    let date = new Date(expense.date);
    date.setDate(date.getDate() + 1);
    return date.getFullYear().toString() === filteredYear;
  });
  let monthlyExpenses = filteredExpenses;
  if (filteredMonth != null) {
    monthlyExpenses = filteredExpenses.filter((expense) => {
      let date = new Date(expense.date);
      date.setDate(date.getDate() + 1);
      return date.getMonth() === filteredMonth;
    });
  }
  console.log(filteredMonth);
  return (
    <div className="Expenses-wrapper">
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onYearChange={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesMonths
            selected={filteredMonth}
            onMonthChange={monthChangeHandler}
          />
          <ExpensesList
            items={filteredMonth !== "" ? monthlyExpenses : filteredExpenses}
          />
        </Card>
      </div>
      <div className="Data-visuals">
        {filteredYear && <LineGraph data={filteredExpenses} />}
        {filteredMonth !== "" && <PiChart data={monthlyExpenses} />}
      </div>
    </div>
  );
};

export default Expenses;
