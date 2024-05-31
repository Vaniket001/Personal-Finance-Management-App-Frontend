import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const IncomeLog = () => {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/incomes")
      .then((response) => setIncomes(response.data))
      .catch((error) => console.error("Error fetching incomes:", error));
  }, []);

  return (
    <div>
      <h2>Income Log</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            {income.source}: ${income.amount} on {income.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeLog;
