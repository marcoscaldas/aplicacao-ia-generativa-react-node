import { useEffect, useState } from "react";

function FormProduto({ aoCadastrar, aoAlterar, produtoEmEdicao, aoCancelarEdicao }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");


  const [erro, setErro] = useState("")

  //carregar produto no form

  useEffect(()=>{

    if(produtoEmEdicao){

      setNome(produtoEmEdicao.nome)
      setDescricao(produtoEmEdicao.descricao || "")
      setPreco(produtoEmEdicao.preco)
    }

  }, [produtoEmEdicao] );


  function limparFormulario(){

    setNome("");
    setDescricao("");
    setPreco("");
    setErro("")

  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (!nome.trim()) {
      setErro("Digite o nome do produto.")
      return;
    }

    if(!preco || Number(preco) <= 0){
      setErro("O preço deve ser maior que zero")
      return;
    }

    setErro("");

    const produto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: Number(preco)
    }


    //CADASTRAR OU ALTERAR

    if(produtoEmEdicao){
      aoAlterar({
        id: produtoEmEdicao.id,
        ...produto
      })
    }else{
      aoCadastrar(produto)
    }

    // aoCadastrar({
    //   nome: nome.trim(),
    //   descricao: descricao.trim(),
    //   preco: Number(preco)
    // });

    limparFormulario()
  }

  function cancelarEdicao(){
    limparFormulario()
    aoCancelarEdicao()

  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>

      <div className="titulo-formulario">


        <div>
          <span className="tag">{produtoEmEdicao ? 'EDITANDO ITEM' : 'NOVO ITEM'}</span>
          <h2>{produtoEmEdicao ? 'Alterar produto' : 'Cadastrar produto'}</h2>
        </div>
        <span className="status-dot">ONLINE</span>

      </div>  



      <div className="campos-formulario">

        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Ex.: Teclado"
          />
        </label>

        <label>
          Descrição
          <input
            type="text"
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            placeholder="Descrição do produto"
          />
        </label>

        <label>
          Preço
          <input
            type="number"
            min="0"
            step="0.01"
            value={preco}
            onChange={(evento) => setPreco(evento.target.value)}
            placeholder="0,00"
          />
        </label>
      </div>

      {/* ALTERADO: BOTOES DE CADASTRO/EDICAO */}

        <div className="acoes-formulario">

          <button type="submit"> 
            {produtoEmEdicao ? 'Salvar alterações': '+ Cadastrar produto'}
          </button>

          {produtoEmEdicao &&(

            <button type="button" className="botao-cancelar" onClick={cancelarEdicao}>
              Cancelar
            </button>
          )}
        </div>         
          
          {erro && <p className="mensagem-erro">{erro}</p>}
      </form>
    
  );
}

export default FormProduto;
