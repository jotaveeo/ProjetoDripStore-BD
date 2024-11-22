import jwt from "jsonwebtoken";

const secret = process.env.SIGNATURE;

const generateToken = (email, userId) => {
  return jwt.sign(
    {
      role: "adm",
      email: email,
      id: userId,
    },
    secret,
    { expiresIn: "1h" }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

export default generateToken;