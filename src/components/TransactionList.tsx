import { Stack, Text, Paper, Group } from "@mantine/core";
import type { Transaction } from "../types";
import { LIST_COLOR } from "../constants";

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
        <Paper
          component="li"
          key={transaction.id}
          withBorder
          p="sm"
          bg={LIST_COLOR}
        >
          <Group justify="space-between" key={transaction.id}>
            <Text>{transaction.description}</Text>
            <Text fw={700}>{transaction.amount.toFixed(2)}</Text>
          </Group>
        </Paper>
      ))}
    </Stack>
  );
}
