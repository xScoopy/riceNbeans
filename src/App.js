import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const loadedExpenses = JSON.parse(localStorage.getItem("expenses"));

const App = () => {
  const [expenses, setExpenses] = useState(loadedExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      if (prevExpenses) {
        localStorage.setItem(
          "expenses",
          JSON.stringify([expense, ...prevExpenses])
        );
        return [expense, ...prevExpenses];
      } else {
        localStorage.setItem("expenses", JSON.stringify([expense]));
        return [expense];
      }
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      {expenses && <Expenses items={expenses} />}
    </div>
  );
};

export default App;
