const Pedidos = require('../models/pedidosModel');

exports.getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.find();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar pedidos', erro: err.message });
  }
};

exports.getPedidosById = async (req, res) => {
  try {
    const pedidos = await Pedidos.findById(req.params.id);
    if (!pedidos) return res.status(404).json({ mensagem: 'Pedido não encontrado' });
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar pedidos', erro: err.message });
  }
};

exports.createPedidos = async (req, res) => {
  try {
    const novoPedidos = new Pedidos(req.body);
    await novoPedidos.save();
    res.status(201).json(novoPedidos);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao criar pedidos', erro: err.message });
  }
};

exports.updatePedidos = async (req, res) => {
  try {
    const pedidosAtualizado = await Pedidos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedidosAtualizado) return res.status(404).json({ mensagem: 'Pedidos não encontrado' });
    res.json(pedidosAtualizado);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao atualizar pedidos', erro: err.message });
  }
};

exports.deletePedidos = async (req, res) => {
  try {
    const pedidosRemovido = await Pedidos.findByIdAndDelete(req.params.id);
    if (!pedidosRemovido) return res.status(404).json({ mensagem: 'Pedidos não encontrado' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao excluir pedidos', erro: err.message });
  }
};