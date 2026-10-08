require("dotenv").config()
const conectarBanco = require('./config/database');

const express = require("express");
const produtoRoutes = require("./routes/produtoRoutes");
const iaRoutes = require('./routes/iaRoutes')


conectarBanco()
const app = express();
const PORT = 3000;

// Permite ao Express receber JSON enviado pelo front-end.
app.use(express.json());

app.use("/api/produtos", produtoRoutes);

app.use("/api/ia", iaRoutes);



app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});
