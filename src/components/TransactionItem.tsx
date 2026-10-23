import { Group, Paper, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { HOVER_COLOR, LIST_COLOR } from "../constants";
import type { Transaction } from "../types";

type TransactionItemProps = {
  transaction: Transaction;
};

export function TransactionItem({ transaction }: TransactionItemProps) {
  const { hovered, ref } = useHover();

  return (
    <Paper
      component="li"
      ref={ref}
      p="sm"
      radius="md"
      bg={hovered ? HOVER_COLOR : LIST_COLOR}
    >
      <Group justify="space-between">
        <Text>{transaction.description}</Text>
        <Text fw={700}>{transaction.amount.toFixed(2)}</Text>
      </Group>
    </Paper>
  );
}
