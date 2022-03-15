import React, { useState } from 'react';

export default function OverViewComponent({ income, expense, addTransaction }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button
          className={`btn ${isShow && 'cancelBtn'}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? 'Cancel' : 'Add'}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: 'red' }}>&#65284;{expense}</span>
        </div>
        <div className="expenseBox">
          Income <span>&#65284;{income}</span>{' '}
        </div>
      </div>
    </div>
  );
}

function TransActionForm({ addTransaction, setIsShow }) {
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
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="fotmValueInput"
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="description ..."
      />
      <input
        className="fotmValueInput"
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="amount"
      />
      <div className="radioBtn">
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValues.type === 'expense'}
          onChange={changeHandler}
        />
        <span>Expense</span>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValues.type === 'income'}
          onChange={changeHandler}
        />
        <span>Income</span>
      </div>
      <button className="btn primary" type="submit">
        Add transaction
      </button>
    </form>
  );
}
