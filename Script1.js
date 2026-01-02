// JavaScript source code
// data/transactionsStore.js
let transactions = [
  // sample
  { id: 1, type: 'expense', title: 'Coffee', amount: 4.5, date: new Date().toISOString() },
  { id: 2, type: 'income', title: 'Pocket money', amount: 50, date: new Date().toISOString() },
];

let idCounter = 3;

export function getTransactions() {
  return transactions;
}

export function addTransaction({ type, title, amount }) {
  const tx = {
    id: idCounter++,
    type,
    title,
    amount: Number(amount),
    date: new Date().toISOString(),
  };
  transactions = [tx, ...transactions];
  return tx;
}

export function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
}

export function getSummary() {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  return {
    income,
    expenses,
    balance: income - expenses,
  };
}
