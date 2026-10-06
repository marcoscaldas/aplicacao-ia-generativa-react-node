import { useEffect, useState } from "react"; // ALTERADO: adicionado useEffect

// ALTERADO: novas props para edição
function FormProduto({ aoCadastrar, aoAlterar, produtoEmEdicao, aoCancelarEdicao }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const [categoria, setCategoria] = useState("");
  const [tags, setTags] = useState([]);
  const [resumo, setResumo] = useState("");

  const [erro, setErro] = useState("")

  // NOVO IA: controla o estado do botão enquanto o Gemini responde.
  const [gerandoDescricao, setGerandoDescricao] = useState(false);

  // ==================== NOVO: carregar produto no formulário ====================
  useEffect(() => {
    if (produtoEmEdicao) {
      setNome(produtoEmEdicao.nome);
      setDescricao(produtoEmEdicao.descricao || "");
      setPreco(produtoEmEdicao.preco);
    }
  }, [produtoEmEdicao]);
  // ============================================================================

  // ==================== NOVO: limpar formulário ====================
  function limparFormulario() {
    setNome("");
    setDescricao("");
    setPreco("");
    setCategoria("");
    setTags([]);
    setResumo("");
    setErro("");
  }
  // ================================================================

  // ==================== NOVO IA: gerar descrição ====================
  async function gerarDescricaoComIA() {
    if (!nome.trim()) {
      setErro("Digite o nome do produto antes de gerar a descrição.");
      return;
    }

    setErro("");
    setGerandoDescricao(true);

    try {
      const resposta = await fetch("/api/ia/descricao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome: nome.trim(), preco })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        // Mantém visível o código HTTP retornado pelo backend.
        // Ex.: 429 quando a cota do Gemini for atingida.
        setErro(dados.mensagem || `Erro ${resposta.status} — não foi possível gerar a descrição.`);
        return;
      }

      // A resposta da IA passa diretamente para o campo descrição.
      setDescricao(dados.descricao);
      setCategoria(dados.categoria);
      setTags(dados.tags);
      setResumo(dados.resumo);

    } catch (erro) {
      console.error(erro);
      setErro("Não foi possível conectar ao serviço de IA.");
    } finally {
      setGerandoDescricao(false);
    }
  }
  // =================================================================

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
    };

    // ==================== ALTERADO: cadastrar OU alterar ====================
    if (produtoEmEdicao) {
      aoAlterar({
        id: produtoEmEdicao.id,
        ...produto
      });
    } else {
      aoCadastrar(produto);
    }
    // =======================================================================

    limparFormulario();
  }

  // ==================== NOVO: cancelar edição ====================
  function cancelarEdicao() {
    limparFormulario();
    aoCancelarEdicao();
  }
  // ==============================================================

  return (
    <form className="formulario" onSubmit={enviarFormulario}>

      <div className="titulo-formulario">

        <div>
          {/* ALTERADO: título muda durante a edição */}
          <span className="tag">{produtoEmEdicao ? "EDITANDO ITEM" : "NOVO ITEM"}</span>
          <h2>{produtoEmEdicao ? "Alterar produto" : "Cadastrar produto"}</h2>
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
          <div className="campo-descricao-ia">
            <input
              type="text"
              value={descricao}
              onChange={(evento) => setDescricao(evento.target.value)}
              placeholder="Descrição do produto"
            />

            <button
              type="button"
              className="botao-ia"
              onClick={gerarDescricaoComIA}
              disabled={gerandoDescricao}
            >
              {gerandoDescricao ? "Gerando..." : "✨ Gerar com IA"}
            </button>
          </div>
        </label>

        <label>
          Categoria suegerida pela IA
        <input
          type="text"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
          placeholder="Categoria do produto"        
        />
        </label>

        <label>
          Resumo
        <input
          type="text"
          value={resumo}
          onChange={(evento) => setResumo(evento.target.value)}
          placeholder="Resumo do produto"        
        />
        </label>

        {tags.length > 0 && (

          <div className="tags-ia">

            <span className="titulo-tags" >Tags sugeridas pela IA</span>

            <div className="lista-tags-ia">

              {tags.map((tag, index)=> ( 
                
                <span key={index} className="tag-ia">

                  {tag}

                </span>


              ))}
            </div>
          </div>
        )}






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

      {/* ==================== ALTERADO: botões de cadastro/edição ==================== */}
      <div className="acoes-formulario">
        <button type="submit">
          {produtoEmEdicao ? "Salvar alterações" : "+ Cadastrar produto"}
        </button>

        {produtoEmEdicao && (
          <button type="button" className="botao-cancelar" onClick={cancelarEdicao}>
            Cancelar
          </button>
        )}
      </div>
      {/* ============================================================================ */}

      {/* NOVO: exibição da validação que já existia no estado erro */}
      {erro && <p className="mensagem-erro">{erro}</p>}

    </form>
    
  );
}

export default FormProduto;
