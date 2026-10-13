import { useEffect } from "react";

function ProdutoDetalhes({ produto, aoFechar }) {
  useEffect(() => {
    function fecharComEscape(evento) {
      if (evento.key === "Escape") aoFechar();
    }
    document.addEventListener("keydown", fecharComEscape);
    return () => document.removeEventListener("keydown", fecharComEscape);
  }, [aoFechar]);

  return (
    <div className="modal-fundo" onClick={aoFechar}>
      <section className="modal-produto" role="dialog" aria-modal="true" aria-label={`Detalhes de ${produto.nome}`} onClick={(evento) => evento.stopPropagation()}>
        <button className="modal-fechar" type="button" onClick={aoFechar} aria-label="Fechar detalhes">✕</button>
        <span className="tag">DETALHES DO PRODUTO</span>
        <h2>{produto.nome}</h2>
        <p className="modal-id">ID: {produto._id}</p>
        <h3>Descrição</h3>
        <p>{produto.descricao || "Sem descrição."}</p>
        <h3>Categoria</h3>
        <p>{produto.categoria || "Não informada."}</p>
        <h3>Resumo</h3>
        <p>{produto.resumo || "Sem resumo."}</p>
        <h3>Tags</h3>
        <div className="lista-tags-ia">
          {Array.isArray(produto.tags) && produto.tags.length > 0
            ? produto.tags.map((tag, index) => <span className="tag-ia" key={`${tag}-${index}`}>{tag}</span>)
            : <p>Nenhuma tag cadastrada.</p>}
        </div>
        <div className="modal-preco">Preço: <strong>R$ {Number(produto.preco).toFixed(2).replace(".", ",")}</strong></div>
      </section>
    </div>
  );
}

export default ProdutoDetalhes;
