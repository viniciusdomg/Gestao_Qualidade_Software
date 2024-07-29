class PedidoService {
    constructor() {
        this.pedidos = [];
    }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    listarPedidos() {
        return this.pedidos;
    }
}

module.exports = PedidoService;