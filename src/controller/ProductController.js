import ProductRepository from "../repository/ProductRepository.js";

class ProductController {
  async getAll(request, response) {
    try {
      const data = await ProductRepository.getAll();
      response.status(200).json(data);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async create(request, response) {
    try {
      const {
        enabled,
        nome,
        slug,
        estoque,
        descricao,
        preco,
        preco_desconto,
        desconto_off,
        img,
        catprod
      } = request.body;

      const newProduct = {
        enabled,
        nome,
        slug,
        estoque,
        descricao,
        preco,
        preco_desconto,
        desconto_off,
        img,
        catprod
      };

      const createdProduct = await ProductRepository.create(newProduct);
      response.status(201).json(createdProduct);
    } catch (error) {
      response.status(400).json({ error: "Erro ao criar produto", details: error.message });
    }
  }

  async getUnique(request, response) {
    try {
      const { id } = request.params;
      const product = await ProductRepository.getById(Number(id)); // Certifique-se de que o id está sendo convertido para número
      if (!product) {
        return response.status(404).json({ error: "Produto não encontrado" });
      }
      response.status(200).json(product);
    } catch (error) {
      response.status(400).json({ error: "Erro ao buscar produto", details: error.message });
    }
  }
}

export default new ProductController();