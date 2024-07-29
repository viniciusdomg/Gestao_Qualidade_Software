const express = require('express');
const bodyParser = require('body-parser');
const PedidoService = require('./pedidoService');
const { verificarMelhorRota, RotaService } = require('./rotaService');

const app = express();
app.use(bodyParser.json());

const pedidoService = new PedidoService();
const rotaService = new RotaService();

app.get('/pedidos', (req, res) => {
    res.json(pedidoService.listarPedidos());
});

app.post('/pedidos', (req, res) => {
    const { endereco, produto, quantidade } = req.body;
    if (!endereco || !produto || quantidade === undefined) {
        return res.status(400).json({ error: 'Dados inválidos' });
    }
    pedidoService.adicionarPedido({ endereco, produto, quantidade });
    res.status(201).json({ message: 'Pedido criado com sucesso' });
});

app.get('/rotas', (req, res) => {
    res.json(rotaService.listarRotas());
});

app.post('/rotas', (req, res) => {
    const { latitude, longitude } = req.body;
    if (latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: 'Dados inválidos' });
    }
    rotaService.adicionarRota({ latitude, longitude });
    res.status(201).json({ message: 'Rota criada com sucesso' });
});

app.post('/melhor-rota', (req, res) => {
    const { pedidos, rotas } = req.body;
    if (!Array.isArray(pedidos) || !Array.isArray(rotas)) {
        return res.status(400).json({ error: 'Dados inválidos' });
    }
    const melhorRota = verificarMelhorRota(pedidos, rotas);
    res.json(melhorRota);
});

module.exports = app;
