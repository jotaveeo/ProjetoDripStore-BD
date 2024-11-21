import prisma from "../connection/connection.js";

class ProductRepository {
  async getAll() {
    return await prisma.produtos.findMany({
      include: {
        img: true,
        catprod: true,
      },
    });
  }

  async create(data) {
    // Verificar se a categoria existe
    const categoriaExists = await prisma.categoria.findUnique({
      where: { id: data.catprod.categoria_id },
    });

    if (!categoriaExists) {
      throw new Error("Categoria não encontrada");
    }

    return await prisma.produtos.create({
      data: {
        enabled: data.enabled,
        nome: data.nome,
        slug: data.slug,
        estoque: data.estoque,
        descricao: data.descricao,
        preco: data.preco,
        preco_desconto: data.preco_desconto,
        desconto_off: data.desconto_off,
        img: {
          create: {
            path: data.img.path,
          },
        },
        catprod: {
          create: {
            categoria: {
              connect: {
                id: data.catprod.categoria_id,
              },
            },
          },
        },
      },
    });
  }

  async getById(id) {
    return await prisma.produtos.findUnique({
      where: { id: id }, // Certifique-se de que o id está sendo passado corretamente
      include: {
        img: true,
        catprod: true,
      },
    });
  }
}

export default new ProductRepository();