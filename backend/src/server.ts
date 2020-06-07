/**
 * Rota: Endereço completo da requisição
 * Recurso: Qual entidade está sendo acessada no sistema
 */

/**
 * Métodos HTTP principais
 * GET: Buscar informações no back-end
 * POST: Criar uma informação no back-end
 * PUT: Atualizar uma informação existente no back-end
 * DELETE: Remover uma informação no back-end
 */

/**
 * Request Params: Parâmetros de rotas que identificam um recurso => request.params
 * Query Params: Parâmetros nomeados. Geralmente são opcionais, ou seja,
 * a rota funcionária sem. Utilizado para fazer filtros, páginações, etc. => request.query
 * Request Body: corpo da requisição.  Utilizado para criação/atualização => request.body
 */

import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import {errors} from 'celebrate';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
  console.log('Server up and running');
});
