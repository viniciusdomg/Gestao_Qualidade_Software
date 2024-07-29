const request = require('supertest');
const app = require('../src/app');

describe('API de Entrega', () => {
    it('GET /pedidos - deve retornar uma lista de pedidos', async () => {
        const res = await request(app).get('/pedidos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    it('POST /pedidos - deve criar um novo pedido', async () => {
        const pedido = {
            endereco: { latitude: 0, longitude: 0 },
            produto: 'Produto A',
            quantidade: 1
        };
        const res = await request(app).post('/pedidos').send(pedido);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual({ message: 'Pedido criado com sucesso' });

        const resGet = await request(app).get('/pedidos');
        expect(resGet.body).toContainEqual(pedido);
    });

    it('GET /rotas - deve retornar uma lista de rotas', async () => {
        const res = await request(app).get('/rotas');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    it('POST /rotas - deve criar uma nova rota', async () => {
        const rota = { latitude: 1, longitude: 1 };
        const res = await request(app).post('/rotas').send(rota);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual({ message: 'Rota criada com sucesso' });

        const resGet = await request(app).get('/rotas');
        expect(resGet.body).toContainEqual(rota);
    });

    it('POST /melhor-rota - deve retornar a melhor rota de entrega', async () => {
        const pedidos = [
            { endereco: { latitude: 0, longitude: 0 } },
            { endereco: { latitude: 1, longitude: 1 } }
        ];
        const rotas = [
            { latitude: 2, longitude: 2 },
            { latitude: -1, longitude: -1 }
        ];
        const res = await request(app).post('/melhor-rota').send({ pedidos, rotas });
        expect(res.statusCode).toEqual(200);
        expect(rotas).toContainEqual(res.body);
    });
});
