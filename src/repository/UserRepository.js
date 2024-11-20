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
      console.log("aqui é o userrepository: ", createResult);
      return createResult;
    } catch (error) {
      return error;
    }
    //    return await prisma.users.create()
  }

  async getAll() {
    try {
      const dataAll = await prisma.users.findMany();
      return dataAll;
    } catch (error) {
      return error;
    }
  }

  async getUnique(body) {
    try {
      const data = await prisma.users.findUnique({
        where: {
          email: body.email,
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();
