import ProductRepository from "../repository/ProductRepository.js";

class ProductController {
  async getAll(request, response) {
    try {
      const data = await ProductRepository.getAll();
      response.status(200).json(data);
    }
    catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

export default new ProductController();