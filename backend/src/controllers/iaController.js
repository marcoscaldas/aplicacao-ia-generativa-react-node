const {GoogleGenAI, Type} = require("@google/genai");

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



        const prompt = `Analise o produto abaixo
        para um catálogo online.
        Produto: ${nome.trim()}        
        Preço: ${preco ? `R$ ${preco}` : "não informado"}

        Gere uma descrição curta e objetiva,
        uma categoria adequada,
        de 3 a 5 tags e um resumo curto.

        Não invente espedificações técnicas
        quen não foram informadas.`;


        const schemaProduto = {

            type: Type.OBJECT,

            properties:{

                descricao: {

                    type: Type.STRING,
                    description:
                        "Descrição curta e objetiva do produto, com no máximo 2 frases."
                },


                categoria:{
                    type: Type.STRING,
                    description:
                        "Categoria adequada para o produto em um catálogo online."
                },

                tags:{
                    type: Type.ARRAY,
                    items:{
                        type: Type.STRING
                    },
                    description:
                        "Lista contendo de 3 a 5 tags relacionadas a produto."
                },

                resumo:{

                    type: Type.STRING,
                    description:
                        "Resumo curto do produto em um frase."
                }

            },
            required: ["descricao", "categoria", "tags", "resumo"]
        };




        const resposta = await ia.models.generateContent({

            model: "gemini-3.5-flash-lite",
            contents: prompt,

            config: {

                responseMimeType: "application/json",
                responseSchema: schemaProduto
            }
        })


        const textoResposta = resposta.text?.trim();


        if(!textoResposta){

            return res.status(502).json({
                mensagem: 'A IA não retornou uma descrição'
            })

        }
        

        let dados;

        try {
            
            dados = JSON.parse(textoResposta);

        } catch (erro) {
            
            console.error("Resposta da IA não é um JSON válido: ", textoResposta);

            return res.status(502).json({
                mensagem: "A IA retornou uma resposta em formato inválido"
            })

        }


        const respostaValida =

            typeof dados.descricao === 'string' && dados.descricao.trim() &&
            typeof dados.categoria === 'string' && dados.categoria.trim() &&
            Array.isArray(dados.tags) &&
            dados.tags.length >= 1 &&
            dados.tags.every(tag => typeof tag === 'string' && tag.trim()) &&
            typeof dados.resumo === 'string' && dados.resumo.trim();


        if(!respostaValida){
            console.error("Resposta da IA fora da estrutura esperada: ", dados);

            return res.status(502).json({
                mensagem: "A IA retornou dados fora da estrutura esperada"
            })

        }

        return res.json({

            descricao: dados.descricao.trim(),
            categoria: dados.categoria.trim(),
            tags: dados.tags.map(tag => tag.trim()),
            resumo: dados.resumo.trim()
        })

        
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
