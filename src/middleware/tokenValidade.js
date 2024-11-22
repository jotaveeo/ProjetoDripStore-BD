import { verifyToken } from "../utils/jwt.js";

const Validate = (request, response, next) => {
  try {
    const token = request.headers.authorization;
    const ValidateToken = verifyToken(token);

    next();
  } catch (error) {
    return response.status(401).json("Token inválido");
  }
};

export default Validate;
