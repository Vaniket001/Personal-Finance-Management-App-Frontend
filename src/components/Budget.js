import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const Budget = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get("/api/budgets")
      .then((response) => setBudgets(response.data))
      .catch((error) => console.error("Error fetching budgets:", error));
  }, []);

  return (
    <div>
      <h2>Budget</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            {budget.category}: ${budget.amount} from {budget.startDate} to
            {budget.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;
