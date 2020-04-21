import React from "react";
import { isPositive } from "../helpers/AmountHelper";

const Transaction = ({ transaction }) => {
  return (
    <li className={isPositive(transaction.amount) ? "plus" : "minus"}>
      {transaction.text} <span>{`R$ ${transaction.amount}`}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
