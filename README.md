# Cards & Transactions Overview – Frontend Exercise

This exercise is a small frontend application that simulates a banking-style overview page.

The goal is to build a page where a user can view payment cards, select one of them, and inspect its transactions. The user must also be able to filter the transactions by amount.

A rough interface sketch is included in the repository to illustrate the intended layout and interaction. The design is only guidance — a pixel-perfect implementation is **not required**.

**Expected time investment:** ~4 hours

![image](docs/cardTransactionDesigns.png)


## Functional Requirements

### Card Selection

* Display a list of payment cards
* The user can select one of the cards
* The selected card becomes the active context of the page

### Transactions

* When a card is selected, show the transactions belonging to that card
* The transactions should visually relate to the selected card (for example: matching background color or another clear visual connection)

### Filtering

* A numeric filter field must exist between the cards and the transactions list
* The user can enter an amount
* Only transactions with an amount **greater than or equal to** the entered value remain visible
* When the user switches to another card, the filter input resets

## Technical Setup

Use the framework relevant to the role you applied for (e.g. React, Vue, etc.).

You may:

* use the included starter project, or
* create your own setup from scratch

You are free to add any libraries you consider appropriate (state management, routing, testing tools, UI helpers, etc.).

If you use the starter project:

```bash
yarn
```

## Data Source

The repository contains example data inside `src/data` as JSON files.

You may use this data as the backing data for the application.
However, the application should be implemented as if the data were loaded from an external API rather than directly from static imports.

In other words, structure your solution so that replacing the local data with real network requests would not require major changes to the application architecture.

## General Expectations

We are interested in how you approach implementing a feature in a small application.

If you complete the core requirements early, you are welcome to extend the solution further or refine parts of the implementation. Additional improvements are optional and should not be necessary to submit a valid solution.

### Junior

A working implementation that follows the described behavior and is reasonably understandable.

### Mid-Level

A well-structured and maintainable solution with clear organization and thoughtful implementation choices.

### Senior

A solution that reflects engineering maturity and consideration for long-term maintainability and scalability.

## What to Include in Your Submission

## Explanation:

  # How to run the project:
    * git clone https://github.com/MariaA-109/cards-and-transactions.git
    * cd cards-and-transactions
    * yarn
    * yarn dev
  To run the tests: `yarn test`.
  # Assumptions or tradeoffs you made:
    - **Simulated API:** `src/api.ts` exposes async functions (`fetchCards`, `fetchTransactions`) with a small delay. The components never import the JSON directly, so replacing it with real requests would only change that file.
    - **Mantine:** I used it because I already work with it and it saves time on basic components.
    - **Default card:** the first card is selected when the page loads, so the page is not empty.
    - **Filter:** it keeps transactions with an amount greater than or equal to the value. It accepts negative and decimal values, because the data contains both (a refund of -100). Letters and symbols are not accepted by the input. The filter resets when the card changes.
    - **Currency:** amounts are shown without a currency symbol, because the data does not include one.
    ## Testing
    I added one basic test to set up the testing environment (Vitest and Testing Library) and show how I would test the app. I have not written automated tests in a project before, and I would like to learn it on the job.

  ## What you would improve with more time
    - More tests: the filter, the card switching and the error states.
    - A responsive layout.
    - An error message with a retry button.
    - Validation of the API responses with Zod.

