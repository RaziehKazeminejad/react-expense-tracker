import React from 'react';

export default function TransActionComponent({ transaction }) {
  return (
    <div>
      {transaction.length &&
        transaction.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{ borderRight: t.type === 'expense' && '10px solid red' }}
          >
            <span>{t.desc}</span>
            <span>{t.amount}&#65284;</span>
          </div>
        ))}
    </div>
  );
}
