const { verificarMelhorRota, calcularDistancia } = require('./rota');

test('calcularDistancia - distância zero', () => {
    const result = calcularDistancia({latitude: 0, longitude: 0}, {latitude: 0, longitude: 0});
    expect(result).toBe(0);
});

test('calcularDistancia - distância em linha reta', () => {
    const result = calcularDistancia({latitude: 0, longitude: 0}, {latitude: 3, longitude: 4});
    expect(result).toBe(5);
});

test('calcularDistancia - coordenadas negativas', () => {
    const result = calcularDistancia({latitude: -1, longitude: -1}, {latitude: 1, longitude: 1});
    expect(result).toBeCloseTo(2.828, 3);
});

test('verificarMelhorRota - uma rota e um pedido', () => {
    const pedidos = [{endereco: {latitude: 0, longitude: 0}}];
    const rotas = [{latitude: 1, longitude: 1}];
    const result = verificarMelhorRota(pedidos, rotas);
    expect(result).toEqual({latitude: 1, longitude: 1});
});

test('verificarMelhorRota - múltiplas rotas e um pedido', () => {
    const pedidos = [{endereco: {latitude: 0, longitude: 0}}];
    const rotas = [{latitude: 1, longitude: 1}, {latitude: 0, longitude: 2}];
    const result = verificarMelhorRota(pedidos, rotas);
    expect(result).toEqual({latitude: 1, longitude: 1});
});

test('verificarMelhorRota - múltiplos pedidos e múltiplas rotas', () => {
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
    /*Há um empate nas duas rotas, a função escolhe a primeira.
    * Porém a rota {latitude: -1, longitude: -1} também, está correta
    */
    expect(result).toEqual({latitude: 2, longitude: 2});
});

test('verificarMelhorRota - rotas de distâncias iguais', () => {
    const pedidos = [{endereco: {latitude: 0, longitude: 0}}];
    const rotas = [{latitude: 1, longitude: 0}, {latitude: 0, longitude: 1}];
    const result = verificarMelhorRota(pedidos, rotas);
    expect(rotas).toContainEqual(result);
});
