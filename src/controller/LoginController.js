import LoginRepository from "../repository/LoginRepository.js";
import bcrypt from "bcrypt";

class LoginController {
  async login(request, response) {
    try {
      const { login, password } = request.body;

      // if (!login || !password) {
      //   return response
      //     .status(400)
      //     .json({ error: "Login e senha são obrigatórios" });
      // }

      const user = await LoginRepository.findByEmailOrName(login);

      if (!user) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.senha);

      if (!isPasswordValid) {
        return response.status(401).json({ error: "Senha inválida" });
      }

      return response.status(200).json({ message: "Login bem-sucedido" });
    } catch (error) {
      console.error(error);
      throw response.status(500).json({ error: "Erro ao fazer login" });
    }
  }
}

export default new LoginController();
