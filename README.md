# 💱 Currency Exchange App

A simple single-page currency converter with history, built using React, Vite, Node, Express, Sequelize, and PostgreSQL.

## 🌐 Live Demo

Try it here: [basic-currency-exchange-1.onrender.com](https://basic-currency-exchange-1.onrender.com/)

## 🚀 Features

- Real-time currency conversion (powered by [ExchangeRate-API](https://open.er-api.com))
- Dropdowns with currency symbols
- Jumbo display of conversion result
- Paginated history stored in PostgreSQL
- Full-stack app built in ~50 minutes

## 🛠️ Tech Stack

| Frontend | Backend         | Database   |
|----------|------------------|------------|
| React (Vite) | Node.js + Express | PostgreSQL |
| Axios        | Sequelize ORM     | pg         |

## 🧪 Running Locally

```bash
# Clone and install
git clone https://github.com/yourname/currency-exchange
cd currency-exchange

# Setup server
cd currency-server
npm install
# Setup DB: psql, migrate
npx sequelize-cli db:migrate
npm start

# Setup client
cd ../currency-client
npm install
npm run dev
