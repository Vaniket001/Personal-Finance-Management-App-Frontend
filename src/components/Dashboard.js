import React from "react";
import ExpenseLog from "./ExpenseLog";
import IncomeLog from "./IncomeLog";
import Budget from "./Budget";
import FinancialGoals from "./FinancialGoals";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ExpenseLog />
      <IncomeLog />
      <Budget />
      <FinancialGoals />
    </div>
  );
};

export default Dashboard;
