import bcrypt from "bcrypt";

const SALTS = parseInt(process.env.SALT_ROUNDS);

const cryptPassword = (password) => {
  return bcrypt.hashSync(password, SALTS);
};

export default cryptPassword;
