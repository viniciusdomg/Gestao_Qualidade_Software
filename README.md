# Gestao_Qualidade_Software
 Repositório destinado para trabalhos de Gestão e Qualidade de Software

## Clone o projeto
git clone https://github.com/SEU_USUARIO/api-entrega.git

## Entre na pasta
cd api-entrega

## Instale o npm
npm install

## Rode o teste
npm test


## Estrutura
GET /pedidos
Descrição: Retorna uma lista de pedidos.
Valores Esperados:
Status: 200
Corpo da resposta: [] (uma lista vazia inicialmente)

POST /pedidos
Descrição: Cria um novo pedido.
Valores Esperados:
Status: 201
Corpo da resposta: { "message": "Pedido criado com sucesso" }
Ao fazer uma nova requisição GET /pedidos, o novo pedido deve estar presente na lista

GET /rotas
Descrição: Retorna uma lista de rotas.
Valores Esperados:
Status: 200
Corpo da resposta: [] (uma lista vazia inicialmente)

POST /rotas
Descrição: Cria uma nova rota.
Status: 201
Corpo da resposta: { "message": "Rota criada com sucesso" }
Ao fazer uma nova requisição GET /rotas, a nova rota deve estar presente na lista

POST /melhor-rota
Descrição: Verifica a melhor rota de entrega para os pedidos.
Status: 200
Corpo da resposta: { "latitude": 2, "longitude": 2 } ou { "latitude": -1, "longitude": -1 }, dependendo da implementação da função verificarMelhorRota.
