import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
	// 1. Gestion du CORS (pour autoriser le frontend à communiquer avec cette fonction)
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

	// Réponse immédiate pour la requête de pré-vérification
	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	// 2. Vérification de la méthode
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ message: "Méthode non autorisée. Utilisez POST." });
	}

	// 3. Extraction et validation rapide des données
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res
			.status(400)
			.json({ message: "Tous les champs (nom, email, message) sont requis." });
	}

	if (message.length < 10) {
		return res
			.status(400)
			.json({ message: "Le message est trop court (minimum 10 caractères)." });
	}

	// 4. Configuration de Nodemailer
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		// 5. Envoi de l'email
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.EMAIL_USER,
			subject: `Nouveau message Portfolio de ${name}`,
			text: message, // Version texte brut
			html: `
        <h3>Nouveau contact depuis le portfolio</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
		});

		return res.status(200).json({ message: "Message envoyé avec succès !" });
	} catch (error) {
		console.error("Erreur Nodemailer:", error);
		return res
			.status(500)
			.json({ message: "Erreur lors de l'envoi de l'email." });
	}
}
