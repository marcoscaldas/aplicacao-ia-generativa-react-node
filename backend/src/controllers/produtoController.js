const produtos = require("../data/produtos");

function listarProdutos(req, res) {
  res.json(produtos);
}

function cadastrarProduto(req, res) {
  const { nome, descricao, preco } = req.body;

  if (!nome || preco === undefined) {
    return res.status(400).json({
      mensagem: "Nome e preço são obrigatórios."
    });
  }

  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    nome,
    descricao: descricao || "",
    preco: Number(preco)
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
}




function alterarProduto(req, res){

  const id = Number(req.params.id) 
  const { nome, descricao, preco } = req.body;

  const produto = produtos.find(produto => produto.id === id)

  if(!produto){
    return res.status(404).json({
      mensagem: 'Produto não encontrado'
    })  
  }

  if(!nome || !preco === undefined){      
    return res.status(400).json({
      mensagem: 'Nome e preço são obrigatórios.'
    });
  }

  produto.nome = nome;
  produto.descricao = descricao || ""
  produto.preco = Number(preco)

  res.json(produto)

}


function excluirProduto(req, res){

  const id = Number(req.params.id) 

  const indice = produtos.findIndex(produto => produto.id === id)

  if(indice === -1){

    return res.status(404).json({
      mensagem: 'Produto não encontrado.'
    })
  }


  produtos.splice(indice, 1)

  res.status(200).json({
    mensagem: 'Produto excluído com sucesso.'
  });
}


module.exports = {
  listarProdutos,
  cadastrarProduto,
  alterarProduto,
  excluirProduto
};
