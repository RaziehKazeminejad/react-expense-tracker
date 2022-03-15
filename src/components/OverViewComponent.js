import React, { useState } from 'react';

export default function OverViewComponent({ income, expense, addTransaction }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? 'Cancel' : 'Add'}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{color:"red"}}>&#65284;{expense}</span>
        </div>
        <div className="expenseBox">
          Income <span>&#65284;{income}</span>{' '}
        </div>
      </div>
    </div>
  );
}

function TransActionForm({ addTransaction }) {
  const [formValues, setFormValues] = useState({
    type: 'expense',
    amount: 0,
    desc: '',
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValues.type === 'expense'}
          onChange={changeHandler}
        />
        <>Expense</>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValues.type === 'income'}
          onChange={changeHandler}
        />
        <>Income</>
      </div>
      <button type="submit">Add transaction</button>
    </form>
  );
}
