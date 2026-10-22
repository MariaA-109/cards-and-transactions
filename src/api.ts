import cardsData from "./data/cards.json";
import transactionsData from "./data/transactions.json";
import type { Card, Transaction } from "./types";

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchCards(): Promise<Card[]> {
  await delay();
  return cardsData;
}

export async function fetchTransactions(
  cardId: string,
): Promise<Transaction[]> {
  await delay();
  const data: Record<string, Transaction[]> = transactionsData;
  return data[cardId] ?? [];
}
