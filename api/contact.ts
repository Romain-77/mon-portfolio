import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
	// Gestion du CORS
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL || "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET,OPTIONS,PATCH,DELETE,POST,PUT",
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
	);

	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	if (req.method !== "POST") {
		return res.status(405).json({ message: "Méthode non autorisée." });
	}

	// Extraction des données
	const { name, email, message } = req.body;

	// Validation rapide
	if (!name || !email || !message) {
		return res.status(400).json({ message: "Champs manquants." });
	}

	// Configuration de Nodemailer
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		//Envoi de l'email avec les optimisations
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			replyTo: email, // L'adresse du visiteur pour lui répondre
			subject: ` Portfolio : Message de ${name}`,
			html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h3 style="color: #163832;">Nouveau contact depuis le portfolio</h3>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Message :</strong></p>
                <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
            `,
		});

		return res.status(200).json({ message: "Message envoyé avec succès !" });
	} catch (error) {
		console.error("Erreur Nodemailer:", error);
		return res.status(500).json({ message: "Erreur lors de l'envoi." });
	}
}
