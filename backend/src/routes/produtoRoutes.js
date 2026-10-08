const express = require("express");

const {

  listarProdutos,
  cadastrarProduto,
  alterarProduto,
  excluirProduto

} = require("../controllers/produtoController");

const router = express.Router();

router.get("/", listarProdutos);

router.post("/", cadastrarProduto);

router.put("/:id", alterarProduto);

router.delete("/:id", excluirProduto);

module.exports = router;