import CategoriaRepository from "../repository/CategoriaRepository.js";

class CategoriaController {
  async getAll(request, response) {
    try {
      const data = await CategoriaRepository.getAll();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async create(request, response) {
    try {
      const { nome, slug } = request.body;
      const newCategoria = { nome, slug };
      const createdCategoria = await CategoriaRepository.create(newCategoria);
      response.status(201).json(createdCategoria);
    } catch (error) {
      response.status(400).json({ error: "Erro ao criar categoria", details: error.message });
    }
  }

  async getUnique(request, response) {
    try {
      const { id } = request.params;
      const categoria = await CategoriaRepository.getById(Number(id));
      if (!categoria) {
        return response.status(404).json({ error: "Categoria não encontrada" });
      }
      response.status(200).json(categoria);
    } catch (error) {
      response.status(400).json({ error: "Erro ao buscar categoria", details: error.message });
    }
  }
}

export default new CategoriaController();