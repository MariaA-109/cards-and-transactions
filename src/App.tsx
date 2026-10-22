import "./App.css";
import { Flex, Title } from "@mantine/core";

function App() {
  return (
    <Flex
      className="App"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      m="xl"
    >
      <Title>Cards & Transactions</Title>
    </Flex>
  );
}

export default App;
