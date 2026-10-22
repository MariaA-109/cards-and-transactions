import { useState, useEffect } from "react";
import "./App.css";
import { Flex, Title, Group, Text, Loader, Alert, Stack } from "@mantine/core";
import { fetchCards, fetchTransactions } from "./api";
import type { Card, Transaction } from "./types";
import { CardItem } from "./components/CardItem";
import { TransactionList } from "./components/TransactionList";

type Status = "loading" | "success" | "error";

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [transactionsStatus, setTransactionsStatus] =
    useState<Status>("loading");

  useEffect(() => {
    async function loadCards() {
      try {
        const cardsData = await fetchCards();
        setCards(cardsData);
        setSelectedCardId(cardsData[0]?.id ?? null);
        setStatus("success");
      } catch (error) {
        console.error("Error fetching card data:", error);
        setStatus("error");
      }
    }
    loadCards();
  }, []);

  useEffect(() => {
    if (!selectedCardId) return;

    async function loadTransactions(cardId: string) {
      setTransactionsStatus("loading");
      try {
        const transactionsData = await fetchTransactions(cardId);
        setTransactions(transactionsData);
        setTransactionsStatus("success");
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactionsStatus("error");
      }
    }
    loadTransactions(selectedCardId);
  }, [selectedCardId]);

  return (
    <Stack
      className="App"
      gap="md"
      m="auto"
      w="fit-content"
      maw="100%"
      align="center"
      justify="center"
    >
      <Title>Cards & Transactions</Title>
      {status === "loading" && (
        <Group justify="center" gap="xs" py="xl">
          <Loader aria-label="Loading cards" />
          <Text c="dimmed" size="sm">
            Your cards are being loaded. Please wait.
          </Text>
        </Group>
      )}

      {status === "error" && (
        <Alert color="red" title="Something went wrong">
          The cards could not be loaded. Please try again.
        </Alert>
      )}

      {status === "success" && (
        <Flex gap="xl" mt="xl">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              isSelected={card.id === selectedCardId}
              onSelect={setSelectedCardId}
            />
          ))}
        </Flex>
      )}
      {status === "success" && !selectedCardId && (
        <Text c="dimmed">Select a card to see its transactions.</Text>
      )}
      {selectedCardId && transactionsStatus === "loading" && (
        <Loader aria-label="Loading transactions" />
      )}
      {selectedCardId && transactionsStatus === "error" && (
        <Alert color="red" title="Something went wrong">
          The transactions could not be loaded. Please try again.
        </Alert>
      )}
      {selectedCardId && transactionsStatus === "success" && (
        <TransactionList transactions={transactions} />
      )}
    </Stack>
  );
}

export default App;
