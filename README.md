# Transaction Client Module

This project provides a client module for broadcasting transactions and monitoring their status using an HTTP server.

## Features

- **Broadcast Transaction**: Construct a JSON payload and send a POST request to broadcast a transaction.
- **Monitor Transaction Status**: Utilize the transaction hash obtained from the response to periodically issue GET requests to check the transaction status until it changes from "PENDING".
- **Error Handling**: Implement error handling for network requests and log appropriate error messages.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/superjaru/Transaction-Broadcasting-and-Monitoring-Client.git
   cd Transaction-Broadcasting-and-Monitoring-Client
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```

   **After installing Axios, run the test script to execute the example usage:**

   ```bash
   npm test
   ```

## Usage

- **TransactionClient Module :**
  The core functionality is defined in TransactionClient.js. This file contains the logic for broadcasting a transaction and monitoring its status.

- **Example Script :**
  index.js is an example script that demonstrates how to use the TransactionClient module. This example shows how the module can be integrated into another application.

- **Handling Transaction Status :**

  - CONFIRMED: The transaction has been processed and confirmed. No further action is needed.
  - FAILED: The transaction failed to process. Log the message and end the execution.
  - PENDING: The transaction is awaiting processing. The script will continue to check the status every 5 seconds until it changes.
  - DNE: The transaction does not exist. Log the message and end the execution.

    **When you run index.js, it will broadcast the transaction and then continuously monitor its status until it changes from "PENDING", logging the final status to the console.**

- **Design Decisions, Trade-offs, and Assumptions**

* Design Decisions

  - Modular Structure: Utilize TransactionClient module for clear separation of concerns and reusability. Using async/await for handling HTTP requests asynchronously.

* Trade-offs
  - Dependency on Axios: Rely on Axios for strong HTTP handling, ensuring reliable server communication.
* Assumptions
  - Transaction Statuses: Transactions are assumed to have states like CONFIRMED, FAILED, PENDING, and DNE based on standard processing scenarios.
