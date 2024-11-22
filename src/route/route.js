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
route.post("/user/register", UserController.create); // funcionando
route.get("/user/all", UserController.getAll); // funcionando
route.get("/user/:id", UserController.getUnique); // funcionando 
route.post("/user/login", LoginController.login); // funcionando

// Rotas para produtos
route.get("/product/all", ProductController.getAll); // funcionando
route.post("/product/register", ProductController.create); // funcionando
route.get("/product/:id", ProductController.getUnique); // funcionando

// Rotas para imagens de produtos
route.get("/produtosImg/all", ProdutosImgController.getAll); // funcionando
route.post("/produtosImg/register", ProdutosImgController.create); // funcionando
route.get("/produtosImg/:id", ProdutosImgController.getUnique); // funcionando

// Rotas para categorias de produtos (relacionamento entre categoria e produto)
route.get("/catProd/all", CatProdController.getAll); // funcionando(retorna categoria e o produto)
route.post("/catProd/register", CatProdController.create); // funcionando
route.get("/catProd/:id", CatProdController.getUnique); // funcionando

// Rotas para categorias
route.get("/categoria/all", CategoriaController.getAll); // funcionando
route.post("/categoria/register", CategoriaController.create); // funcionando
route.get("/categoria/:id", CategoriaController.getUnique);  // funcionando

// Rotas para compras (incompleto)
route.post("/compra/finalizar", CompraController.finalizarCompra);
route.get("/compra/summary/:id", CompraController.getPurchaseSummary);

// Rota protegida(teste)
route.get("/painel/product", Validate, (request, response) => {
  response.status(200).json("Você está autorizado para acessar essa rota");
});

export default route;