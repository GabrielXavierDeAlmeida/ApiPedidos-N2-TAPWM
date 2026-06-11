const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    required: [true, 'O nome é obrigatório']
  },
  numeroCliente: {
    type: String,
    required: [true, 'O telefone do cliente é obrigatório']
  },
  itensPedido: {
    type: String,
    required: [true, 'Os itens do pedido são obrigatórios']
  },
  valorPedido: {
    type: String,
    required: [true, 'O valor final do pedido é obrigatório']
  },
  horaPedido: {
    type: Date, 
    default: Date.now,
    required: [true, 'A hora do pedido é obrigatória']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pedido', pedidosSchema);