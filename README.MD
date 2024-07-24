# Expense Tracker App

## Introduction
The Expense Tracker App is a web application that helps users manage their personal finances by tracking their income and expenses. Built with the MERN stack (MongoDB, Express.js, React, and Node.js), this app provides a simple and intuitive interface for monitoring your financial transactions.

![Screenshot](./client/src/imgs/Screenshot%20(243).png)

## Features
- User authentication (register and login)
- Add, edit, and delete income and expense transactions
- View a summary of your financial status
- Filter transactions by date and category
- Responsive design for mobile and desktop use


### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/Prajyot5015/expense-tracker.git
    cd expense-tracker-app
    ```

2. Install dependencies for both server and client:
    ```sh
    cd server
    npm install
    cd ../client
    npm install
    ```

3. Create a `.env` file in the `server` directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the development server:
    ```sh
    cd server
    npm run dev
    cd ../client
    npm start
    ```

## Usage
1. Register a new account or log in with existing credentials.
2. Navigate to the dashboard to view your financial summary.
3. Add new transactions by specifying the amount, category, and date.
4. Edit or delete existing transactions as needed.
5. Use filters to view transactions by specific criteria.

## API Endpoints
### User
- `POST /api/signup` - Register a new user
- `POST /api/login` - Log in a user

### Transactions
- `GET /api/transactions` - Get all transactions for the logged-in user
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/:id` - Update an existing transaction
- `DELETE /api/transactions/:id` - Delete a transaction
