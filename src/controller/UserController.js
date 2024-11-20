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
  async getAll(request, response) {
    try {
      const users = await UserRepository.getAll();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default new UserController();
