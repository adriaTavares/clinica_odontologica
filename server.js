import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;
const app = express();

// pasta pública (css, js, imagens)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "view")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Servidor rodando na porta ${PORT}`);
	console.log(`Endereço: http://192.168.3.80:${PORT}`);
});
