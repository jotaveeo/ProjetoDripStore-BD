import jwt from "jsonwebtoken";

const secret = process.env.SIGNATURE;
const generateToken = (email) => {
  return jwt.sign(
    {
      role: "adm",
      email: email,
    },
    secret,
    { expiresIn: "1h" }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

export default generateToken;
