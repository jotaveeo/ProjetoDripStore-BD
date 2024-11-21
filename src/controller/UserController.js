import UserRepository from "../repository/UserRepository.js";

class UserController {
  async create(request, response) {
    try {
      const createUser = await UserRepository.create(request.body);
      console.log(createUser);
      return response.status(201).json(createUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  // Pegar todos os usuários
  async getAll(request, response) {
    try {
      const users = await UserRepository.getAll();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  // Pegar um usuário específico pelo ID
  async getUnique(request, response) {
    try {
      const userId = request.params.id;
      const getUser = await UserRepository.getUnique(userId);
      if (!getUser) {
        return response.status(404).json("usuário não encontrado");
      }
      return response.status(200).json(getUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default new UserController();
