import express from "express";
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";
import LoginController from "../controller/LoginController.js"; // Certifique-se de importar o LoginController

const route = express.Router();

route.get("/product/all", ProductController.getAll);
route.post("/user/register", UserController.create);
route.get("/user/all", UserController.getAll);
route.post("/user/login", LoginController.login); // Certifique-se de que o método login está definido

export default route;