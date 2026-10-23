import { Stack, Text, Paper, Group } from "@mantine/core";
import type { Transaction } from "../types";
import { LIST_COLOR } from "../constants";
import { useHover } from "@mantine/hooks";
import { TransactionItem } from "./TransactionItem";

type TransactionListProps = {
  transactions: Transaction[];
};

export function TransactionList({ transactions }: TransactionListProps) {
  if (transactions.length === 0) {
    return <Text c="dimmed">No transactions found.</Text>;
  }

  return (
    <Stack component="ul" gap="xs" p={0} style={{ listStyle: "none" }} w="100%">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Stack>
  );
}
