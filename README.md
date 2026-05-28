<h1 align="center">Médicos & Dentistas</h1>

<p align="center">
Modern fullstack healthcare platform built with scalable architecture and real backend integration.
</p>

<p align="center">
  <strong>From concept to code.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/REST_API-Professional-blue?style=for-the-badge"/>
</p>

---

# About The Project

Médicos & Dentistas is a fullstack healthcare application developed with focus on:

- scalable architecture
- frontend/backend integration
- REST APIs
- responsive interfaces
- real database persistence
- professional development practices

The platform simulates an institutional healthcare environment where volunteers can register through an integrated API connected to PostgreSQL.

---

# Technical Highlights

## Fullstack Architecture

```txt
React Frontend
↓
Axios API Layer
↓
Express REST API
↓
Prisma ORM
↓
PostgreSQL Database
````

---

## Frontend Features

* Responsive interface
* Institutional landing page
* Volunteer registration page
* Loading states
* Visual feedback handling
* Reusable components
* API integration with Axios

---

## Backend Features

* REST API architecture
* Volunteer registration system
* PostgreSQL integration
* Data validation with Zod
* Global error middleware
* HTTP status handling
* Layered architecture
* Real data persistence

---

# Technologies

## Frontend

```txt
React
Vite
JavaScript (ES6+)
SCSS Modules
Axios
React Router DOM
```

---

## Backend

```txt
Node.js
Express
Prisma ORM
PostgreSQL
Zod
Helmet
CORS
Nodemon
```

---

# Project Structure

```bash
medicos-dentistas-fullstack/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Concepts Applied

## Frontend

* Component-based architecture
* Async state handling
* API consumption
* Error handling
* Responsive design
* Scalable organization

---

## Backend

* REST API
* Middleware Pattern
* Layered Architecture
* ORM Integration
* Schema Validation
* Error Handling
* Async/Await
* Database Migrations

---

# Screenshots

## Home

<p align="center">
  <img src="./frontend/src/assets/Screenshots/home.png" width="900"/>
</p>

---

## Volunteer Page

<p align="center">
  <img src="./frontend/src/assets/Screenshots/voluntario.png" width="900"/>
</p>

---

# Running The Project

## Clone the repository

```bash
git clone https://github.com/Hossomii/medicos-dentistas-fullstack.git
```

---

# Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside backend:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/medicos_dentistas"
PORT=3000
```

---

# API Routes

## Health Check

```http
GET /health
```

---

## Create Volunteer

```http
POST /volunteers
```

---

## List Volunteers

```http
GET /volunteers
```

---

# Database Model

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

# Roadmap

* [x] React frontend
* [x] Express backend
* [x] PostgreSQL integration
* [x] Prisma ORM
* [x] Form validation
* [x] Global error middleware
* [x] Fullstack integration
* [ ] Authentication system
* [ ] Admin dashboard
* [ ] Email system
* [ ] Backend deployment
* [ ] Automated tests

---

# Frontend Deploy

```txt
https://medicos-e-dentistas-zeta.vercel.app/
```

---

# Current Focus

* Backend architecture
* API scalability
* Fullstack integration
* Professional code organization
* Real-world application structure

---

# Author

## Anthony (Hossomii) Bugs

Focused on:

* Backend Development
* Fullstack Applications
* REST APIs
* React & Node.js
* PostgreSQL
* Scalable architectures

<p align="left">
  <a href="https://www.linkedin.com/in/anthony-silveira-bugs/">
    <img src="https://img.shields.io/badge/LinkedIn-Anthony_Hossomi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
</p>

---

<p align="center">
  <strong>Médicos & Dentistas</strong><br/>
  Built with React, Node.js & PostgreSQL
</p>
