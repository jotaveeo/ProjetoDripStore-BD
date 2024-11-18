import express from "express";
import route from "./src/route/route.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", route);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
