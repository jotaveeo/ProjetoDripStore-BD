import prisma from "../connection/connection.js";

class CatProdRepository {
  async getAll() {
    return await prisma.catProd.findMany({
      include: {
        product: true,
        categoria: true,
      },
    });
  }

  async create(data) {
    // Verificar se a categoria existe
    const categoriaExists = await prisma.categoria.findUnique({
      where: { id: data.categoria_id },
    });

    if (!categoriaExists) {
      throw new Error("Categoria não encontrada");
    }

    return await prisma.catProd.create({
      data: {
        product: {
          connect: {
            id: data.product_id,
          },
        },
        categoria: {
          connect: {
            id: data.categoria_id,
          },
        },
      },
    });
  }

  async getById(id) {
    return await prisma.catProd.findUnique({
      where: { id },
      include: {
        product: true,
        categoria: true,
      },
    });
  }
}

export default new CatProdRepository();