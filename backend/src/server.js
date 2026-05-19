const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const errorMiddleware = require("../middlewares/errorMiddleware");

const volunteerRoutes = require("../routes/volunteerRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/volunteers", volunteerRoutes);

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    message: "API funcionando"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

app.use(errorMiddleware);