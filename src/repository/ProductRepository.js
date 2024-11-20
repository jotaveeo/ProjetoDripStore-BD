import prisma from "../connection/connection.js";

class ProductRepository {
  async getAll() {
    return await prisma.produtos.findMany({
      include: {
        img: true,
      },
    });
  }
}

export default new ProductRepository();
