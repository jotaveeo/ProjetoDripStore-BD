import prisma from "../connection/connection.js";

class ProductRepository {
  async getAll() {
    try {
      const products = await prisma.produtos.findMany({
        include: {
          img: true,
        },
      });
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}

export default new ProductRepository();
