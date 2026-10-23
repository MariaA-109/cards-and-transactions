import { render, screen } from "@testing-library/react";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const renderApp = () =>
  render(
    <MantineProvider>
      <App />
    </MantineProvider>,
  );

test("should render the headline", () => {
  renderApp();
  const headline = screen.getByText(/Cards & Transactions/i);
  expect(headline).toBeInTheDocument();
});

test("transactions of the first card", async () => {
  renderApp();
  expect(await screen.findByText("Snack")).toBeInTheDocument();
});
