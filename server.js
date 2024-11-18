import express from "express";
import route from "./src/route/route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
