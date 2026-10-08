const Produto = require('../models/Produto')

//LISTAR
async function listarProdutos(req, res){

    try{

        const produtos = await Produto.find().sort({createdAt: 1});
        res.json(produtos);

    }catch(erro){
        console.error(erro);

        res.status(500).json({
            mensagem: "Não foi possível carregar os produtos"
        });
    }
}
//CADASTRAR
async function cadastrarProduto(req, res){


    try{
        const {nome, descricao, categoria, tags, resumo, preco} = req.body

        const novoProduto = await Produto.create({

            nome,
            descricao: descricao || "",
            categoria: categoria || "",

            tags: Array.isArray(tags) ? tags: [],

            resumo: resumo || "",
            preco: Number(preco)
        });

        res.status(201).json(novoProduto);
    }catch(erro){

        console.error(erro);

        res.status(500).json({
            mensagem: 'Não foi possível cadastrar o produto'
        })
    }

}

//ALTERAR
async function alterarProduto(req, res){

    try{
        const {nome, descricao, categoria, tags, resumo, preco} = req.body

        const produtoAlterado = await Produto.findByIdAndUpdate(


            req.params.id,
            {
               nome,
               descricao,
               categoria,
               tags,
               resumo,
               preco : Number(preco)
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if(!produtoAlterado){

            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            })
        }

        res.json(produtoAlterado);

    }catch(erro){
        console.error(erro)
         res.status(500).json({
            mensagem: 'Não foi possível alterar o produto'
        })
    }
}

//EXCLUIR
async function excluirProduto(req, res){

    try{

        const produtoExcluido = await Produto.findByIdAndDelete(req.params.id);

         if(!produtoExcluido){

            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            })
        }
        res.json({
            mensagem: 'Produto excluido com sucesso.'
        });

    }catch(erro){

        console.error(erro)
         res.status(500).json({
            mensagem: 'Não foi possível excluir o produto'
        });
    }
}

module.exports ={
    listarProdutos,
    cadastrarProduto,
    alterarProduto,
    excluirProduto

}