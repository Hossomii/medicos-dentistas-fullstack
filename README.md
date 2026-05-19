# 🩺 Médicos & Dentistas

Aplicação fullstack desenvolvida com foco em arquitetura moderna, integração entre frontend e backend, persistência de dados e boas práticas de desenvolvimento.

O projeto simula uma plataforma institucional voltada para impacto social na área da saúde, permitindo cadastro de voluntários através de uma API REST integrada a um banco PostgreSQL.

---

# 🚀 Tecnologias Utilizadas

## Frontend
- React.js
- Vite
- JavaScript (ES6+)
- SCSS Modules
- Axios
- React Router DOM

## Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Zod
- Helmet
- CORS
- Nodemon

---

# 🧱 Arquitetura da Aplicação

```txt
Frontend React
↓
Axios API Layer
↓
Express REST API
↓
Prisma ORM
↓
PostgreSQL
```

---

# ✨ Funcionalidades

## Frontend
- Interface responsiva
- Página institucional
- Página de voluntariado
- Feedback visual de envio
- Estados de loading
- Tratamento visual de erros
- Componentização reutilizável

## Backend
- API REST
- Cadastro de voluntários
- Integração com PostgreSQL
- Validação de dados com Zod
- Middleware global de erros
- Tratamento de status HTTP
- Arquitetura em camadas
- Persistência real de dados

---

# 🛠️ Diferenciais Técnicos

- 📦 Arquitetura Fullstack organizada
- 🧩 Separação de responsabilidades
- 🧠 Backend estruturado em camadas
- 🗄️ Persistência com PostgreSQL
- 🔒 Validação profissional com Zod
- ⚡ Integração React + API REST
- 🚨 Middleware global de erros
- 📱 Responsividade para mobile e desktop
- 🧱 Estrutura preparada para escalabilidade
- 🔄 Sistema de migrations com Prisma

---

# 📂 Estrutura do Projeto

```bash
medicos-dentistas-fullstack/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── prisma/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── src/
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

# 🧠 Conceitos Aplicados

## Frontend
- Componentização
- Estado assíncrono
- Integração com API
- Tratamento de loading/error
- Responsividade
- Organização escalável

## Backend
- REST API
- Middleware Pattern
- Layered Architecture
- ORM
- Schema Validation
- Error Handling
- Async/Await
- Database Migrations

---

# 📸 Demonstração

## 🏠 Home
![Home](./frontend/src/assets/Screenshots/home.png)

## 🤝 Página de Voluntariado
![Voluntário](./frontend/src/assets/Screenshots/voluntario.png)

---

# ⚙️ Como Rodar o Projeto

# 1️⃣ Clone o repositório

```bash
git clone https://github.com/Hossomii/medicos-dentistas-fullstack.git
```

---

# 2️⃣ Entre na pasta

```bash
cd medicos-dentistas-fullstack
```

---

# 🔧 Backend

## Acesse a pasta backend

```bash
cd backend
```

## Instale as dependências

```bash
npm install
```

## Configure o .env

Crie um arquivo `.env` baseado no `.env.example`

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/medicos_dentistas"
PORT=3000
```

## Execute as migrations

```bash
npx prisma migrate dev
```

## Rode o servidor

```bash
npm run dev
```

---

# 💻 Frontend

## Acesse a pasta frontend

```bash
cd frontend
```

## Instale as dependências

```bash
npm install
```

## Rode a aplicação

```bash
npm run dev
```

---

# 🌐 Rotas da API

## Health Check

```http
GET /health
```

---

## Criar voluntário

```http
POST /volunteers
```

### Body

```json
{
  "name": "Anthony",
  "email": "anthony@email.com",
  "phone": "11999999999",
  "message": "Quero ajudar como voluntário"
}
```

---

## Listar voluntários

```http
GET /volunteers
```

---

# 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com Prisma ORM.

## Model atual

```prisma
model Volunteer {
  id         Int      @id @default(autoincrement())
  name       String
  email      String   @unique
  phone      String
  message    String
  createdAt  DateTime @default(now())
}
```

---

# 📚 Aprendizados

Este projeto foi essencial para consolidar conhecimentos em:

- Integração frontend/backend
- Arquitetura fullstack
- APIs REST
- PostgreSQL
- Prisma ORM
- Validação de dados
- Tratamento de erros
- Persistência real
- Estrutura escalável
- Organização profissional de código

---

# 🚀 Roadmap

- [x] Frontend React
- [x] Backend Express
- [x] PostgreSQL integration
- [x] Prisma ORM
- [x] Form validation
- [x] Middleware global de erros
- [x] Integração fullstack
- [ ] Sistema de autenticação
- [ ] Dashboard administrativo
- [ ] Painel de gerenciamento
- [ ] Sistema de emails
- [ ] Deploy do backend
- [ ] Testes automatizados

---

# 🌐 Deploy Frontend

```txt
https://medicos-e-dentistas-zeta.vercel.app/
```

---

# 👨‍💻 Autor

## Anthony Hossomi

Desenvolvedor focado em:
- Frontend
- Backend
- Arquitetura Fullstack
- React
- Node.js
- PostgreSQL
- Experiências interativas

🔗 LinkedIn:
https://www.linkedin.com/in/anthony-silveira-bugs/

🔗 GitHub:
https://github.com/Hossomii

---

# 📌 Status do Projeto

✅ Em desenvolvimento ativo  
🚀 Evoluindo continuamente para uma aplicação fullstack completa
