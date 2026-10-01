const {GoogleGenAI} = require("@google/genai");

async function gerarDescricao(req, res){

    try {

        const {nome, preco} = req.body;


        

        if(!nome || !nome.trim()){
            return res.status(400).json({
                mensagem: 'Informe o nome do produto'
            })
        }

        if(!process.env.GEMINI_API_KEY){
            return res.status(500).json({
                mensagem: "GEMINI_API_KEY não configurada no backend"
            })
        }

        const ia = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

        const prompt = `Crie uma descrição curta e objetiva para um produto de catálogo online.
        Produto: ${nome.trim()}        
        Preço: ${preco ? `R$ ${preco}` : "não informado"}
        Use no máximo 2 frases. Não invente especificações técnicas que não foram informadas.`;

        const resposta = await ia.models.generateContent({

            model: "gemini-3.5-flash-lite",
            contents: prompt
        })


        const descricao = resposta.text?.trim();


        if(!descricao){

            return res.status(502).json({
                mensagem: 'A IA não retornou uma descrição'
            })

        }
        
        return res.json({descricao});

        
    } catch (erro) {

        const status = erro?.status || erro?.statusCode || erro?.code;
        const textoErro = `${erro.message} || "" ${erro?.name || ""}`;
        
        if(Number(status) === 429 || /429|RESOURCE_EXHAUSTED|queta/i.test(textoErro)){

            return res.status(429).json({
                codigo: 429,
                mensagem: "Erro - limite/cota da API Gemini atingido."+
                "Aguarde a liberação da cota o verifique seu plano/créditos"
            });
        }

        return res.status(500).json({
            codigo: 500,
            mensagem: "Erro 500 - não foi possível gerar a descrição com IA.",
          
        });        
    }
}

module.exports = {gerarDescricao}
