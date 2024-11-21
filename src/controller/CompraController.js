import CompraRepository from "../repository/CompraRepository.js";

class CompraController {
  async finalizarCompra(req, res) {
    try {
      const { cartao, validade, cvv, nomeCartao } = req.body;

      // Validação básica dos dados
      if (!cartao || !validade || !cvv || !nomeCartao) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }

      // Lógica para processar a compra
      const compra = await CompraRepository.finalizarCompra({
        cartao,
        validade,
        cvv,
        nomeCartao,
      });
      console.log(compra);
      

      return res.status(200).json({ message: "Compra finalizada com sucesso", compra });
    } catch (error) {
      console.error("Erro ao finalizar a compra:", error);
      return res.status(500).json({ error: "Erro ao finalizar a compra" });
    }
  }

  async getPurchaseSummary(req, res) {
    try {
      const userId = req.params.id;
      const summary = await CompraRepository.getPurchaseSummary(userId);
      return res.status(200).json(summary);
    } catch (error) {
      console.error("Erro ao buscar resumo da compra:", error);
      return res.status(500).json({ error: "Erro ao buscar resumo da compra" });
    }
  }
}

export default new CompraController();