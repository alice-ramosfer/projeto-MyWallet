# 📌 MyWallet - Backend

Este é o **backend** da aplicação **MyWallet**, responsável por autenticação de usuários, registro de transações financeiras (depósitos e retiradas) e integração com banco de dados **MongoDB**.

O backend foi desenvolvido em **Node.js** com **Express**, utilizando **MongoDB Atlas** como banco de dados.

---

## 🔧 Tecnologias utilizadas

- Node.js  
- Express  
- MongoDB Atlas  
- JWT (JSON Web Token)  
- bcrypt  
- Joi (validação de schemas)  
- dotenv  

---

## 📂 Estrutura de pastas

MyWallet-backend/
│── src/
│   ├── config/         # Conexão com MongoDB
│   ├── controllers/    # Lógica das rotas
│   ├── middlewares/    # Middlewares (validações, token, schemas)
│   ├── routers/        # Definição de rotas
│   ├── schemas/        # Schemas do Joi
│
│── app.js              # Ponto de entrada da aplicação
│── .env                # Variáveis de ambiente
│── package.json
│── README.md

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório
git clone https://github.com/alice-ramosfer/projeto-MyWallet.git
cd mywallet-backend

### 2. Instale as dependências
npm install

### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com:

PORT=5000
DATABASE_URL=sua-string-de-conexao-mongodb
JWT=sua_chave_secreta

### 4. Rode o servidor
npm run dev
ou
npm start

O servidor iniciará em:
👉 http://localhost:5000

---

## 🔑 Endpoints da API

### 🔐 Autenticação
- POST /sign-up → Cria um novo usuário  
  Body:
  { "name": "Alice", "email": "alice@email.com", "senha": "123456" }

- POST /sign-in → Autentica usuário e retorna token  
  Body:
  { "email": "alice@email.com", "senha": "123456" }

  Response:
  { "token": "jwt_token_aqui" }

---

### 💰 Transações
- POST /transactions → Cria nova transação (deposit ou withdraw)  
  Headers: Authorization: Bearer <token>  
  Body:
  { "value": 100, "description": "Salário", "type": "deposit" }

- GET /transactions/:id → Lista transações do usuário  
  Headers: Authorization: Bearer <token>

---

## 📦 Deploy

🔗 O backend está deployado no Render:  
👉 https://projeto-mywallet.onrender.com

---
