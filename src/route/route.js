import express from "express";
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";
import LoginController from "../controller/LoginController.js";
import CompraController from "../controller/CompraController.js";

const route = express.Router();

route.get("/product/all", ProductController.getAll); // Rota para buscar todos os produtos
route.post("/user/register", UserController.create); // Rota para criar um usuário(apenas recebe os dados)
route.get("/user/all", UserController.getAll); // Rota para buscar todos os usuários
route.get("/user/:id", UserController.getUnique); // Rota para buscar um usuário específico pelo ID
route.post("/user/login", LoginController.login); // Rota para fazer login(apenas recebe os dados)
route.post("/compra/finalizar", CompraController.finalizarCompra); // Rota para finalizar a compra(apenas recebe os dados)
route.get("/compra/summary/:id", CompraController.getPurchaseSummary); // Rota para buscar o resumo da compra

export default route;