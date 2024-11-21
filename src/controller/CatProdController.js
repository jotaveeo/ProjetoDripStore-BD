import CatProdRepository from "../repository/CatProdRepository.js";

class CatProdController {
  async getAll(request, response) {
    try {
      const data = await CatProdRepository.getAll();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async create(request, response) {
    try {
      const { product_id, categoria_id } = request.body;
      const newCatProd = { product_id, categoria_id };
      const createdCatProd = await CatProdRepository.create(newCatProd);
      response.status(201).json(createdCatProd);
    } catch (error) {
      response.status(400).json({ error: "Erro ao criar CatProd", details: error.message });
    }
  }

  async getUnique(request, response) {
    try {
      const { id } = request.params;
      const catProd = await CatProdRepository.getById(Number(id));
      if (!catProd) {
        return response.status(404).json({ error: "CatProd não encontrado" });
      }
      response.status(200).json(catProd);
    } catch (error) {
      response.status(400).json({ error: "Erro ao buscar CatProd", details: error.message });
    }
  }
}

export default new CatProdController();