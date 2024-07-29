function verificarMelhorRota(pedidos, rotas) {
    let melhorRota = null;
    let menorDistancia = Infinity;
    rotas.forEach(rota => {
        let distanciaTotal = 0;
        pedidos.forEach(pedido => {
            distanciaTotal += calcularDistancia(pedido.endereco, rota);
        });
        console.log(`Rota: ${JSON.stringify(rota)}, Distância Total: ${distanciaTotal}`);
        if (distanciaTotal < menorDistancia) {
            menorDistancia = distanciaTotal;
            melhorRota = rota;
        }
    });
    return melhorRota;
}

function calcularDistancia(endereco1, endereco2) {
    return Math.sqrt(
        Math.pow(endereco2.latitude - endereco1.latitude, 2) + 
        Math.pow(endereco2.longitude - endereco1.longitude, 2)
    );
}

const pedidos = [
    {endereco: {latitude: 0, longitude: 0}},
    {endereco: {latitude: 1, longitude: 1}}
];
const rotas = [
    {latitude: 2, longitude: 2},
    {latitude: -1, longitude: -1}
];
const result = verificarMelhorRota(pedidos, rotas);
console.log('Resultado da Melhor Rota:', result);

module.exports = { verificarMelhorRota, calcularDistancia };
