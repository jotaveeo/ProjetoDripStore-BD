import prisma from "../connection/connection.js";
import cryptPassword from "../utils/bcrypt.js";

class UserRepository {
  async create(body) {
    try {
      const hashPassword = await cryptPassword(body.password);
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
      console.log("aqui é o userrepository: ", createResult);
      return createResult;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const dataAll = await prisma.users.findMany();
      return dataAll;
    } catch (error) {
      return error;
    }
  }

  async getUnique(userId) {
    try {
      const data = await prisma.users.findUnique({
        where: {
          id: parseInt(userId, 10),
        },
      });
      console.log("id do userrepository: ", data);
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();
