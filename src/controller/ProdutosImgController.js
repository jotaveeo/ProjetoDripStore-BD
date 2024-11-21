import ProdutosImgRepository from "../repository/ProdutosImgRepository.js";

class ProdutosImgController {
  async getAll(request, response) {
    try {
      const data = await ProdutosImgRepository.getAll();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async create(request, response) {
    try {
      const { product_id, path } = request.body;
      const newProdutosImg = { product_id, path };
      const createdProdutosImg = await ProdutosImgRepository.create(newProdutosImg);
      response.status(201).json(createdProdutosImg);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async getUnique(request, response) {
    try {
      const { id } = request.params;
      const produtosImg = await ProdutosImgRepository.getById(Number(id));
      if (produtosImg) {
        response.status(200).json(produtosImg);
      } else {
        response.status(404).json({ message: "Image not found" });
      }
    } catch (error) {
      response.status(400).json(error);
    }
  }
}

export default new ProdutosImgController();