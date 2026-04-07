import cors from "cors";
import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req: Request, res: Response) => {
	res.json({ message: "Salut depuis le serveur Express !" });
});

app.listen(PORT, () => {
	console.log(`Serveur prêt sur http://localhost:${PORT}`);
});
