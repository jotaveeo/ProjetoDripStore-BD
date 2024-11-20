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
// pegar todos os usuários
  async getAll(request, response) {
    try {
      const users = await UserRepository.getAll();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
// pegar um usuário específico
  async getUnique(request, response) {
    try {
      const getUser = await UserRepository.getUnique(request.body);
      if (!getUser) {
        return response.status(404).json("usuário não encontrado");
      }
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default new UserController();
