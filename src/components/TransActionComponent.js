import React from 'react';

export default function TransActionComponent({ transaction }) {
  return (
    <div>
      {transaction.map((t) => (
        <div key={t.id}>{t.desc}</div>
      ))}
    </div>
  );
}
