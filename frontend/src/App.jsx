import { use, useEffect, useState } from "react";
import Header from "./components/Header";
import FormProduto from "./components/FormProduto";
import ListaProdutos from "./components/ListaProdutos";

import Footer from "./components/Footer";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const [busca, setBusca] = useState("");


  //ALTERADO:   ESTADO PARA EDICAO

  const [produtoEmEdicao, setProdutoemEdicao] = useState(null);

  // Busca os produtos quando a aplicação é carregada.
  async function carregarProdutos() {
    try {
      const resposta = await fetch("/api/produtos");
      const dados = await resposta.json();
      setProdutos(dados);
    } catch (erro){
      setMensagem("Não foi possível carregar os produtos.", erro);
    }
  }


  useEffect(() => {
    carregarProdutos();
  }, []);

  async function cadastrarProduto(produto) {
    setMensagem("");

    try {
      const resposta = await fetch("/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      });

      if (!resposta.ok) {
        const erro = await resposta.json();
        setMensagem(erro.mensagem);
        return;
      }

      const novoProduto = await resposta.json();

      // Atualiza o estado sem precisar recarregar a página.
      setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto]);
      setMensagem("Produto cadastrado com sucesso.");

      setTimeout(()=> { setMensagem("") }, 3000)


    } catch (erro){
      setMensagem("Não foi possível cadastrar o produto.", erro);
    }
  }


  async function alterarProduto(produto){

    setMensagem("")

    try {

      const resposta = await fetch(`/api/produtos/${produto.id}`,{

        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify(produto)

      })    
      
      if(!resposta.ok){

        const erro = await resposta.json()
        setMensagem(erro.mensagem)
        return
      }

      const produtoalterado = await resposta.json()

      setProdutos((produtosAtuais)=>

        produtosAtuais.map((item)=>
          item.id === produtoalterado.id ? produtoalterado : item

        )
      )

      setProdutoemEdicao(null)
      setMensagem('Produto alterado com sucesso');

    } catch (erro) {
      setMensagem('Não foi possível alterar o produto', erro)
      
    }
  }


  async function excluirProduto(id){

    setMensagem("")

    try {

      const resposta = await fetch(`/api/produtos/${id}`, {
        method: 'DELETE'
      })

      
      if(!resposta.ok){

        const erro = await resposta.json()
        setMensagem(erro.mensagem)
        return
      }

      setProdutos((produtosAtuais)=> 
        produtosAtuais.filter((produto)=> produto.id !==  id)
      
      )

      if(produtoEmEdicao?.id === id){
        setProdutoemEdicao(null)
      }

      setMensagem('Produto excluído com sucesso')
      
    } catch (erro) {
      setMensagem('Não foi possível excluir o produto', erro)     
      
    }

  }

  const produtosFiltrados = produtos.filter((produto)=> 

    produto.nome.toLowerCase().includes(busca.toLowerCase())

  );   


  return (
    <>
      <Header />

      <main className="container">

        <section className="painel-resumo">
          <div>
            <span className="tag">PROJETO INTEGRADOR</span>
            <h2>Evolução do Catálogo</h2>

            <p>
              Front-end em React conectado à API do projeto
            </p>
          </div>

          <div className="contador-produtos">
            <span>Total de Produtos</span>
            <strong>{produtos.length}</strong>
          </div>
        </section>




        <FormProduto
        
          aoCadastrar={cadastrarProduto}
          aoAlterar={alterarProduto}
          produtoEmEdicao={produtoEmEdicao}
          aoCancelarEdicao={()=> setProdutoemEdicao(null)}
        
        />

        {mensagem && <p className="mensagem"> {mensagem}</p>}

        <section className="area-busca">

          <div>
            <span className="tag">BUSCA RÁPIDA</span>
            <h2>Encontre um produto</h2>
          </div>

          <input
            type="text"
            value={busca}
            onChange={(evento)=> setBusca(evento.target.value)}
            placeholder="Digite o nome do produto..."
          />
        </section>

        <ListaProdutos
        
          produtos={produtosFiltrados}
          busca ={busca}
          aoEditar={setProdutoemEdicao}
          aoExcluir={excluirProduto}
        
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
