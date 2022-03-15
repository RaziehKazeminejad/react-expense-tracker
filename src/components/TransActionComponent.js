import React, { useState, useEffect } from 'react';

export default function TransActionComponent(props) {
  const [searchItem, setSearchItem] = useState('');
  const [filteredTnx, setFilteredTnx] = useState(props.transaction);

  const filteredTransactions = (search) => {
    if (!search || search === '') {
      setFilteredTnx(props.transaction);
      return;
    }
    const filtered = props.transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransactions(e.target.value);
  };

  useEffect(() => {
    filteredTransactions(searchItem);
  }, [props.transaction]);

  if(!props.transaction.length) return <p>Add Your Expense / Income !</p>

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={searchHandler}
        className="search"
        placeholder='Search...'
      />
      {filteredTnx.length ? (
        filteredTnx.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{ borderRight: t.type === 'expense' && '10px solid red' }}
          >
            <span>{t.desc}</span>
            <span>{t.amount}&#65284;</span>
          </div>
        ))
      ) : (
        <p>No Item Matches!</p>
      )}
    </div>
  );
}
