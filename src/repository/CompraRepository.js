import prisma from "../connection/connection.js";

class CompraRepository {
  async finalizarCompra(dadosCompra) {
    // Salva os dados do cartão no banco de dados
    const cartao = await prisma.cartao.create({
      data: {
        cartao: dadosCompra.cartao,
        validade: dadosCompra.validade,
        cvv: dadosCompra.cvv,
        nomeCartao: dadosCompra.nomeCartao,
      },
    });

    // Simulação de processamento da compra
    return {
      id: new Date().getTime(), // Simulação de um ID de compra
      ...dadosCompra,
      status: "Aprovada",
      cartaoId: cartao.id,
    };
  }

  async getPurchaseSummary(userId) {
    // Simulação de busca do resumo da compra
    return [
      {
        name: "Tênis Nike Revolution 6 Next Nature Masculino",
        price: "219,00",
        imageUrl: "https://via.placeholder.com/150",
      },
    ];
  }
}

export default new CompraRepository();