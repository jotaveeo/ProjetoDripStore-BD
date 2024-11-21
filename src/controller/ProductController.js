import ProductRepository from "../repository/ProductRepository.js";

class ProductController {
  async getAll(request, response) {
    try {
      const data = await ProductRepository.getAll();
      console.log(data);
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }
}

export default new ProductController();
