import LoginRepository from "../repository/LoginRepository.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/jwt.js";

class LoginController {
  async login(request, response) {
    try {
      const { login, password } = request.body;

      const user = await LoginRepository.findByEmailOrName(login);

      if (!user) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.senha);

      if (!isPasswordValid) {
        return response.status(401).json({ error: "Senha inválida" });
      }

      const token = generateToken(user.email, user.id);
      return response.status(200).json({ message: "Login bem-sucedido", token, userId: user.id });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao fazer login" });
    }
  }
}

export default new LoginController();