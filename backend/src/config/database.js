const mongoose = require('mongoose');

async function conectarBanco(){

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB conectado com sucesso.')
        
    } catch (erro) {
        console.error('Erro ao conectar ao MongoDB: ', erro.message)
        process.exit(1)
        
    }
}

module.exports = conectarBanco;