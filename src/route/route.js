import express from "express";
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";
import LoginController from "../controller/LoginController.js";
import CompraController from "../controller/CompraController.js";
import ProdutosImgController from "../controller/ProdutosImgController.js";
import CatProdController from "../controller/CatProdController.js";
import CategoriaController from "../controller/CategoriaController.js";
import Validate from "../middleware/tokenValidade.js";

const route = express.Router();

// Rotas para usuários
route.post("/user/register", UserController.create);
route.get("/user/all", UserController.getAll);
route.get("/user/:id", UserController.getUnique);
route.post("/user/login", LoginController.login);

// Rotas para produtos
route.get("/product/all", ProductController.getAll);
route.post("/product/register", ProductController.create);
route.get("/product/:id", ProductController.getUnique);

// Rotas para imagens de produtos
route.get("/produtosImg/all", ProdutosImgController.getAll);
route.post("/produtosImg/register", ProdutosImgController.create);
route.get("/produtosImg/:id", ProdutosImgController.getUnique);

// Rotas para categorias de produtos
route.get("/catProd/all", CatProdController.getAll);
route.post("/catProd/register", CatProdController.create);
route.get("/catProd/:id", CatProdController.getUnique);

// Rotas para categorias
route.get("/categoria/all", CategoriaController.getAll);
route.post("/categoria/register", CategoriaController.create);
route.get("/categoria/:id", CategoriaController.getUnique);

// Rotas para compras
route.post("/compra/finalizar", CompraController.finalizarCompra);
route.get("/compra/summary/:id", CompraController.getPurchaseSummary);

route.get("/painel/product", Validate, (request, response) => {
  response.status(200).json("Você está autorizado para acessar essa rota");
});

export default route;