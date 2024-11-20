import prisma from "../connection/connection.js";

class LoginRepository {
  async findByEmailOrName(login) {
    try {
      const user = await prisma.users.findFirst({
        where: {
          OR: [{ email: login }, { nome: login }],
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new LoginRepository();