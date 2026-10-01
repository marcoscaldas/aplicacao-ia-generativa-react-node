function Produto({ produto, aoEditar, aoExcluir }) {

  return (
   
    <article className="card">

      <div className="card-topo">

        <span className="codigo-produto"> ITEM #{produto.id}</span>
        <span className="disponivel">DISPONÍVEL</span>
      </div>

      <h2>{produto.nome}</h2>
      <p>{produto.descricao || "Produto sem descrição cadastrada." }</p>

      <div className="preco-produto">
        <span>PREÇO</span>

        <strong>
          R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
        </strong>
      </div>

      {/* //BOTOES DO CRUD */}

      <div className="acoes-card">

        <button
          type="button"
          className="botao-editar"
          onClick={()=> aoEditar(produto)}
        >
          Editar
        </button>

        <button
          type="button"
          className="botao-excluir"
          onClick={()=> aoExcluir(produto.id)}
        >
          Excluir
        </button>

      </div>

    </article>
  );
}

export default Produto;


