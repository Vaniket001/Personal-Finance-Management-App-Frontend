import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const ExpenseLog = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/expenses")
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);
  return (
    <div>
      <h2>Expense Log</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category}: ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseLog;
