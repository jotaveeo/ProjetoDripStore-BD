import prisma from "../connection/connection.js";
import cryptPassword from "../utils/bcrypt.js";

class UserRepository {
  async create(body) {
    try {
      const hashPassword = cryptPassword(body.password);
      const createResult = await prisma.users.create({
        data: {
          nome: body.nome,
          email: body.email,
          senha: hashPassword,
          cpf: body.cpf,
          celular: body.celular,
          endereco: body.endereco,
          bairro: body.bairro,
          cidade: body.cidade,
          cep: body.cep,
          complemento: body.complemento,
        },
      });
      console.log("USUÁRIO CRIADO: ", createResult);
      return createResult;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const dataAll = await prisma.users.findMany();
      return dataAll;
    } catch (error) {
      throw error;
    }
  }

  async getUnique(id) {
    try {
      const data = await prisma.users.findUnique({
        where: {
          id: parseInt(id, 10),
        },
      });
      console.log("GET UNIQUE ID DO USUÁRIO: ", data);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserRepository();
