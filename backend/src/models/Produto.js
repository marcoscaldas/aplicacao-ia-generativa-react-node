const mongoose = require('mongoose');


const produtoSchema = new mongoose.Schema(
    {

        nome:{type: String, required: true, trim: true},
        descricao: {type: String, default: "", trim: true},
        categoria: {type: String, default: "", trim: true},

        tags: {type: [String], default: [] },

        resumo: {type: String, default: "", trim: true},
        preco: {type: Number, required: true, min: 0}
    },

    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Produto", produtoSchema);