import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div classname = 'expense-date__month'>{month}</div>
      <div classname = 'expense-date__year'>{year}</div>
      <div classname = 'expense-date__day'>{date}</div>
    </div>
  );
}

export default ExpenseDate;
