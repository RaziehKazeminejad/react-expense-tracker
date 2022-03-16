import React, { useEffect, useState } from 'react';
import OverViewComponent from './OverViewComponent';
import TransActionComponent from './TransActionComponent';

export default function ExpenseApp() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transaction, setTransaction] = useState(() => {
    const saved = localStorage.getItem('transactions');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  const addTransaction = (formValues) => {
    console.log(formValues);
    const data = { ...formValues, id: Date.now };
    setTransaction([...transaction, data]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((t) => {
      t.type === 'expense'
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
    localStorage.setItem('transactions', JSON.stringify(transaction));
  }, [transaction]);

  return (
    <div>
      <section className="container">
        <OverViewComponent
          income={income}
          expense={expense}
          addTransaction={addTransaction}
        />
        <TransActionComponent transaction={transaction} />
      </section>
    </div>
  );
}
