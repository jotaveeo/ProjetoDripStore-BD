import prisma from "../connection/connection.js";

class CategoriaRepository {
  async getAll() {
    return await prisma.categoria.findMany();
  }

  async create(data) {
    return await prisma.categoria.create({
      data: {
        nome: data.nome,
        slug: data.slug,
      },
    });
  }

  async getById(id) {
    return await prisma.categoria.findUnique({
      where: { id },
    });
  }
}

export default new CategoriaRepository();