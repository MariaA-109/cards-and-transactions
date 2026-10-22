import { Paper, Text } from "@mantine/core";
import type { Card } from "../types";
import { SELECTED_COLOR } from "../constants";

type CardItemProps = {
  card: Card;
  isSelected: boolean;
  onSelect: (cardId: string) => void;
};

export function CardItem({ card, isSelected, onSelect }: CardItemProps) {
  return (
    <Paper
      shadow="md"
      radius="lg"
      w={340}
      h={214}
      bg={isSelected ? SELECTED_COLOR : "gray.2"}
      p="lg"
      onClick={() => onSelect(card.id)}
      aria-pressed={isSelected}
    >
      <Text fw={isSelected ? 700 : 400} ta="left">
        {" "}
        {card.description}
      </Text>
      <Text ta="left" mt="md">
        {card.id}
      </Text>
    </Paper>
  );
}
