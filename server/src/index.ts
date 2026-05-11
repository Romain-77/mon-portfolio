import cors from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();

// SÉCURITÉ

app.use(helmet()); // Sécurise les en-têtes HTTP

const contactLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, //1heure
	max: 5, // limite chaque IP à 5 messages par heure
	message: "Trop de messages envoyés. Merci de réessayer ulterieurement.",
});

console.log("CLIENT_URL configurée:", process.env.CLIENT_URL);
app.use(
	cors({
		origin: process.env.CLIENT_URL || "http://localhost:5173", // Autorise uniquement le frontend.
		methods: ["GET", "POST", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true, // Autorise uniquement les en-têtes spécifiés.
	}),
);

// app.options("(.*)", cors()); // Permet les requêtes préliminaires CORS

app.use(express.json());

// ROUTES

app.post(
	"/api/contact",
	contactLimiter,
	[
		body("name").trim().escape().notEmpty().withMessage("Nom requis"),
		body("email").isEmail().normalizeEmail().withMessage("Email invalide"),
		body("message")
			.trim()
			.escape()
			.isLength({ min: 10 })
			.withMessage("Message trop court"),
	],
	async (req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, message } = req.body;

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		try {
			await transporter.sendMail({
				from: `"${name}" <${email}>`,
				to: process.env.EMAIL_USER,
				replyTo: email,
				subject: `Portfolio - Nouveau message de ${name}`,
				html: `
            <div style="font-family: sans-serif; color: #333;">
                <h3 style="color: #163832;">Nouveau contact depuis le portfolio</h3>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <hr />
                <p><strong>Message :</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            </div>
        `,
			});
			res.status(200).json({ message: "Message envoyé avec succès !" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Erreur lors de l'envoi." });
		}
	},
);
const PORT = process.env.PORT || 5001;

app.listen(Number(PORT), "0.0.0.0", () => {
	console.log(`Serveur prêt sur le port ${PORT}`);
});

export default app;
