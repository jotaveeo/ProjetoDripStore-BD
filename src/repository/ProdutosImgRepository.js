import prisma from "../connection/connection.js";

class ProdutosImgRepository {
  async getAll() {
    return await prisma.produtosImg.findMany();
  }

  async create(produtosImg) {
    return await prisma.produtosImg.create({
      data: produtosImg,
    });
  }

  async getById(id) {
    return await prisma.produtosImg.findUnique({
      where: { id: id },
    });
  }
}

export default new ProdutosImgRepository();