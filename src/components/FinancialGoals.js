import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const FinancialGoals = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    axios
      .get("/api/goals")
      .then((response) => setGoals(response.data))
      .catch((error) => console.error("Error fetching goals:", error));
  }, []);

  return (
    <div>
      <h2>Financial Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.goalName}: ${goal.currentAmount} of ${goal.targetAmount} by
            {goal.targetDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialGoals;
