import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    /**
     * Serialized: quando é necessário transformar as informações recuperadas
     * do banco antes de enviar para o front-end.
     * Esse processo é chamado de serialização
     *
     */
    const serializedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }));

    return response.json(serializedItems);
  }
}

export default ItemsController;
